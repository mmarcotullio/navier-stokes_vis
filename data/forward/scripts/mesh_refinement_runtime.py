#!/usr/bin/env python3
"""mesh_refinement_runtime.py

Generates a mesh-resolution vs simpleFoam runtime dataset for the
pipe-with-sphere geometry.  Runs N_CASES simpleFoam solves at
logarithmically-spaced mesh resolutions (CharacteristicLengthMax
from coarse → fine) with fixed flow conditions (Re=500, U_in=0.5).

Output CSV columns:
    case_id, char_length_max, n_cells, solver_cpu_s, wall_clock_s,
    n_iterations, converged, status

Usage:
    python data/forward/scripts/mesh_refinement_runtime.py
    python data/forward/scripts/mesh_refinement_runtime.py --n-cases 10 --h-min 0.10
    python data/forward/scripts/mesh_refinement_runtime.py --keep-scratch
"""

import argparse
import csv
import os
import re
import shutil
import subprocess
import sys
import time
from pathlib import Path

import numpy as np
import torch

# ---------------------------------------------------------------------------
# OpenFOAM environment
# ---------------------------------------------------------------------------

OF_BASHRC = "/usr/lib/openfoam/openfoam2412/etc/bashrc"

# ---------------------------------------------------------------------------
# Fixed flow conditions (constant across all resolution levels)
# ---------------------------------------------------------------------------

RE = 500.0        # Reynolds number
U_IN = 0.5        # Mean inlet velocity [m/s]
PIPE_R = 0.5      # Pipe radius [m]
L_PIPE = 10.0     # Pipe length [m]
CYL_X  = 3.0      # Cylinder centre x [m]
CYL_R  = 0.25     # Cylinder radius [m]
NU = U_IN * 2 * PIPE_R / RE   # kinematic viscosity [m²/s]

# FNO timing: number of warm-up and timed forward passes per resolution level
FNO_WARMUP  = 2
FNO_REPEATS = 5

# ---------------------------------------------------------------------------
# Mesh characteristic length range
# ---------------------------------------------------------------------------

H_MAX_COARSE = 0.40   # coarsest mesh
H_MAX_FINE = 0.07     # finest mesh
N_CASES = 20

# ---------------------------------------------------------------------------
# Paths (relative to project root, detected from this script's location)
# ---------------------------------------------------------------------------

SCRIPT_DIR = Path(__file__).resolve().parent
# data/forward/scripts/ → data/forward/ → data/ → project root
PROJECT_ROOT = SCRIPT_DIR.parent.parent.parent

GEO_TEMPLATE = PROJECT_ROOT / "cfd_training_data" / "geometry" / "pipe_sphere.geo"
TEMPLATE_CASE = PROJECT_ROOT / "cfd_training_data" / "template_case"
SCRATCH_DIR   = PROJECT_ROOT / "data" / "scratch" / "resolution_study"
DEFAULT_OUTPUT = PROJECT_ROOT / "data" / "forward" / "datasets" / "mesh_refinement_runtime.csv"
FNO_MODEL_PATH = PROJECT_ROOT / "models" / "fno3d_best_forward.pt"


# ---------------------------------------------------------------------------
# OpenFOAM helper
# ---------------------------------------------------------------------------

def of_run(cmd: str, cwd: Path, timeout: int = 900) -> subprocess.CompletedProcess:
    """Run *cmd* after sourcing the OpenFOAM bashrc."""
    wrapped = f'bash -c "source {OF_BASHRC} > /dev/null 2>&1 && {cmd}"'
    return subprocess.run(
        wrapped, shell=True, cwd=str(cwd),
        capture_output=True, text=True, timeout=timeout,
    )


# ---------------------------------------------------------------------------
# Geometry
# ---------------------------------------------------------------------------

