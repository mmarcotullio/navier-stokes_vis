# Forward and Inverse Modeling of the 3D Incompressible (Steady-State) Navier–Stokes Equations with Neural Networks [A Story in Machine Learning-Driven Computational Fluid Dynamics]

This project tells a two-part story about using machine learning as a surrogate for computational fluid dynamics. In the forward direction, a 3D Fourier Neural Operator (FNO), trained on steady-state incompressible Navier--Stokes solutions replaces an expensive CFD solver, predicting full volumetric velocity and pressure fields inside a pipe with a spherical obstacle. The interactive Three.js visualization lets you drag sliders to change physical parameters and watch the flow behavior update in real time. In the inverse direction, a CNN reads the observed (FNO predicted) flow fields and recovers the Reynolds number (and thus, the calculated kinematic viscosity) from the flow pattern. 

The web-app is structured as a 5-chapter story; navigate to Chapter 5 for the interactive demo. 




## Requirements

- Python 3.10+
- Node.js 18+
- Git LFS

## Setup

**1. Clone the repo**
```bash
git clone https://github.com/mmarcotullio/navier-stokes_vis.git
cd navier-stokes_vis
```

**2. Pull model files**
```bash
git lfs install
git lfs pull
```

**3. Create Python virtual environment and install dependencies**
```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

**4. Install Node dependencies**
```bash
cd main_vis/app && npm install
cd ../../story/app && npm install
cd ../..
```

**5. Run**
```bash
./start.sh
```

