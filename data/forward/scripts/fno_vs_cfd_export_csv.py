#!/usr/bin/env python3
"""
fno_vs_cfd_export_csv.py

Runs FNO inference for every case in cfd_training_data/fno_grid/ that has
data files and writes the y=0 centreline slice (actual + predicted fields)
for all cases to a single CSV.

CSV columns:
    case_id, Re, U_in, iy, y_val,
    x, z,
    ux_actual, uy_actual, uz_actual, p_actual,
    ux_pred,   uy_pred,   uz_pred,   p_pred,
    mask          (1 = valid fluid point, 0 = obstacle / outside pipe)

Usage:
    python data/forward/scripts/fno_vs_cfd_export_csv.py
    python data/forward/scripts/fno_vs_cfd_export_csv.py --output data/forward/datasets/fno_vs_cfd_all_cases.csv
"""

import argparse
import csv
import sys
from pathlib import Path

import numpy as np
import torch

# ---------------------------------------------------------------------------
# Paths and constants
# ---------------------------------------------------------------------------

SCRIPT_DIR   = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent.parent.parent

sys.path.insert(0, str(PROJECT_ROOT / "forward"))
from fno_model.fno_model   import FNO3d                     # noqa: E402
from fno_model.fno_dataset import (                         # noqa: E402
    normalize_re, normalize_uin, pad_to_efficient_grid,
)

CFD_ROOT   = PROJECT_ROOT / "cfd_training_data" / "fno_grid"
MODEL_PATH = PROJECT_ROOT / "models" / "fno3d_best_forward.pt"

R_PHYS = 0.5
CYL_X  = 3.0
CYL_R  = 0.25

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

FIELDNAMES = [
    "case_id", "Re", "U_in", "iy", "y_val",
    "x", "z",
    "ux_actual", "uy_actual", "uz_actual", "p_actual",
    "ux_pred",   "uy_pred",   "uz_pred",   "p_pred",
    "mask",
]

# ---------------------------------------------------------------------------
# Data loading / inference
# ---------------------------------------------------------------------------

def load_case(case_id):
    d = CFD_ROOT / case_id
    coords       = np.load(d / "coords.npy")
    u            = np.load(d / "u.npy")
    p            = np.load(d / "p.npy")
    mask_path    = d / "sampled_mask.npy"
    sampled_mask = np.load(mask_path) if mask_path.exists() \
                   else np.ones(coords.shape[0], dtype=np.float32)
    return coords, u, p, sampled_mask.astype(np.float32)


def build_grid_info(coords, sampled_mask_flat):
    x_u = np.unique(coords[:, 0])
    y_u = np.unique(coords[:, 1])
    z_u = np.unique(coords[:, 2])
    Nx, Ny, Nz = len(x_u), len(y_u), len(z_u)

    Xg, Yg, Zg = np.meshgrid(x_u, y_u, z_u, indexing="ij")

    if Nx * Ny * Nz == coords.shape[0]:
        idx_map = np.arange(Nx * Ny * Nz).reshape(Nx, Ny, Nz)
    else:
        c2i = {tuple(c): i for i, c in enumerate(coords)}
        idx_map = np.zeros((Nx, Ny, Nz), dtype=int)
        for ix, xv in enumerate(x_u):
            for iy, yv in enumerate(y_u):
                for iz, zv in enumerate(z_u):
                    idx_map[ix, iy, iz] = c2i.get((xv, yv, zv), 0)

    x_norm = (Xg - x_u.min()) / (x_u.max() - x_u.min() + 1e-6)
    y_norm = (Yg - y_u.min()) / (y_u.max() - y_u.min() + 1e-6)
    z_norm = (Zg - z_u.min()) / (z_u.max() - z_u.min() + 1e-6)

    r          = np.sqrt(Yg**2 + Zg**2)
    fluid_mask = (r <= R_PHYS).astype(np.float32)

    dist_c   = np.sqrt((Xg - CYL_X)**2 + Yg**2 + Zg**2)
    cyl_mask = (dist_c <= CYL_R).astype(np.float32)

    sm_grid    = sampled_mask_flat[idx_map.reshape(-1)].reshape(Nx, Ny, Nz)
    train_mask = fluid_mask * (1.0 - cyl_mask) * sm_grid

    return (Nx, Ny, Nz), (x_u, y_u, z_u), idx_map, \
           (x_norm.astype(np.float32), y_norm.astype(np.float32),
            z_norm.astype(np.float32)), \
           fluid_mask, cyl_mask, train_mask


def build_input_tensor(Nx, Ny, Nz, idx_map, norms, fluid_mask, cyl_mask, Re, U_in):
    x_norm, y_norm, z_norm = norms
    ones = np.ones_like(fluid_mask)
    return np.stack([
        x_norm, y_norm, z_norm,
        fluid_mask, cyl_mask,
        ones * normalize_re(Re),
        ones * normalize_uin(U_in),
    ], axis=0).astype(np.float32)