def write_geo(char_length_max: float, dest: Path) -> None:
    """Write a modified .geo file with the given CharacteristicLengthMax."""
    src = GEO_TEMPLATE.read_text()
    char_length_min = max(0.01, char_length_max * 0.25)
    src = re.sub(
        r"Mesh\.CharacteristicLengthMax\s*=\s*[\d.]+;",
        f"Mesh.CharacteristicLengthMax = {char_length_max:.5f};",
        src,
    )
    src = re.sub(
        r"Mesh\.CharacteristicLengthMin\s*=\s*[\d.]+;",
        f"Mesh.CharacteristicLengthMin = {char_length_min:.5f};",
        src,
    )
    dest.write_text(src)


# ---------------------------------------------------------------------------
# Case setup
# ---------------------------------------------------------------------------

def setup_case(case_dir: Path) -> None:
    """
    Populate an OpenFOAM case directory from the template:
      - Copy 0/, system/, constant/ (without polyMesh)
      - Patch U (Umean), transportProperties (nu)
      - Replace controlDict with a minimal version (no sampleDict)
    """
    case_dir.mkdir(parents=True, exist_ok=True)

    # --- 0/ ---
    shutil.copytree(TEMPLATE_CASE / "0", case_dir / "0", dirs_exist_ok=True)

    # --- system/ ---
    shutil.copytree(TEMPLATE_CASE / "system", case_dir / "system", dirs_exist_ok=True)

    # --- constant/ (skip polyMesh – gmshToFoam creates it) ---
    const_dst = case_dir / "constant"
    const_dst.mkdir(exist_ok=True)
    for item in (TEMPLATE_CASE / "constant").iterdir():
        if item.name == "polyMesh":
            continue
        dst = const_dst / item.name
        if item.is_dir():
            shutil.copytree(item, dst, dirs_exist_ok=True)
        else:
            shutil.copy2(item, dst)

    # --- Patch Umean in 0/U ---
    u_file = case_dir / "0" / "U"
    u_text = u_file.read_text()
    # The codedFixedValue dict entry
    u_text = re.sub(r"(Umean\s+)[\d.]+;", rf"\g<1>{U_IN};", u_text)
    # The hardcoded scalar inside the code block
    u_text = re.sub(r"(scalar Umean = )[\d.]+;", rf"\g<1>{U_IN};", u_text)
    u_file.write_text(u_text)

    # --- Patch nu in constant/transportProperties ---
    tp_file = case_dir / "constant" / "transportProperties"
    tp_text = tp_file.read_text()
    tp_text = re.sub(
        r"(nu\s+\[0 2 -1 0 0 0 0\]\s*)[\d.e+\-]+;",
        rf"\g<1>{NU:.6e};",
        tp_text,
    )
    tp_file.write_text(tp_text)

    # --- Minimal controlDict (no functions / sampleDict block) ---
    (case_dir / "system" / "controlDict").write_text(_controldict_text())


def _controldict_text() -> str:
    """Return a minimal controlDict without the sampleDict functions block."""
    header = r"""/*--------------------------------*- C++ -*----------------------------------*\
| =========                 |                                                 |
| \\      /  F ield         | OpenFOAM: The Open Source CFD Toolbox           |
|  \\    /   O peration     | Version:  v2412                                 |
|   \\  /    A nd           |                                                 |
|    \\/     M anipulation  |                                                 |
\*---------------------------------------------------------------------------*/"""
    return f"""{header}

FoamFile
{{
    version     2.0;
    format      ascii;
    class       dictionary;
    location    "system";
    object      controlDict;
}}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //

application     simpleFoam;

startFrom       startTime;
startTime       0;

stopAt          endTime;
endTime         2000;

deltaT          1;

writeControl    timeStep;
writeInterval   500;
purgeWrite      1;
writeFormat     ascii;
writePrecision  6;
writeCompression off;

runTimeModifiable yes;

// ************************************************************************* //
"""


# ---------------------------------------------------------------------------
# Post-processing helpers
# ---------------------------------------------------------------------------

