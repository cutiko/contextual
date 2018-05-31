import React, {Component} from 'react';
import {INITIAL, ThemeContext} from "./theme-context";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testingValue: INITIAL
        };

    }

    changeTheme() {
        console.log("changing");
        const current = this.state.testingValue;
        const update = (current === INITIAL) ? "changed" : INITIAL;
        this.setState(
            {
                testingValue: update
            }
        );
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.testingValue}>
                <Toolbar clicker={this.changeTheme.bind(this)}/>
            </ThemeContext.Provider>

        );
    }
}

function Toolbar(props) {
    return (
        <ul>
            <li onClick={()=>props.clicker()}><button>click to change line below</button></li>
            <MyCustomElement/>
        </ul>
    );
}


function MyCustomElement(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <li>
                    {theme}
                </li>
            )}
        </ThemeContext.Consumer>
    );
}

export default App;
