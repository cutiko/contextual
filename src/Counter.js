import React, {Component, Fragment} from 'react';
import {ThemeContext} from "./theme-context";

export default class Counter extends Component {

    defineRender(rtd) {
        if (!rtd) {
            return (<li>Wait Please</li>);
        }
        return (
            <li onClick={()=>rtd.ref('consumer').set(Date.now())}><button>Click to update</button></li>
        );
    }

    render() {
        return (
            <Fragment>
                <ThemeContext.Consumer>
                    {rtd => (
                        this.defineRender(rtd)
                    )}
                </ThemeContext.Consumer>
            </Fragment>
        );
    }

}