def count_cells(case_dir: Path) -> int | None:
    """Run checkMesh and parse the cell count from its output."""
    res = of_run("checkMesh -noTopology", case_dir)
    combined = res.stdout + res.stderr
    for line in combined.splitlines():
        m = re.search(r"\bcells:\s+(\d+)", line)
        if m:
            return int(m.group(1))
    # Fallback: count unique cell IDs in owner file
    return _count_cells_from_owner(case_dir)


def _count_cells_from_owner(case_dir: Path) -> int | None:
    owner_file = case_dir / "constant" / "polyMesh" / "owner"
    if not owner_file.exists():
        return None
    text = owner_file.read_text()
    # The first bare integer after the FoamFile header is nFaces (owner entries)
    # Max owner index + 1 = nCells
    numbers = []
    in_data = False
    for line in text.splitlines():
        stripped = line.strip()
        if stripped == "(":
            in_data = True
            continue
        if stripped == ")":
            break
        if in_data and stripped.isdigit():
            numbers.append(int(stripped))
    return max(numbers) + 1 if numbers else None


def extract_solver_stats(
    log_path: Path,
) -> tuple[float | None, int, bool, int, int, float | None]:
    """
    Parse simpleFoam log for:
      - final ExecutionTime (CPU seconds)
      - outer iteration count
      - convergence flag
      - total p-solver iterations  (GAMG / PCG solving for p)
      - total U-solver iterations  (smoothSolver solving for Ux/Uy/Uz)
      - pressure_iter_pct: p_iters / (p_iters + u_iters) * 100

    ``pressure_iter_pct`` is an iteration-count proxy for pressure-solve
    cost.  It under-estimates the true time fraction because GAMG iterations
    (used for p) are heavier than smoothSolver iterations (used for U), so
    the real pressure fraction is typically a bit higher than this number.
    """
    cpu_s = None
    iterations = 0
    converged = False
    p_iters = 0
    u_iters = 0

    if not log_path.exists():
        return cpu_s, iterations, converged, p_iters, u_iters, None

    # One combined pass over the log
    # Solver lines look like:
    #   GAMG:  Solving for p, ..., No Iterations 3
    #   smoothSolver:  Solving for Ux, ..., No Iterations 23
    solver_re = re.compile(
        r"Solving for (?P<field>\w+).*No Iterations (?P<n>\d+)"
    )

    text = log_path.read_text()
    for line in text.splitlines():
        m = re.search(r"ExecutionTime\s*=\s*([\d.]+)\s*s", line)
        if m:
            cpu_s = float(m.group(1))

        if re.search(r"^Time\s*=\s*\d+", line):
            iterations += 1

        sm = solver_re.search(line)
        if sm:
            field = sm.group("field")
            n = int(sm.group("n"))
            if field == "p":
                p_iters += n
            elif field.startswith("U"):   # Ux, Uy, Uz
                u_iters += n

    converged = "SIMPLE solution converged" in text

    total = p_iters + u_iters
    pressure_iter_pct = round(100.0 * p_iters / total, 2) if total > 0 else None

    return cpu_s, iterations, converged, p_iters, u_iters, pressure_iter_pct


# ---------------------------------------------------------------------------
# FNO inference timing
# ---------------------------------------------------------------------------

def _load_fno_model() -> tuple:
    """Load the FNO3d model and return (model, device).  Imports are deferred
    so that the script still works for argument-parsing / --help even if the
    forward package path has not been added to sys.path yet."""
    sys.path.insert(0, str(PROJECT_ROOT / "forward"))
    from fno_model.fno_model import FNO3d  # noqa: PLC0415

    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model = FNO3d(modes_x=16, modes_y=10, modes_z=10,
                  width=32, in_channels=7, out_channels=4, n_layers=4)
    state = torch.load(FNO_MODEL_PATH, map_location=device, weights_only=True)
    model.load_state_dict(state)
    model.to(device).eval()
    return model, device


