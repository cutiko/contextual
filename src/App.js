import React, {Component} from 'react';
import {INITIAL, ThemeContext} from "./theme-context";
import SimpleList from "./SimpleList";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: INITIAL
        };

    }

    increaseCounter() {
        const update = this.state.counter + 1;
        this.updateState(update);
    }

    decreaseCounter() {
        const update = this.state.counter - 1;
        this.updateState(update);
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
                <SimpleList
                    increaser={this.increaseCounter.bind(this)}
                    decreaser={this.decreaseCounter.bind(this)}/>
            </ThemeContext.Provider>

        );
    }
}

export default App;
