
import React, {Component} from 'react';
import FirebaseContext from "./firebase-context";
import MainGrid from "./components/MainGrid";
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
                <MainGrid/>
            </FirebaseContext.Provider>

        );
    }
}

export default App;
