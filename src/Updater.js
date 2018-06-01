import React, {Component} from 'react';
import {ThemeContext} from "./theme-context";

export default class Updater extends Component {

    defineRender(rtd) {
        if (!rtd) {
            return (<li>Wait Please</li>);
        }
        return (
            <li onClick={() => rtd.ref('consumer').set(Date.now())}>
                <button>Click to update</button>
            </li>
        );
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {rtd => (
                    this.defineRender(rtd)
                )}
            </ThemeContext.Consumer>
        );
    }

}