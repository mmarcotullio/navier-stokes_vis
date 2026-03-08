#!/usr/bin/env python3
"""
fno_vs_cfd_single_case.py

Reads fno_vs_cfd_all_cases.csv (produced by fno_vs_cfd_export_csv.py) and
writes one D3 HTML comparison plot per case.

    data/forward/images/fno_vs_cfd_<case_id>.html  –  3-row × 4-col heatmap (y≈0 slice)
                                                       rows:    Actual | Predicted | |Error|
                                                       columns: ux | uy | uz | p

Usage:
    python data/forward/scripts/fno_vs_cfd_d3heatmap.py
    python data/forward/scripts/fno_vs_cfd_d3heatmap.py --input  data/forward/datasets/fno_vs_cfd_all_cases.csv
    python data/forward/scripts/fno_vs_cfd_d3heatmap.py --output-dir data/forward/images
"""

import argparse
import csv
import json
from pathlib import Path

import numpy as np

# ---------------------------------------------------------------------------
# Paths and constants
# ---------------------------------------------------------------------------

SCRIPT_DIR   = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent.parent.parent

R_PHYS = 0.5
CYL_X  = 3.0
CYL_R  = 0.25

DEFAULT_CSV = PROJECT_ROOT / "data" / "forward" / "datasets" / "fno_vs_cfd_all_cases.csv"

# ---------------------------------------------------------------------------
# D3 visualisation
# ---------------------------------------------------------------------------

_D3_FIELD_LABELS = ["ux [m/s]", "uy [m/s]", "uz [m/s]", "p/\u03c1 [m\u00b2/s\u00b2]"]

