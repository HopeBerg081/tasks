import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = ["red", "orange", "yellow", "green", "cyan", "blue", "purple", "pink"];
    const [color, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((c) => (
                <Form.Check
                    inline
                    key = {c}
                    type = "radio"
                    name = "color"
                    onChange = {updateColor}
                    id = {`color-check-${c}`}
                    label = {<span style={{backgroundColor: c}}>{c}</span>}
                    value = {c}
                    checked = {color === c}
                />
            ))}
            <div>You have chosen{" "} <span
                data-testid = "colored-box"
                style={{backgroundColor: color}}>{color}</span>
            </div>
        </div>
    );
}
