import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type = "radio"
                name = "color"
                onChange = {updateColor}
                id = "color-check-red"
                label = "Red"
                value = "red"
                checked = {color === "red"}
            />
            <Form.Check
                inline
                type = "radio"
                name = "color"
                onChange = {updateColor}
                id = "color-check-orange"
                label = "Orange"
                value = "orange"
                checked = {color === "orange"}
            />
            <div>You have chosen <span style={{backgroundColor: color}}>{color}</span>.</div>
        </div>
    );
}
