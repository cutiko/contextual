import React, {Component} from 'react';
import {INITIAL, ThemeContext} from "./theme-context";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: INITIAL
        };

    }

    increaseCounter() {
        const update = this.state.counter+1;
        this.updateState(update);
    }

    decreaseCounter() {
        const update = this.state.counter-1;
        this.updateState(update)
    }

    updateState(update) {
        this.setState(
            {
                counter: update
            }
        );
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.counter}>
                <Toolbar
                    increaser={this.increaseCounter.bind(this)}
                    decreaser={this.decreaseCounter.bind(this)}
                />
            </ThemeContext.Provider>

        );
    }
}

function Toolbar(props) {
    return (
        <ul>
            <li onClick={()=>props.increaser()}><button>click to increase counter</button></li>
            <li onClick={()=>props.decreaser()}><button>click to decrease counter</button></li>
            <MyCustomElement/>
        </ul>
    );
}


function MyCustomElement(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <li>
                    counter: {theme}
                </li>
            )}
        </ThemeContext.Consumer>
    );
}

export default App;
