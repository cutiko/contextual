import React from 'react';
import baseColumn from './baseColumn';
import SingleTime from '../subscribers/SingleTime'
import OnceUpload from '../publishers/OnceUpload'

export default function (props) {
    return (
        baseColumn(
            OnceUpload,
            SingleTime,
            "One Time Example",
            "The component can send the current time to the Firebase RTD but only listen once" +
            "You can send the value again, too see it: unmoun and re-attach")
    );
}