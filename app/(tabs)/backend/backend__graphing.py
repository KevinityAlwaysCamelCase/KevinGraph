from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from sympy import symbols, lambdify, sympify

app = FastAPI()

# Allow CORS from all origins (for testing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/plot")
async def plot(expr: str = Form(...)):
    try:
        x = symbols('x')
        parsed_expr = sympify(expr)
        func = lambdify(x, parsed_expr, modules=["numpy"])

        x_vals = np.linspace(-10, 10, 400)
        y_vals = func(x_vals)

        # Plot
        fig, ax = plt.subplots()
        ax.plot(x_vals, y_vals, label=f"y = {expr}")
        ax.set_title("Function Plot")
        ax.grid(True)
        ax.legend()

        # Save to base64
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        plt.close(fig)
        buf.seek(0)
        img_base64 = base64.b64encode(buf.read()).decode('utf-8')

        return {"image": img_base64}
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=400)
