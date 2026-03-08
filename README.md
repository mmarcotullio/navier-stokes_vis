# Forward and Inverse Modeling of the 3D Incompressible (Steady-State) Navier–Stokes Equations with Neural Networks ... A Story in Machine Learning-Driven Computational Fluid Dynamics

## Setup

1. Create a Python virtual environment and install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

2. Install Node dependencies:
   ```bash
   cd main_vis/app && npm install
   cd ../../story/app && npm install
   ```

## Run

From the repo root:

```bash
bash start.sh
```

- 3D visualization: http://localhost:5173
- Story app: http://localhost:5174
