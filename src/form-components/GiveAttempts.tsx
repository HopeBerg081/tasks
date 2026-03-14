import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        const attemptNum = parseInt(event.target.value);
        if (!Number.isNaN(attemptNum)) {
            setAttempts(attemptNum);
        } else {
            return;
        }
    }
    return (
        <div>
            <h2>Attempts left = {attempts}</h2>
            <Form.Group controlId="formGiveAttempts"> 
                <Form.Label>Give Attempts</Form.Label>
                <div>
                    <Button
                        disabled = {attempts <= 0}
                        onClick ={()=> {setAttempts(attempts - 1)}}>use</Button>
                    <Button onClick ={()=> {setAttempts(attempts + 1)}}>gain</Button>
                </div>
                <Form.Control
                    type = "number"
                    value={attempts}
                    onChange={updateAttempts}
                />
            </Form.Group>
        </div>
    );
}
