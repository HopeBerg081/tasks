import React from "react";
import "./App.css";
import borderKris from "./images/borderKris.png";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript <b /> Hope Berg
            </header>
            <img
                src={borderKris}
                alt="A purple lace border decorated with hearts and stripes"
            />
            <p>&quot;Hello World&quot; </p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <h3>Welcome to my site &lt;3</h3> <b />
            <p>
                What you may find on this page:
                <ul>
                    <li>Sugar</li>
                    <li>Spice</li>
                    <li>And everything nice</li>
                </ul>
            </p>
            <Container>
                <Row>
                    <Col>
                        <div className="red-rectangle"> </div>
                    </Col>
                    <Col>
                        <div className="red-rectangle"> </div>
                    </Col>
                    <Col>
                        <div className="red-rectangle"> </div>
                    </Col>
                    <Col>
                        <div className="red-rectangle"> </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
