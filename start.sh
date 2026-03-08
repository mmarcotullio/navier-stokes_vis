ROOT="$(cd "$(dirname "$0")" && pwd)"

cleanup() {
  echo ""
  echo "Shutting down..."
  kill 0
  exit 0
}
trap cleanup INT TERM EXIT

# ── Start main_vis in background ─────────────────────────────────────────────
echo "[start.sh] Starting main_vis (Flask + Vite)..."
"$ROOT/main_vis/start.sh" &

# ── Wait for main_vis Vite (port 5173) ───────────────────────────────────────
echo "[start.sh] Waiting for main_vis on port 5173..."
for i in $(seq 1 60); do
  if curl -sf http://localhost:5173 > /dev/null 2>&1; then
    echo "[start.sh] main_vis ready."
    break
  fi
  sleep 1
done

# ── Start story app ───────────────────────────────────────────────────────────
echo "[start.sh] Starting story app on port 5174..."
cd "$ROOT/story/app"
npm run dev -- --port 5174

wait
