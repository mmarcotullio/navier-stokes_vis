#!/usr/bin/env python3
"""
mesh_refinement_runtime_vis.py

Reads datasets/mesh_refinement_runtime.csv and writes a D3 connected scatter
plot (log-log axes) of grid size vs runtime for three series:

    - OpenFOAM wall-clock time  (total: solver + launch + I/O overhead)
    - OpenFOAM solver CPU time  (solver inner loop only)
    - FNO inference time        (forward pass, averaged over 5 runs)

Usage:
    python data/forward/scripts/mesh_refinement_runtime_vis.py
    python data/forward/scripts/mesh_refinement_runtime_vis.py --output data/forward/images/mesh_refinement_runtime.html
"""

import argparse
import csv
import json
from pathlib import Path

# ---------------------------------------------------------------------------
SCRIPT_DIR   = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent.parent.parent

DEFAULT_CSV  = PROJECT_ROOT / "data" / "forward" / "datasets" / "mesh_refinement_runtime.csv"
DEFAULT_OUT  = PROJECT_ROOT / "data" / "forward" / "images" / "mesh_refinement_runtime.html"

# ---------------------------------------------------------------------------
# D3 HTML template  (__DATA_JSON__ replaced at runtime)
# ---------------------------------------------------------------------------

_TEMPLATE = r"""<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<title>Mesh Refinement vs Runtime</title>
<script src="https://d3js.org/d3.v7.min.js"></script>
<style>
  body { margin: 0; padding: 16px; background: #fff; font-family: Arial, sans-serif; }
  svg  { display: block; }
  .gridline line { stroke: #e0e0e0; stroke-dasharray: 3,3; }
  .gridline path { display: none; }
  .dot { cursor: pointer; }
  .dot:hover { stroke-width: 2.5; }
  #tooltip {
    position: absolute; pointer-events: none;
    background: rgba(255,255,255,0.95); border: 1px solid #ccc;
    border-radius: 4px; padding: 8px 10px; font-size: 12px;
    box-shadow: 1px 2px 6px rgba(0,0,0,.15); display: none;
  }
</style>
</head>
<body>
<div id="tooltip"></div>
<script>
const RAW = __DATA_JSON__;

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------
const margin = { top: 50, right: 160, bottom: 60, left: 72 };
const W = 860, H = 520;
const iW = W - margin.left - margin.right;
const iH = H - margin.top  - margin.bottom;

const svg = d3.select('body').append('svg')
  .attr('width', W).attr('height', H);

const g = svg.append('g')
  .attr('transform', `translate(${margin.left},${margin.top})`);

// ---------------------------------------------------------------------------
// Scales  (linear x, linear y)
// ---------------------------------------------------------------------------
const xSc = d3.scaleLinear()
  .domain([0, d3.max(RAW, d => d.n_cells)])
  .nice()
  .range([0, iW]);

const allY = RAW.flatMap(d => [d.solver_cpu_s, d.fno_inference_s]);
const ySc = d3.scaleLinear()
  .domain([0, d3.max(allY) * 1.1])
  .nice()
  .range([iH, 0]);

// ---------------------------------------------------------------------------
// Grid lines
// ---------------------------------------------------------------------------
g.append('g').attr('class', 'gridline')
  .call(d3.axisLeft(ySc).ticks(6).tickSize(-iW).tickFormat(''));

g.append('g').attr('class', 'gridline')
  .attr('transform', `translate(0,${iH})`)
  .call(d3.axisBottom(xSc).ticks(6).tickSize(-iH).tickFormat(''));

// ---------------------------------------------------------------------------
// Series definitions
// ---------------------------------------------------------------------------
const series = [
  {
    key:   'solver_cpu_s',
    label: 'openFOAM solver',
    color: '#2166ac',
    dash:  null,
    r:     5,
  },
  {
    key:   'fno_inference_s',
    label: 'FNO inference',
    color: '#d73027',
    dash:  null,
    r:     5,
  },
];

// ---------------------------------------------------------------------------
// Lines + dots
// ---------------------------------------------------------------------------
series.forEach(s => {
  const lg = d3.line()
    .x(d => xSc(d.n_cells))
    .y(d => ySc(d[s.key]))
    .curve(d3.curveMonotoneX);

  // Connecting line
  g.append('path')
    .datum(RAW)
    .attr('fill', 'none')
    .attr('stroke', s.color)
    .attr('stroke-width', 1.8)
    .attr('stroke-dasharray', s.dash || null)
    .attr('d', lg);

  // Dots
  g.selectAll(`.dot-${s.key}`)
    .data(RAW)
    .join('circle')
    .attr('class', `dot dot-${s.key}`)
    .attr('cx', d => xSc(d.n_cells))
    .attr('cy', d => ySc(d[s.key]))
    .attr('r', s.r)
    .attr('fill', s.color)
    .attr('stroke', '#fff')
    .attr('stroke-width', 1)
    .on('mouseover', (event, d) => {
      const tip = document.getElementById('tooltip');
      tip.style.display = 'block';
      tip.innerHTML = [
        `<strong>${d.case_id}</strong>`,
        `# of cells = ${d.n_cells.toLocaleString()}`,
        `<span style="color:${s.color}">${s.label}: ${d[s.key].toFixed(3)} s</span>`,
      ].join('<br>');
    })
    .on('mousemove', event => {
      const tip = document.getElementById('tooltip');
      tip.style.left = (event.pageX + 14) + 'px';
      tip.style.top  = (event.pageY - 28) + 'px';
    })
    .on('mouseout', () => {
      document.getElementById('tooltip').style.display = 'none';
    });
});

// ---------------------------------------------------------------------------
// Axes
// ---------------------------------------------------------------------------
g.append('g')
  .attr('transform', `translate(0,${iH})`)
  .call(d3.axisBottom(xSc).ticks(6).tickFormat(d3.format('~s')))
  .call(ax => ax.select('.domain').attr('stroke', '#999'))
  .call(ax => ax.selectAll('text').attr('font-size', '11px'));

g.append('g')
  .call(d3.axisLeft(ySc).ticks(6))
  .call(ax => ax.select('.domain').attr('stroke', '#999'))
  .call(ax => ax.selectAll('text').attr('font-size', '11px'));

// Axis labels
svg.append('text')
  .attr('x', margin.left + iW / 2)
  .attr('y', H - 10)
  .attr('text-anchor', 'middle')
  .attr('font-size', '13px')
  .text('Number of CFD cells');

svg.append('text')
  .attr('transform', `translate(14,${margin.top + iH / 2}) rotate(-90)`)
  .attr('text-anchor', 'middle')
  .attr('font-size', '13px')
  .text('Runtime  [s]');

// Title
svg.append('text')
  .attr('x', margin.left + iW / 2)
  .attr('y', 22)
  .attr('text-anchor', 'middle')
  .attr('font-size', '15px')
  .attr('font-weight', 'bold')
  .text('Mesh Refinement vs Runtime: openFOAM and FNO');

// ---------------------------------------------------------------------------
// Legend
// ---------------------------------------------------------------------------
const legX = margin.left + iW + 16;
const legY = margin.top + 20;
const legRowH = 22;

series.forEach((s, i) => {
  const ly = legY + i * legRowH;
  const lg = svg.append('g');

  lg.append('line')
    .attr('x1', legX).attr('x2', legX + 28)
    .attr('y1', ly + 6).attr('y2', ly + 6)
    .attr('stroke', s.color).attr('stroke-width', 2)
    .attr('stroke-dasharray', s.dash || null);

  lg.append('circle')
    .attr('cx', legX + 14).attr('cy', ly + 6)
    .attr('r', s.r)
    .attr('fill', s.color).attr('stroke', '#fff').attr('stroke-width', 1);

  lg.append('text')
    .attr('x', legX + 34).attr('y', ly + 10)
    .attr('font-size', '11px')
    .text(s.label);
});

</script>
</body></html>"""

