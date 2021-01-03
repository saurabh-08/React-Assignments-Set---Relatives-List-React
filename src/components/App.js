import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const relatives = ["r1", "r2", "r3"];

        return(
            <div id="main">
               {/* Do not remove the main div */}
                <h3>relatives[0]</h3>
                <h3>relatives[1]</h3>
                <h3>relatives[2]</h3>
            </div>
        )
    }
}


export default App;
