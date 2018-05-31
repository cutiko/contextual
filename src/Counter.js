import React from 'react';
import {ThemeContext} from "./theme-context";

function Counter(props) {
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

export default Counter;