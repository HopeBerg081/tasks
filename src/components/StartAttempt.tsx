import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={
                    !progress && attempts !== 0 ?
                        () => {
                            setProgress(true);
                            setAttempts(attempts - 1);
                        }
                    :   undefined
                }
            >
                Start Quiz
            </Button>
            <Button
                onClick={
                    progress ?
                        () => {
                            setProgress(false);
                        }
                    :   undefined
                }
            >
                Stop Quiz
            </Button>
            <Button
                onClick={
                    !progress ?
                        () => {
                            setAttempts(attempts + 1);
                        }
                    :   undefined
                }
            >
                Mulligan
            </Button>
            <p>Attempts Left: {attempts}</p>
        </div>
    );
}
