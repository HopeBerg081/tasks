import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript <b /> Hope Berg
            </header>
            <img src={"./src/images/borderKris.png"} />
            <p>&quot;Hello World&quot; </p>
            <h3>Welcome to my site &lt;3</h3> <b />
            <p>
                What you may find on this page:
                <ul>
                    <li>Sugar</li>
                    <li>Spice</li>
                    <li>And everything nice</li>
                </ul>
            </p>
        </div>
    );
}

export default App;
