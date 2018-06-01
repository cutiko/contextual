import React from 'react';
import {ThemeContext} from "./theme-context";

function Counter(props) {
    return (
        <ThemeContext.Consumer>
            {rtd => (
                <li onClick={()=>rtd.ref('consumer').set('is working')}>CLICK
                </li>
            )}
        </ThemeContext.Consumer>
    );
}

export default Counter;