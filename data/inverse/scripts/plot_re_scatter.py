"""
plot_re_scatter.py
------------------
Reads data/inverse/datasets/re_predictions.csv produced by collect_re_predictions.py
and writes the D3.js scatter plot to data/inverse/images/re_scatter.html.

Run from project root:
    python data/inverse/scripts/plot_re_scatter.py
"""

import csv
import json
import math
import os

_HERE     = os.path.dirname(os.path.abspath(__file__))   # …/data/inverse/scripts
_DATA_INV = os.path.dirname(_HERE)                        # …/data/inverse
OUT_DIR   = os.path.join(_DATA_INV, "images")
IN_CSV    = os.path.join(_DATA_INV, "datasets", "re_predictions.csv")
OUT_HTML  = os.path.join(OUT_DIR, "re_scatter.html")


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
    with open(IN_CSV, newline="") as f:
        reader = csv.DictReader(f)
        points = [
            {"true_re": float(row["true_re"]), "pred_re": float(row["pred_re"]), "uin": float(row["uin"])}
            for row in reader
        ]

    resid = [p["pred_re"] - p["true_re"] for p in points]
    rmse  = math.sqrt(sum(r ** 2 for r in resid) / len(resid))
    print(f"Loaded {len(points)} points from {IN_CSV}")
    print(f"RMSE : {rmse:.2f}")

    write_d3_html(points, rmse, OUT_HTML)


if __name__ == "__main__":
    main()
