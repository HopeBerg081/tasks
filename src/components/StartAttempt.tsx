import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    return (
        <div>
            <Button
                disabled={progress || attempts <= 0}
                onClick={() => {
                    setProgress(true);
                    setAttempts((prev) => prev - 1);
                }}
            >
                Start Quiz
            </Button>
            <Button
                disabled={!progress}
                onClick={() => {
                    setProgress(false);
                }}
            >
                Stop Quiz
            </Button>
            <Button
                disabled={progress}
                onClick={() => {
                    setAttempts((prev) => prev + 1);
                }}
            >
                Mulligan
            </Button>
            <p>Attempts Left: {attempts}</p>
        </div>
    );
}