# HTML template — __DATA_JSON__ is replaced at runtime
_D3_TEMPLATE = r"""<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<title>FNO vs CFD</title>
<script src="https://d3js.org/d3.v7.min.js"></script>
<style>body{margin:0;padding:8px;background:#fff;font-family:Arial,sans-serif;}svg{display:block;}</style>
</head><body><script>
const DATA = __DATA_JSON__;

const cfg = {
  outerPadL:8, outerPadR:20, outerPadT:8, outerPadB:20,
  titleH:54,
  rowLabelW:72,
  plotW:600,
  marginL:38, marginR:4, marginT:4, marginB:22,
  colLabelH:20,
  cbW:11, cbGap:5, cbTickW:36,
  colGap:12, rowGap:10,
  nRows:3, nCols:4
};
// Derive plotH from the physical aspect ratio so pixels are square (equal-aspect).
// phys_asp = x_range / z_range ≈ 10 for the default pipe, so plotH ≈ plotW / 10.
{
  const m = DATA.meta;
  const phys_asp = (m.x_max - m.x_min) / Math.max(m.z_max - m.z_min, 1e-6);
  cfg.plotH = Math.max(Math.round(cfg.plotW / phys_asp), 20);
}

const CMAPS = {
  viridis: t => d3.interpolateViridis(t),
  RdBu_r:  t => d3.interpolateRdBu(1 - t),
  hot_r: t => {
    const s = 1 - t;
    let r, g, b;
    if      (s < 1/3) { r = Math.round(255*s*3);           g = 0;                          b = 0; }
    else if (s < 2/3) { r = 255;                            g = Math.round(255*(s-1/3)*3);  b = 0; }
    else              { r = 255;                            g = 255;                         b = Math.round(255*(s-2/3)*3); }
    return `rgb(${r},${g},${b})`;
  }
};

function makeDataURL(values, Nx, Nz, vmin, vmax, cmap) {
  const canvas = document.createElement('canvas');
  canvas.width = Nx; canvas.height = Nz;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(Nx, Nz);
  const fn = CMAPS[cmap];
  const rng = Math.max(vmax - vmin, 1e-12);
  for (let ix = 0; ix < Nx; ix++) {
    for (let iz = 0; iz < Nz; iz++) {
      const v = values[ix * Nz + iz];
      const iyc = Nz - 1 - iz;
      const p = (iyc * Nx + ix) * 4;
      if (v === null) {
        img.data[p] = img.data[p+1] = img.data[p+2] = 210; img.data[p+3] = 255;
      } else {
        const t = Math.max(0, Math.min(1, (v - vmin) / rng));
        const c = d3.color(fn(t));
        img.data[p] = c.r; img.data[p+1] = c.g; img.data[p+2] = c.b; img.data[p+3] = 255;
      }
    }
  }
  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL();
}

DATA.panels.forEach(p => { p._url = makeDataURL(p.values, p.Nx, p.Nz, p.vmin, p.vmax, p.cmap); });

const panelW = cfg.marginL + cfg.plotW + cfg.marginR + cfg.cbGap + cfg.cbW + cfg.cbTickW;
const panelH = cfg.colLabelH + cfg.marginT + cfg.plotH + cfg.marginB;
const svgW = cfg.outerPadL + cfg.rowLabelW + cfg.nCols*panelW + (cfg.nCols-1)*cfg.colGap + cfg.outerPadR;
const svgH = cfg.outerPadT + cfg.titleH + cfg.nRows*panelH + (cfg.nRows-1)*cfg.rowGap + cfg.outerPadB;

const svg = d3.select('body').append('svg').attr('width', svgW).attr('height', svgH);
const m = DATA.meta;

svg.append('text').attr('x', svgW/2).attr('y', cfg.outerPadT+20)
  .attr('text-anchor','middle').attr('font-size','14px').attr('font-weight','bold')
  .text(`FNO Steady-State  |  Re = ${m.Re.toFixed(1)},  U_in = ${m.U_in.toFixed(3)} m/s`);
svg.append('text').attr('x', svgW/2).attr('y', cfg.outerPadT+38)
  .attr('text-anchor','middle').attr('font-size','11px').attr('fill','#555')
  .text(`Centreline slice at y = ${m.y_val.toFixed(3)} m  (iy = ${m.iy})  —  case: ${m.case_id}`);

let gradCount = 0;

DATA.panels.forEach(p => {
  const ox = cfg.outerPadL + cfg.rowLabelW + p.col*(panelW + cfg.colGap);
  const oy = cfg.outerPadT + cfg.titleH    + p.row*(panelH + cfg.rowGap);
  const plotX = ox + cfg.marginL;
  const plotY = oy + cfg.colLabelH + cfg.marginT;

  const xSc = d3.scaleLinear().domain([m.x_min, m.x_max]).range([plotX, plotX+cfg.plotW]);
  const zSc = d3.scaleLinear().domain([m.z_min, m.z_max]).range([plotY+cfg.plotH, plotY]);

  // Heatmap
  svg.append('image').attr('x',plotX).attr('y',plotY)
    .attr('width',cfg.plotW).attr('height',cfg.plotH)
    .attr('preserveAspectRatio','none').attr('href',p._url);
  svg.append('rect').attr('x',plotX).attr('y',plotY)
    .attr('width',cfg.plotW).attr('height',cfg.plotH)
    .attr('fill','none').attr('stroke','#aaa').attr('stroke-width',0.5);

  // Obstacle ellipse (physically correct for non-equal-aspect display)
  svg.append('ellipse')
    .attr('cx', xSc(m.CYL_X)).attr('cy', zSc(0))
    .attr('rx', (m.CYL_R/(m.x_max-m.x_min))*cfg.plotW)
    .attr('ry', (m.CYL_R/(m.z_max-m.z_min))*cfg.plotH)
    .attr('fill','none').attr('stroke','white').attr('stroke-width',1.5).attr('stroke-dasharray','4,3');

  // Pipe walls
  [m.R_PIPE, -m.R_PIPE].forEach(z => {
    const yp = zSc(z);
    svg.append('line').attr('x1',plotX).attr('x2',plotX+cfg.plotW).attr('y1',yp).attr('y2',yp)
      .attr('stroke','#888').attr('stroke-width',0.8).attr('stroke-dasharray','3,3');
  });

  // X-axis
  svg.append('g').attr('transform',`translate(0,${plotY+cfg.plotH})`)
    .call(d3.axisBottom(xSc).ticks(5).tickSize(3))
    .call(g => { g.select('.domain').attr('stroke','#999'); g.selectAll('text').attr('font-size','9px'); });
  svg.append('text').attr('x',plotX+cfg.plotW/2).attr('y',plotY+cfg.plotH+cfg.marginB-2)
    .attr('text-anchor','middle').attr('font-size','9px').text('x [m]');

  // Y-axis
  svg.append('g').attr('transform',`translate(${plotX},0)`)
    .call(d3.axisLeft(zSc).ticks(3).tickSize(3))
    .call(g => { g.select('.domain').attr('stroke','#999'); g.selectAll('text').attr('font-size','9px'); });

  // Row label + z [m] (col 0 only)
  if (p.col === 0) {
    if (p.row_label) {
      svg.append('text')
        .attr('transform',`translate(${cfg.outerPadL+13},${plotY+cfg.plotH/2}) rotate(-90)`)
        .attr('text-anchor','middle').attr('font-size','10px').attr('font-weight','bold')
        .text(p.row_label);
    }
    svg.append('text')
      .attr('transform',`translate(${cfg.outerPadL+27},${plotY+cfg.plotH/2}) rotate(-90)`)
      .attr('text-anchor','middle').attr('font-size','9px').attr('fill','#444').text('z [m]');
  }

  // Column label (row 0 only)
  if (p.col_label) {
    svg.append('text').attr('x',plotX+cfg.plotW/2).attr('y',oy+cfg.colLabelH-4)
      .attr('text-anchor','middle').attr('font-size','11px').text(p.col_label);
  }

  // Colorbar
  const cbX = plotX + cfg.plotW + cfg.cbGap;
  const gId = `g${gradCount++}`;
  const grad = svg.append('defs').append('linearGradient')
    .attr('id',gId).attr('x1','0%').attr('x2','0%').attr('y1','100%').attr('y2','0%');
  for (let i = 0; i <= 20; i++) {
    const t = i/20;
    grad.append('stop').attr('offset',`${(t*100).toFixed(0)}%`).attr('stop-color', CMAPS[p.cmap](t));
  }
  svg.append('rect').attr('x',cbX).attr('y',plotY).attr('width',cfg.cbW).attr('height',cfg.plotH)
    .attr('fill',`url(#${gId})`);
  svg.append('rect').attr('x',cbX).attr('y',plotY).attr('width',cfg.cbW).attr('height',cfg.plotH)
    .attr('fill','none').attr('stroke','#aaa').attr('stroke-width',0.5);
  svg.append('g').attr('transform',`translate(${cbX+cfg.cbW},0)`)
    .call(d3.axisRight(d3.scaleLinear().domain([p.vmin,p.vmax]).range([plotY+cfg.plotH,plotY]))
      .ticks(3).tickSize(3).tickFormat(d3.format('.2g')))
    .call(g => { g.select('.domain').remove(); g.selectAll('text').attr('font-size','8px').attr('fill','#444'); });
});
</script></body></html>"""


