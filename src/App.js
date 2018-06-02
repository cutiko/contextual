
import React, {Component} from 'react';
import FirebaseContext from "./firebase-context";
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
            <FirebaseContext.Provider value={this.state.rtd}>
                <SimpleList/>
            </FirebaseContext.Provider>

        );
    }
}

export default App;
