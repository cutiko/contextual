import React from 'react';
import Updater from "./Updater";

function SimpleList(props) {
    return (
        <ul>
            <Updater/>
            <li onClick={()=>props.increaser()}><button>click to increase counter</button></li>
            <li onClick={()=>props.decreaser()}><button>click to decrease counter</button></li>
        </ul>
    );
}

export default SimpleList;