def _to_json_list(arr: np.ndarray) -> list:
    flat = arr.ravel()
    return [None if np.isnan(v) else round(float(v), 7) for v in flat]


def save_d3_html(actual_fields, pred_fields, x_vals, z_vals,
                 y_idx, y_val, train_mask_slice, Re, U_in, case_id, out_path):
    field_names = ["ux", "uy", "uz", "p"]
    row_labels  = ["Actual", "Predicted", "|Error|"]
    nan_mask    = ~train_mask_slice.astype(bool)
    Nx, Nz      = train_mask_slice.shape

    panels = []
    for col, fname in enumerate(field_names):
        act  = actual_fields[fname].copy()
        pred = pred_fields[fname].copy()
        err  = np.abs(pred - act)

        act[nan_mask] = pred[nan_mask] = err[nan_mask] = np.nan

        vmin = float(np.nanmin([act, pred]))
        vmax = float(np.nanmax([act, pred]))
        if fname in ("uy", "uz", "p"):
            absmax = max(abs(vmin), abs(vmax)) + 1e-12
            vmin, vmax = -absmax, absmax
        err_max = float(np.nanmax(err)) + 1e-12 if not np.all(np.isnan(err)) else 1e-12

        cmap = "viridis" if fname == "ux" else "RdBu_r"
        for row, (arr, v0, v1, cm) in enumerate([
            (act,  vmin,  vmax,    cmap),
            (pred, vmin,  vmax,    cmap),
            (err,  0.0,   err_max, "hot_r"),
        ]):
            panels.append({
                "row": row, "col": col,
                "row_label": row_labels[row] if col == 0 else "",
                "col_label": _D3_FIELD_LABELS[col] if row == 0 else "",
                "values": _to_json_list(arr),
                "vmin": v0, "vmax": v1, "cmap": cm,
                "Nx": Nx, "Nz": Nz,
            })

    data = {
        "meta": {
            "Re": Re, "U_in": U_in, "iy": y_idx, "y_val": y_val,
            "case_id": case_id,
            "CYL_X": CYL_X, "CYL_R": CYL_R, "R_PIPE": R_PHYS,
            "x_min": float(x_vals[0]), "x_max": float(x_vals[-1]),
            "z_min": float(z_vals[0]), "z_max": float(z_vals[-1]),
        },
        "panels": panels,
    }

    html = _D3_TEMPLATE.replace("__DATA_JSON__", json.dumps(data, separators=(',', ':')))
    out_path.write_text(html, encoding="utf-8")
    print(f"  Wrote {out_path}")


