import React from 'react';
import baseColumn from './baseColumn';
import LiveupLoad from '../publishers/LiveUpload';
import LiveTime from '../subscribers/LiveTime';


export default function (props) {
    return (
        baseColumn(
            LiveupLoad,
            LiveTime,
            "Real Time Example",
            "The component can send the current time to the Firebase RTD and stay listening to it." +
            "When is unmount the listener will be shut down and turn on again when is mounted.")
    );
}