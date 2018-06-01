
import React, {Component} from 'react';
import ThemeContext from "./theme-context";
import SimpleList from "./SimpleList";
import config from "./fire-config";
const firebase = require('firebase/app');
require('firebase/database');
firebase.initializeApp(config);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rtd: firebase.database()
        };

    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.rtd}>
                <SimpleList/>
            </ThemeContext.Provider>

        );
    }
}

export default App;
