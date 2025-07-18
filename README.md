# KevinGraph Backend

This is the FastAPI server that powers the plotting functionality for the **KevinGraph** frontend. It receives a math expression (like `cos(x)` or `x^2 + 3*x`) and returns a base64-encoded image of the graph.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/KevinityAlwaysCamelCase/KevinGraph.git
cd KevinGraph/backend
```

### 2. install dependencies
copy paste this in your terminal
```bash
pip install -r requirements.txt
```
or manually
```bash
pip install fastapi uvicorn numpy matplotlib sympy
```
### 3. run the server
input this in your terminal
```bash
uvicorn index:app --reload
```
##  API endpoint
Form field: expr (e.g. x^2, cos(x), or 3*x)

Returns: { "image": "base64 string" }

Example using curl:
```bash
curl -X POST -F "expr=cos(x)" http://localhost:8000/plot
```
## How It Works
<ul>
   <li>Parses the expression using sympy.</li>
   <li>Converts it into a NumPy-compatible function.</li>
   <li>Plots the result using matplotlib.</li>
   <li>Encodes the plot as a base64 PNG and returns it.</li>
</ul>
