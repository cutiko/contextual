import React, {Component} from 'react';
import FirebaseContext from "./firebase-context";

export default class Updater extends Component {

    defineRender(rtd) {
        if (!rtd) {
            return (<li>Wait Please</li>);
        }
        return (
            <li onClick={() => rtd.ref('real_time').set(Date.now())}>
                <button>Click to update</button>
            </li>
        );
    }

    render() {
        return (
            <FirebaseContext.Consumer>
                {rtd => (
                    this.defineRender(rtd)
                )}
            </FirebaseContext.Consumer>
        );
    }

}