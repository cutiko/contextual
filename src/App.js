import React, {Component} from 'react';
import config from "./fire-config";
import FirebaseContext from "./context/FirebaseContext";
const firebase = require('firebase/app');
require('firebase/database');
require('firebase/auth');
firebase.initializeApp(config);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firebase: firebase,
            rtd: firebase.database(),
            auth: firebase.auth()
        };
    }

    render() {
        return (
            <FirebaseContext
                rtd={this.state.rtd}
                auth={this.state.auth}
                firebase={this.state.firebase}/>
        );
    }
}

export default App;
