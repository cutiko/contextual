import React from 'react';
import Updater from "./Updater";
import Visualizer from "./Visualizer";

function SimpleList(props) {
    return (
        <ul>
            <Updater/>
            <Visualizer/>
        </ul>
    );
}

export default SimpleList;