def _ny_from_h(h: float) -> tuple[int, int]:
    """Derive FNO structured grid dimensions (Nx, Ny) from characteristic length h.

    Uses isotropic spacing matched to the Gmsh element size:
        dy = h  →  Ny = round(2*R / h) + 1   (y spans [-R, R])
        dx = h  →  Nx = round(L / h) + 1     (x spans [0, L])
    Ny == Nz by symmetry.  Minimum grid size is 3 in each direction.
    """
    Ny = max(3, round(2 * PIPE_R / h) + 1)
    Nx = max(3, round(L_PIPE / h) + 1)
    return Nx, Ny


def _build_fno_input(Nx: int, Ny: int, Nz: int) -> torch.Tensor:
    """Build the padded 7-channel input tensor (1, 7, Nx', Ny', Nz')."""
    # Lazy import — _load_fno_model() must have run first (adds forward/ to path)
    from fno_model.fno_dataset import normalize_re, normalize_uin, pad_to_efficient_grid  # noqa: PLC0415

    x_u = np.linspace(0.0, L_PIPE, Nx)
    y_u = np.linspace(-PIPE_R, PIPE_R, Ny)
    z_u = np.linspace(-PIPE_R, PIPE_R, Nz)
    Xg, Yg, Zg = np.meshgrid(x_u, y_u, z_u, indexing="ij")

    x_norm = (Xg - x_u.min()) / (x_u.max() - x_u.min() + 1e-6)
    y_norm = (Yg - y_u.min()) / (y_u.max() - y_u.min() + 1e-6)
    z_norm = (Zg - z_u.min()) / (z_u.max() - z_u.min() + 1e-6)

    fluid_mask = (np.sqrt(Yg**2 + Zg**2) <= PIPE_R).astype(np.float32)
    cyl_mask   = (np.sqrt((Xg - CYL_X)**2 + Yg**2 + Zg**2) <= CYL_R).astype(np.float32)

    ones = np.ones_like(fluid_mask)
    x_np = np.stack([
        x_norm.astype(np.float32), y_norm.astype(np.float32), z_norm.astype(np.float32),
        fluid_mask, cyl_mask,
        ones * normalize_re(RE), ones * normalize_uin(U_IN),
    ], axis=0)  # (7, Nx, Ny, Nz)

    x_t = torch.from_numpy(x_np).unsqueeze(0)  # (1, 7, Nx, Ny, Nz)
    return pad_to_efficient_grid(x_t)


def fno_inference_time(
    model: torch.nn.Module,
    device: torch.device,
    h: float,
) -> tuple[int, int, int, float]:
    """Time FNO inference (grid build + forward pass) at the resolution
    corresponding to characteristic length *h*.

    Returns (Nx, Ny, n_fluid_voxels, mean_wall_s).

    ``n_fluid_voxels`` counts only voxels inside the pipe and outside the
    obstacle — the same fluid domain the CFD mesh covers — so it is directly
    comparable to ``n_cells``.

    Timing includes building the 7-channel numpy grid and the model forward
    pass.  *FNO_WARMUP* discarded passes ensure caches are warm before
    *FNO_REPEATS* timed passes are averaged.
    """
    Nx, Ny = _ny_from_h(h)
    Nz = Ny

    # Count voxels inside the fluid domain (pipe interior, obstacle excluded) —
    # the same region the CFD mesh covers — so this is directly comparable to n_cells.
    x_u = np.linspace(0.0, L_PIPE, Nx)
    y_u = np.linspace(-PIPE_R, PIPE_R, Ny)
    z_u = np.linspace(-PIPE_R, PIPE_R, Nz)
    Xg, Yg, Zg = np.meshgrid(x_u, y_u, z_u, indexing="ij")
    in_pipe = np.sqrt(Yg**2 + Zg**2) <= PIPE_R
    in_cyl  = np.sqrt((Xg - CYL_X)**2 + Yg**2 + Zg**2) <= CYL_R
    n_fluid_voxels = int(np.sum(in_pipe & ~in_cyl))

    def _one_pass():
        x_t = _build_fno_input(Nx, Ny, Nz).to(device)
        with torch.no_grad():
            out = model(x_t)
        if device.type == "cuda":
            torch.cuda.synchronize()
        return out

    for _ in range(FNO_WARMUP):
        _one_pass()

    times = []
    for _ in range(FNO_REPEATS):
        t0 = time.perf_counter()
        _one_pass()
        times.append(time.perf_counter() - t0)

    return Nx, Ny, n_fluid_voxels, round(sum(times) / len(times), 6)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter
    )
    p.add_argument(
        "--n-cases", type=int, default=N_CASES,
        help=f"Number of resolution levels (default: {N_CASES})",
    )
    p.add_argument(
        "--h-min", type=float, default=H_MAX_FINE,
        help=f"Finest CharacteristicLengthMax (default: {H_MAX_FINE})",
    )
    p.add_argument(
        "--h-max", type=float, default=H_MAX_COARSE,
        help=f"Coarsest CharacteristicLengthMax (default: {H_MAX_COARSE})",
    )
    p.add_argument(
        "--output", type=Path, default=DEFAULT_OUTPUT,
        help="Output CSV path",
    )
    p.add_argument(
        "--keep-scratch", action="store_true",
        help="Keep case directories in scratch after completion",
    )
    return p.parse_args()


