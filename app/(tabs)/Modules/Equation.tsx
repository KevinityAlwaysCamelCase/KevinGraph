import React, { useState } from "react";

interface Props {
    children?: string;
    id: string;
}

function Equation({ children, id }: Props) {
    const [inputValue, setInputValue] = useState("");

    const handlePlotClick = async () => {
        const formData = new FormData();
        formData.append("expr", inputValue);

        const response = await fetch("http://localhost:8000/plot", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        console.log(data.image);

        const container = document.getElementById('image-container');

        if (container) {
            container.innerHTML = "";
        }

        const img = document.createElement('img');
        img.src = 'data:image/png;base64,' + data.image;
        img.alt = 'Rendered Base64 Image';
        img.style.maxWidth = '100%';

        container?.appendChild(img);
    };


    return (
        <div className="equation">
            <p
                style={{
                    color: "#b0b0b0",
                    margin: "8px 5px",
                }}
            >y =</p>
            <input
                placeholder="cos(x)"
                type="text"
                id={id}
                name={(Number(id) - 1).toString()}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{
                    fontSize: "1.2rem",
                    fontFamily: "'STIX Two Math', 'Latin Modern Math', 'Cambria Math', 'serif'",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    width: "calc(100% - 120px)",
                    marginRight: "10px",
                    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
                    outline: "none",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                    e.target.style.borderColor = "#4A90E2";
                    e.target.style.boxShadow = "0 0 5px rgba(74, 144, 226, 0.5)";
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = "#ccc";
                    e.target.style.boxShadow = "inset 0 1px 3px rgba(0, 0, 0, 0.1)";
                }}
            />

            <button
                type="button"
                style={{
                    position: "absolute",
                    right: 20,
                    fontSize: "1.3rem",
                }}
                onClick={handlePlotClick}
            >Plot</button>
        </div>
    );
}

export default Equation;
