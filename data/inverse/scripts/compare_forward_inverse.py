"""
compare_forward_inverse.py
--------------------------
Runs 10 (Re, U_in) cases through:
  1. FNO3d forward model  → synthetic flow field
  2. CNN3DInverse (Stage 2, with TTA) → predicted Re

Writes data/inverse/images/re_scatter.html — a D3.js scatter plot of predicted vs true Re
with the ideal 1:1 line and full [100, 1000] domain on both axes.

Run from project root:
    python data/inverse/scripts/compare_forward_inverse.py
"""

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
OUT_DIR    = os.path.join(_DATA_INV, "images")
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


# ── D3 HTML writer ─────────────────────────────────────────────────────────────

def write_d3_html(points: list[dict], rmse: float, out_path: str) -> None:
    """Write a self-contained D3 v7 scatter plot HTML file.

    points: list of {"true_re": float, "pred_re": float, "uin": float}
    """
    data_json = json.dumps(points, indent=2)

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Re Prediction Scatter</title>
<script src="https://d3js.org/d3.v7.min.js"></script>
<style>
  body {{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: #f8f9fa;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  }}
  .card {{
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 16px rgba(0,0,0,.12);
    padding: 32px 40px 24px;
  }}
  h2 {{
    margin: 0 0 4px;
    font-size: 16px;
    font-weight: 600;
    color: #1a1a2e;
  }}
  .subtitle {{
    font-size: 12px;
    color: #666;
    margin: 0 0 20px;
  }}
  .ideal-line {{ stroke: #e63946; stroke-width: 1.5; stroke-dasharray: 6 4; fill: none; }}
  .dot {{ stroke: #fff; stroke-width: 1.5; }}
  .axis path, .axis line {{ stroke: #ccc; }}
  .axis text {{ font-size: 11px; fill: #444; }}
  .grid line {{ stroke: #eee; stroke-dasharray: 3 3; }}
  .tooltip {{
    position: absolute;
    background: rgba(26,26,46,.88);
    color: #fff;
    padding: 7px 11px;
    border-radius: 6px;
    font-size: 12px;
    pointer-events: none;
    opacity: 0;
    transition: opacity .15s;
    line-height: 1.6;
  }}
  .legend-item {{ font-size: 11px; fill: #444; }}
</style>
</head>
<body>
<div class="card">
  <h2>Re Residuals</h2>
  <p class="subtitle">domain [100, 1000]</p>
  <div id="chart"></div>
</div>
<div class="tooltip" id="tip"></div>

<script>
const data = {data_json};

const margin = {{ top: 20, right: 120, bottom: 60, left: 70 }};
const W = 520, H = 480;
const w = W - margin.left - margin.right;
const h = H - margin.top  - margin.bottom;

const svg = d3.select("#chart")
  .append("svg")
    .attr("width",  W)
    .attr("height", H)
  .append("g")
    .attr("transform", `translate(${{margin.left}},${{margin.top}})`);

// Scales — both axes span full Re domain
const x = d3.scaleLinear().domain([100, 1000]).range([0, w]);
const y = d3.scaleLinear().domain([100, 1000]).range([h, 0]);

// Colour scale for U_in
const uinVals = [...new Set(data.map(d => d.uin))].sort(d3.ascending);
const colour  = d3.scaleOrdinal()
  .domain(uinVals)
  .range(["#4361ee", "#f77f00", "#2dc653"]);

// Grid
svg.append("g").attr("class", "grid")
  .attr("transform", `translate(0,${{h}})`)
  .call(d3.axisBottom(x).ticks(5).tickSize(-h).tickFormat(""))
  .select(".domain").remove();

svg.append("g").attr("class", "grid")
  .call(d3.axisLeft(y).ticks(5).tickSize(-w).tickFormat(""))
  .select(".domain").remove();

// Axes
svg.append("g")
  .attr("class", "axis")
  .attr("transform", `translate(0,${{h}})`)
  .call(d3.axisBottom(x).ticks(6).tickFormat(d3.format("d")));

svg.append("g")
  .attr("class", "axis")
  .call(d3.axisLeft(y).ticks(6).tickFormat(d3.format("d")));

// Axis labels
svg.append("text")
  .attr("x", w / 2).attr("y", h + 46)
  .attr("text-anchor", "middle")
  .attr("font-size", 13).attr("fill", "#333")
  .text("True Re");

svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("x", -h / 2).attr("y", -54)
  .attr("text-anchor", "middle")
  .attr("font-size", 13).attr("fill", "#333")
  .text("Predicted Re");

// Ideal 1:1 line
svg.append("line")
  .attr("class", "ideal-line")
  .attr("x1", x(100)).attr("y1", y(100))
  .attr("x2", x(1000)).attr("y2", y(1000));

// Ideal line label
svg.append("text")
  .attr("x", x(820)).attr("y", y(860))
  .attr("font-size", 11).attr("fill", "#e63946")
  .attr("transform", `rotate(-45,${{x(820)}},${{y(860)}})`)
  .text("ideal");

// Tooltip
const tip = d3.select("#tip");

// Dots
svg.selectAll(".dot")
  .data(data)
  .join("circle")
    .attr("class", "dot")
    .attr("cx", d => x(d.true_re))
    .attr("cy", d => y(d.pred_re))
    .attr("r", 7)
    .attr("fill", d => colour(d.uin))
  .on("mousemove", (event, d) => {{
    const resid = (d.pred_re - d.true_re).toFixed(2);
    const sign  = d.pred_re >= d.true_re ? "+" : "";
    tip.style("opacity", 1)
       .style("left",  (event.pageX + 14) + "px")
       .style("top",   (event.pageY - 32) + "px")
       .html(`<b>Re</b> true = ${{d.true_re.toFixed(0)}}<br>
              <b>Re</b> pred = ${{d.pred_re.toFixed(1)}}<br>
              residual = ${{sign}}${{resid}}<br>
              U_in = ${{d.uin.toFixed(2)}} m/s<br>
              \u03bd true = ${{(d.uin / d.true_re).toExponential(2)}} m\u00b2/s<br>
              \u03bd pred = ${{(d.uin / d.pred_re).toExponential(2)}} m\u00b2/s`);
  }})
  .on("mouseleave", () => tip.style("opacity", 0));

// Legend
const leg = svg.append("g")
  .attr("transform", `translate(${{w + 16}}, 20)`);

leg.append("text")
  .attr("y", -8).attr("font-size", 11).attr("font-weight", 600).attr("fill", "#333")
  .text("U_in (m/s)");

uinVals.forEach((u, i) => {{
  const g = leg.append("g").attr("transform", `translate(0,${{i * 22}})`);
  g.append("circle").attr("r", 6).attr("fill", colour(u)).attr("cy", 4);
  g.append("text")
    .attr("class", "legend-item")
    .attr("x", 14).attr("y", 8)
    .text(u.toFixed(2) + " m/s");
}});

// RMSE annotation
svg.append("text")
  .attr("x", w - 4).attr("y", 14)
  .attr("text-anchor", "end")
  .attr("font-size", 11).attr("fill", "#888")
  .text("RMSE = {rmse:.2f}");
</script>
</body>
</html>"""

    with open(out_path, "w") as f:
        f.write(html)
    print(f"Plot saved → {out_path}")


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

    points = []

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

        points.append({"true_re": float(re), "pred_re": re_pred, "uin": float(uin)})
        print(f"  {re:6.0f}  {uin:.2f}  {re_pred:8.2f}  {re_pred - re:+.2f}")

    resid = np.array([p["pred_re"] - p["true_re"] for p in points])
    rmse  = float(np.sqrt(np.mean(resid ** 2)))
    print(f"\nRMSE : {rmse:.2f}")

    write_d3_html(points, rmse, os.path.join(OUT_DIR, "re_scatter.html"))


if __name__ == "__main__":
    main()
