"""
collect_re_predictions.py
-------------------------
Runs 10 (Re, U_in) cases through:
  1. FNO3d forward model  → synthetic flow field
  2. CNN3DInverse (Stage 2, with TTA) → predicted Re

Writes data/inverse/datasets/re_predictions.csv with columns: true_re, pred_re, uin

Run from project root:
    python data/inverse/scripts/collect_re_predictions.py
"""

import csv
import json
import os
import sys

import numpy as np
import torch

# ── Paths ──────────────────────────────────────────────────────────────────────
_HERE      = os.path.dirname(os.path.abspath(__file__))   # …/data/inverse/scripts
_DATA_INV  = os.path.dirname(_HERE)                        # …/data/inverse
_ROOT      = os.path.dirname(os.path.dirname(_DATA_INV))   # …/navier-stokes
_INV_DIR   = os.path.join(_ROOT, "inverse")                # …/inverse (model code)
_FWD_MODEL = os.path.join(_ROOT, "forward", "fno_model")

for _p in [_FWD_MODEL, _INV_DIR]:
    if _p not in sys.path:
        sys.path.insert(0, _p)

FWD_CKPT   = os.path.join(_ROOT,    "models", "fno3d_best_forward.pt")
INV_CKPT   = os.path.join(_INV_DIR, "models", "cnn_best.pt")
STATS_PATH = os.path.join(_INV_DIR, "models", "field_stats_dimless_voxel.json")
OUT_DIR    = os.path.join(_DATA_INV, "datasets")
OUT_CSV    = os.path.join(OUT_DIR, "re_predictions.csv")
os.makedirs(OUT_DIR, exist_ok=True)

# ── Local imports ──────────────────────────────────────────────────────────────
from fno_model         import FNO3d
from model             import CNN3DInverse
from utils             import RE_LOG_MIN, RE_LOG_MAX
from utils             import RE_MIN, RE_MAX, UIN_MIN, UIN_MAX
from generate_fno_data import build_geometry, fno_to_voxel, _pad_to_multiple4

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

# ── 10 test cases spread across the (Re, U_in) domain ─────────────────────────
CASES = [
    (100,  0.10),
    (150,  0.55),
    (220,  1.00),
    (320,  0.10),
    (450,  0.55),
    (560,  1.00),
    (680,  0.10),
    (780,  0.55),
    (900,  1.00),
    (1000, 0.10),
]

# ── D4 TTA ─────────────────────────────────────────────────────────────────────

def _d4_augment(vt: torch.Tensor, k: int, flip: bool) -> torch.Tensor:
    vt = vt.clone()
    if flip:
        vt       = torch.flip(vt, dims=[3])
        vt[:, 1] = -vt[:, 1]
    if k > 0:
        vt = torch.rot90(vt, k=k, dims=[3, 4])
        for _ in range(k):
            uy       = vt[:, 1].clone()
            vt[:, 1] = -vt[:, 2]
            vt[:, 2] =  uy
    return vt


def tta_predict(model: torch.nn.Module, vt: torch.Tensor) -> float:
    preds = []
    with torch.no_grad():
        for flip in [False, True]:
            aug = _d4_augment(vt, 0, flip).to(DEVICE)
            preds.append(float(model(aug).cpu().item()))
    return float(np.mean(preds))


# ── Main ───────────────────────────────────────────────────────────────────────

def main() -> None:
    with open(STATS_PATH) as f:
        stats = json.load(f)
    means = np.array(stats["mean"], dtype=np.float32)
    stds  = np.array(stats["std"],  dtype=np.float32)

    geom_np, full_fluid, dx, dy, dz = build_geometry()
    NX, NY, NZ = geom_np.shape[1], geom_np.shape[2], geom_np.shape[3]

    fno = FNO3d(
        modes_x=16, modes_y=10, modes_z=10,
        width=32, in_channels=7, out_channels=4, n_layers=4,
    ).to(DEVICE)
    fno.load_state_dict(torch.load(FWD_CKPT, map_location=DEVICE, weights_only=True))
    fno.eval()
    print(f"FNO loaded : {FWD_CKPT}")

    inv = CNN3DInverse(in_channels=6).to(DEVICE)
    inv.load_state_dict(torch.load(INV_CKPT, map_location=DEVICE, weights_only=True))
    inv.eval()
    print(f"CNN loaded : {INV_CKPT}")
    print(f"Device     : {DEVICE}")
    print(f"\n{'Re':>6}  {'U_in':>5}  {'Re_pred':>8}  {'residual':>10}")
    print("-" * 38)

    rows = []

    for re, uin in CASES:
        inp_np = np.zeros((1, 7, NX, NY, NZ), dtype=np.float32)
        inp_np[0, :5] = geom_np
        inp_np[0,  5] = (re  - RE_MIN)  / (RE_MAX  - RE_MIN)
        inp_np[0,  6] = (uin - UIN_MIN) / (UIN_MAX - UIN_MIN)

        inp_padded, Nx0, Ny0, Nz0 = _pad_to_multiple4(torch.from_numpy(inp_np))

        with torch.no_grad():
            out_padded = fno(inp_padded.to(DEVICE))
        fno_out = out_padded[0, :, :Nx0, :Ny0, :Nz0].cpu().numpy()

        voxel_raw = fno_to_voxel(fno_out, uin, full_fluid, dx, dy, dz)

        voxel = voxel_raw.copy()
        voxel[0] /= uin
        voxel[1] /= uin
        voxel[2] /= uin
        voxel[3] /= uin ** 2
        voxel[4] /= uin ** 2
        voxel[5] /= uin

        for ch in range(6):
            voxel[ch] = (voxel[ch] - means[ch]) / (stds[ch] + 1e-8)

        vt = torch.from_numpy(voxel).unsqueeze(0)
        re_norm_pred = float(np.clip(tta_predict(inv, vt), 0.0, 1.0))
        re_pred      = float(np.exp(re_norm_pred * (RE_LOG_MAX - RE_LOG_MIN) + RE_LOG_MIN))

        rows.append({"true_re": float(re), "pred_re": re_pred, "uin": float(uin)})
        print(f"  {re:6.0f}  {uin:.2f}  {re_pred:8.2f}  {re_pred - re:+.2f}")

    resid = np.array([r["pred_re"] - r["true_re"] for r in rows])
    rmse  = float(np.sqrt(np.mean(resid ** 2)))
    print(f"\nRMSE : {rmse:.2f}")

    with open(OUT_CSV, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["true_re", "pred_re", "uin"])
        writer.writeheader()
        writer.writerows(rows)
    print(f"CSV  saved → {OUT_CSV}")


if __name__ == "__main__":
    main()
