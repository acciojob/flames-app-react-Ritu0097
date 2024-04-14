import React from "react";
import { Component } from "react";
import FlamesGame from "./FlamesGame.js"; 
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div id="main">
                {/* Do not remove the main div */}
                <FlamesGame />
            </div>
        );
    }
}

export default App;