def run_inference(model, x_np, Nx, Ny, Nz):
    x_t = torch.from_numpy(x_np).unsqueeze(0)
    x_t = pad_to_efficient_grid(x_t)
    with torch.no_grad():
        pred = model(x_t.to(DEVICE)).cpu()
    return pred[0, :, :Nx, :Ny, :Nz].numpy()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    ap = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    ap.add_argument(
        "--output", type=Path,
        default=PROJECT_ROOT / "data" / "forward" / "datasets" / "fno_vs_cfd_all_cases.csv",
        help="Output CSV path",
    )
    args = ap.parse_args()

    # Load model
    if not MODEL_PATH.exists():
        raise FileNotFoundError(f"Model not found: {MODEL_PATH}")
    model = FNO3d(modes_x=16, modes_y=10, modes_z=10,
                  width=32, in_channels=7, out_channels=4, n_layers=4)
    model.load_state_dict(torch.load(MODEL_PATH, map_location=DEVICE, weights_only=True))
    model.to(DEVICE).eval()
    print(f"Model loaded on {DEVICE}")

    # Find cases that have actual data files
    meta_path = CFD_ROOT / "metadata.csv"
    if not meta_path.exists():
        raise FileNotFoundError(f"metadata.csv not found in {CFD_ROOT}")
    cases = []
    with open(meta_path, newline="") as f:
        for row in csv.DictReader(f):
            if (CFD_ROOT / row["case_id"] / "coords.npy").exists():
                cases.append({
                    "case_id": row["case_id"],
                    "Re":      float(row["Re"]),
                    "U_in":    float(row["U_in"]),
                })
    print(f"Found {len(cases)} cases with data\n")

    args.output.parent.mkdir(parents=True, exist_ok=True)

    with open(args.output, "w", newline="") as out_f:
        writer = csv.DictWriter(out_f, fieldnames=FIELDNAMES)
        writer.writeheader()

        for case in cases:
            case_id = case["case_id"]
            Re      = case["Re"]
            U_in    = case["U_in"]
            print(f"── {case_id}  Re={Re:.2f}  U_in={U_in:.4f}")

            # Load and build grid
            coords, u_flat, p_flat, sm_flat = load_case(case_id)
            (Nx, Ny, Nz), (x_u, y_u, z_u), idx_map, norms, \
                fluid_mask, cyl_mask, train_mask = build_grid_info(coords, sm_flat)
            print(f"   grid ({Nx}, {Ny}, {Nz})")

            # Actual fields (normalised then de-normalised for physical units)
            flat_idx  = idx_map.reshape(-1)
            u_grid    = u_flat[flat_idx].reshape(Nx, Ny, Nz, 3) / U_in
            p_grid    = p_flat[flat_idx].reshape(Nx, Ny, Nz)    / (U_in**2)
            mask_bool = train_mask > 0.5
            p_ref     = float(np.mean(p_grid[mask_bool])) if mask_bool.any() else 0.0
            p_grid   -= p_ref

            actual_norm = np.stack([
                u_grid[..., 0], u_grid[..., 1], u_grid[..., 2], p_grid,
            ], axis=0).astype(np.float32)   # (4, Nx, Ny, Nz), normalised

            # FNO inference
            x_np      = build_input_tensor(Nx, Ny, Nz, idx_map, norms,
                                           fluid_mask, cyl_mask, Re, U_in)
            pred_norm = run_inference(model, x_np, Nx, Ny, Nz)  # (4, Nx, Ny, Nz)

            # Extract y≈0 slice
            iy    = Ny // 2
            y_val = float(y_u[iy])

            # Write one row per grid point in the y=0 slice
            for ix in range(Nx):
                for iz in range(Nz):
                    writer.writerow({
                        "case_id": case_id,
                        "Re":      Re,
                        "U_in":    U_in,
                        "iy":      iy,
                        "y_val":   y_val,
                        "x":       float(x_u[ix]),
                        "z":       float(z_u[iz]),
                        "ux_actual": float(actual_norm[0, ix, iy, iz] * U_in),
                        "uy_actual": float(actual_norm[1, ix, iy, iz] * U_in),
                        "uz_actual": float(actual_norm[2, ix, iy, iz] * U_in),
                        "p_actual":  float(actual_norm[3, ix, iy, iz] * U_in**2),
                        "ux_pred":   float(pred_norm[0, ix, iy, iz] * U_in),
                        "uy_pred":   float(pred_norm[1, ix, iy, iz] * U_in),
                        "uz_pred":   float(pred_norm[2, ix, iy, iz] * U_in),
                        "p_pred":    float(pred_norm[3, ix, iy, iz] * U_in**2),
                        "mask":      int(train_mask[ix, iy, iz] > 0.5),
                    })

    print(f"\nWrote {args.output}")


if __name__ == "__main__":
    main()