# ---------------------------------------------------------------------------
# Read CSV and emit HTML
# ---------------------------------------------------------------------------

def read_csv(path):
    rows = []
    with open(path, newline="") as f:
        for row in csv.DictReader(f):
            if row["status"] != "ok":
                continue
            rows.append({
                "case_id":         row["case_id"],
                "char_length_max": float(row["char_length_max"]),
                "n_cells":         int(row["n_cells"]),
                "solver_cpu_s":    float(row["solver_cpu_s"]),
                "fno_inference_s": float(row["fno_inference_s"]),
                "converged":       row["converged"],
            })
    # Sort by n_cells so the connecting line goes coarse → fine
    rows.sort(key=lambda r: r["n_cells"])
    return rows


def main():
    ap = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    ap.add_argument("--input",  type=Path, default=DEFAULT_CSV)
    ap.add_argument("--output", type=Path, default=DEFAULT_OUT)
    args = ap.parse_args()

    data = read_csv(args.input)
    print(f"Loaded {len(data)} cases from {args.input}")

    args.output.parent.mkdir(parents=True, exist_ok=True)
    html = _TEMPLATE.replace("__DATA_JSON__", json.dumps(data, separators=(',', ':')))
    args.output.write_text(html, encoding="utf-8")
    print(f"Wrote {args.output}")


if __name__ == "__main__":
    main()