def main() -> None:
    args = parse_args()

    char_lengths = np.geomspace(args.h_max, args.h_min, args.n_cases)

    SCRATCH_DIR.mkdir(parents=True, exist_ok=True)
    args.output.parent.mkdir(parents=True, exist_ok=True)

    print(f"Pipe-sphere mesh refinement study")
    print(f"  Cases    : {args.n_cases}")
    print(f"  h range  : {args.h_max:.4f} → {args.h_min:.4f}  (log-spaced)")
    print(f"  Re={RE:.0f}, U_in={U_IN}, nu={NU:.3e}")
    print(f"  Scratch  : {SCRATCH_DIR}")
    print(f"  Output   : {args.output}")
    print()

    print(f"Loading FNO model from {FNO_MODEL_PATH} ...", flush=True)
    fno_model, fno_device = _load_fno_model()
    print(f"  Model on {fno_device}\n")

    rows: list[dict] = []

    for i, h in enumerate(char_lengths):
        case_id = f"case_{i:02d}"
        case_dir = SCRATCH_DIR / case_id
        geo_path = case_dir / "pipe_sphere.geo"
        msh_path = case_dir / "pipe_sphere.msh"
        log_path = case_dir / "log.simpleFoam"

        label = f"[{i + 1:2d}/{args.n_cases}]  h={h:.5f}"
        print(f"{label}", end="  ", flush=True)

        status = "ok"

        # 1. Generate Gmsh mesh
        case_dir.mkdir(parents=True, exist_ok=True)
        write_geo(h, geo_path)
        gmsh_res = subprocess.run(
            [
                "gmsh", str(geo_path),
                "-3",
                "-o", str(msh_path),
                "-format", "msh2",
                "-v", "0",          # suppress Gmsh stdout
            ],
            capture_output=True, text=True, timeout=300,
        )
        if gmsh_res.returncode != 0:
            print(f"GMSH FAILED")
            if gmsh_res.stderr:
                print("  " + gmsh_res.stderr[-400:])
            status = "gmsh_failed"
            rows.append(_row(case_id, h, None, None, None, 0, 0, 0, None, None, None, None, None, False, status))
            continue

        # 2. Set up case directories
        setup_case(case_dir)

        # 3. Convert Gmsh mesh → OpenFOAM polyMesh
        gof_res = of_run(f"gmshToFoam {msh_path}", case_dir)
        if gof_res.returncode != 0:
            print(f"gmshToFoam FAILED")
            if gof_res.stderr:
                print("  " + gof_res.stderr[-400:])
            status = "gmsh_to_foam_failed"
            rows.append(_row(case_id, h, None, None, None, 0, 0, 0, None, None, None, None, None, False, status))
            continue

        # 4. Count cells
        n_cells = count_cells(case_dir)
        print(f"n_cells={n_cells or '?':>7}", end="  ", flush=True)

        # 5. Run simpleFoam (timed)
        t0 = time.perf_counter()
        sf_res = of_run("simpleFoam > log.simpleFoam 2>&1", case_dir, timeout=900)
        wall_s = time.perf_counter() - t0

        if sf_res.returncode != 0:
            status = "solver_failed"

        cpu_s, n_iter, converged, p_iters, u_iters, p_pct = extract_solver_stats(log_path)

        fno_nx, fno_ny, fno_fluid_voxels, fno_s = fno_inference_time(fno_model, fno_device, h)

        p_pct_str = f"{p_pct:.1f}%" if p_pct is not None else "?"
        print(
            f"wall={wall_s:7.2f}s  cpu={cpu_s or '?':>7}s"
            f"  iters={n_iter:4d}  p_iter%={p_pct_str:>6}"
            f"  fno={fno_s:.4f}s (Ny={fno_ny})"
            f"  {'CONVERGED' if converged else 'NOT CONVERGED'}"
            f"  {status}"
        )

        rows.append(
            _row(case_id, h, n_cells, cpu_s, wall_s, n_iter,
                 p_iters, u_iters, p_pct, fno_nx, fno_ny, fno_fluid_voxels, fno_s,
                 converged, status)
        )

        # 6. Optionally remove scratch
        if not args.keep_scratch:
            shutil.rmtree(case_dir)

    # Write CSV
    fieldnames = [
        "case_id", "char_length_max", "n_cells",
        "solver_cpu_s", "wall_clock_s",
        "n_iterations", "p_solver_iters", "u_solver_iters", "pressure_iter_pct",
        "fno_nx", "fno_ny", "fno_fluid_voxels", "fno_inference_s",
        "converged", "status",
    ]
    with open(args.output, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    n_ok = sum(1 for r in rows if r["status"] == "ok")
    print(f"\nDone: {n_ok}/{len(rows)} cases succeeded.")
    print(f"Saved → {args.output}")


def _row(
    case_id: str,
    h: float,
    n_cells: int | None,
    cpu_s: float | None,
    wall_s: float | None,
    n_iter: int,
    p_iters: int,
    u_iters: int,
    pressure_iter_pct: float | None,
    fno_nx: int | None,
    fno_ny: int | None,
    fno_fluid_voxels: int | None,
    fno_inference_s: float | None,
    converged: bool,
    status: str,
) -> dict:
    return {
        "case_id": case_id,
        "char_length_max": round(h, 6),
        "n_cells": n_cells,
        "solver_cpu_s": cpu_s,
        "wall_clock_s": round(wall_s, 3) if wall_s is not None else None,
        "n_iterations": n_iter,
        "p_solver_iters": p_iters,
        "u_solver_iters": u_iters,
        # Fraction of total linear-solver iterations spent on pressure.
        # An iteration-count proxy: GAMG (p) iters / (p + U) iters.
        # True time fraction is typically higher because GAMG iterations
        # are heavier than smoothSolver iterations.
        "pressure_iter_pct": pressure_iter_pct,
        # FNO grid derived from isotropic spacing: dy = h → Ny = round(1/h)+1,
        # Nx = round(10/h)+1.  fno_inference_s is the mean of FNO_REPEATS timed
        # passes (grid build + model.forward), after FNO_WARMUP warm-up passes.
        "fno_nx": fno_nx,
        "fno_ny": fno_ny,
        "fno_fluid_voxels": fno_fluid_voxels,
        "fno_inference_s": fno_inference_s,
        "converged": converged,
        "status": status,
    }


if __name__ == "__main__":
    main()
