import React, { useState } from "react";
import Form from "react-bootstrap/Form"

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const[givenAnswer, setGivenAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formCheckAnswer"> 
                <Form.Label>Check Answer</Form.Label>
                <Form.Control value={givenAnswer} onChange={updateAnswer}/>
            </Form.Group>
            <div>
                {givenAnswer === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
