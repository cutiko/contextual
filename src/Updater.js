import React, {Component} from 'react';
import FirebaseContext from "./firebase-context";
import timeSetter from "./broadcasters/timeSetter";

export default class Updater extends Component {

    defineRender(rtd) {
        if (!rtd) {
            return (<li>Wait Please</li>);
        }
        return (
            <li onClick={() => timeSetter(rtd)}>
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