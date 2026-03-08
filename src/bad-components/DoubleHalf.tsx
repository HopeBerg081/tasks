import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue, setDhValue } from "./DoubleHalfState";

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(1); //Need to define state before using it
    
    function Doubler(): void { //Function needs to be within the larger function
        setDhValue((prev) => prev * 2); //Using prev can prevent errors
    }

    function Halver(): void {
        setDhValue((prev) => prev * 0.5)
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick = {Doubler}>Double</Button>
            <Button onClick = {Halver()}>Halver</Button>
        </div>
    );
}
