import React from 'react';
import Counter from "./Counter";

function SimpleList(props) {
    return (
        <ul>
            <li onClick={()=>props.increaser()}><button>click to increase counter</button></li>
            <li onClick={()=>props.decreaser()}><button>click to decrease counter</button></li>
            <Counter/>
        </ul>
    );
}

export default SimpleList;