import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>("");
    function updateRequests(event: React.ChangeEvent<HTMLInputElement>) {
        setRequests(event.target.value);
    }
    function updateAttempts() {
        let requestNum : number = parseInt(requests);
        if (!Number.isNaN(requestNum)) {
            setAttempts((prev) => prev + requestNum);
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
                    <Button onClick ={()=> {updateAttempts()}}>gain</Button>
                </div>
                <Form.Control
                    type = "number"
                    value={requests}
                    onChange={updateRequests}
                />
            </Form.Group>
        </div>
    );
}
