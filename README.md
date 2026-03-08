# Forward and Inverse Modeling of the 3D Incompressible (Steady-State) Navier–Stokes Equations with Neural Networks ... A Story in Machine Learning-Driven Computational Fluid Dynamics

## Setup

1. Pull model files via Git LFS (required — models are ~256 MB):
   ```bash
   git lfs install
   git lfs pull
   ```

2. Create a Python virtual environment and install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. Install Node dependencies:
   ```bash
   cd main_vis/app && npm install
   cd ../../story/app && npm install
   ```

## Run

From the repo root:

```bash
bash start.sh
```