# ---------------------------------------------------------------------------
# CSV reading
# ---------------------------------------------------------------------------

def read_csv(csv_path):
    """Return {case_id: case_data} from the all-cases CSV.

    case_data keys:
        Re, U_in, iy, y_val      – scalars
        x_u, z_u                 – 1-D numpy arrays (sorted unique values)
        actual, pred             – dicts of 2-D (Nx × Nz) float arrays
                                   keys: "ux", "uy", "uz", "p"
        mask                     – 2-D (Nx × Nz) int array (1 = valid fluid)
    """
    # First pass: collect rows per case
    case_rows: dict = {}
    with open(csv_path, newline="") as f:
        for row in csv.DictReader(f):
            cid = row["case_id"]
            if cid not in case_rows:
                case_rows[cid] = {
                    "Re":    float(row["Re"]),
                    "U_in":  float(row["U_in"]),
                    "iy":    int(row["iy"]),
                    "y_val": float(row["y_val"]),
                    "pts":   [],
                }
            case_rows[cid]["pts"].append((
                float(row["x"]),        float(row["z"]),
                float(row["ux_actual"]), float(row["uy_actual"]),
                float(row["uz_actual"]), float(row["p_actual"]),
                float(row["ux_pred"]),   float(row["uy_pred"]),
                float(row["uz_pred"]),   float(row["p_pred"]),
                int(row["mask"]),
            ))

    # Second pass: reconstruct 2-D arrays
    result = {}
    for cid, data in case_rows.items():
        pts = data["pts"]
        x_u = sorted({p[0] for p in pts})
        z_u = sorted({p[1] for p in pts})
        Nx, Nz = len(x_u), len(z_u)
        xi = {v: i for i, v in enumerate(x_u)}
        zi = {v: i for i, v in enumerate(z_u)}

        ux_a = np.zeros((Nx, Nz)); uy_a = np.zeros((Nx, Nz))
        uz_a = np.zeros((Nx, Nz)); p_a  = np.zeros((Nx, Nz))
        ux_p = np.zeros((Nx, Nz)); uy_p = np.zeros((Nx, Nz))
        uz_p = np.zeros((Nx, Nz)); p_p  = np.zeros((Nx, Nz))
        mask_arr = np.zeros((Nx, Nz), dtype=np.int32)

        for x, z, uxa, uya, uza, pa, uxp, uyp, uzp, pp, mk in pts:
            ix, iz = xi[x], zi[z]
            ux_a[ix, iz] = uxa;  uy_a[ix, iz] = uya
            uz_a[ix, iz] = uza;  p_a[ix, iz]  = pa
            ux_p[ix, iz] = uxp;  uy_p[ix, iz] = uyp
            uz_p[ix, iz] = uzp;  p_p[ix, iz]  = pp
            mask_arr[ix, iz] = mk

        result[cid] = {
            "Re": data["Re"],   "U_in":  data["U_in"],
            "iy": data["iy"],   "y_val": data["y_val"],
            "x_u":   np.array(x_u),
            "z_u":   np.array(z_u),
            "actual": {"ux": ux_a, "uy": uy_a, "uz": uz_a, "p": p_a},
            "pred":   {"ux": ux_p, "uy": uy_p, "uz": uz_p, "p": p_p},
            "mask":   mask_arr,
        }

    return result


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    ap = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    ap.add_argument("--input", type=Path, default=DEFAULT_CSV,
                    help="All-cases CSV produced by fno_vs_cfd_export_csv.py")
    ap.add_argument("--output-dir", type=Path, default=PROJECT_ROOT / "data" / "forward" / "images",
                    help="Directory for HTML outputs")
    args = ap.parse_args()

    if not args.input.exists():
        raise FileNotFoundError(
            f"CSV not found: {args.input}\n"
            "Run fno_vs_cfd_export_csv.py first to generate it."
        )

    print(f"Reading {args.input} ...")
    cases = read_csv(args.input)
    print(f"Found {len(cases)} cases\n")

    args.output_dir.mkdir(parents=True, exist_ok=True)

    for case_id, data in cases.items():
        out_path = args.output_dir / f"fno_vs_cfd_{case_id}.html"
        print(f"── {case_id}  Re={data['Re']:.2f}  U_in={data['U_in']:.4f}")
        save_d3_html(
            data["actual"], data["pred"],
            data["x_u"], data["z_u"],
            data["iy"], data["y_val"],
            data["mask"],
            data["Re"], data["U_in"],
            case_id, out_path,
        )
        print()


if __name__ == "__main__":
    main()
