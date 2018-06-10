import React from 'react';

export default function (props) {
    return (
        <h4 className="text-center m-8">Last saved time: {convertDate(props.text)}</h4>
    );
}

function convertDate(time) {
    console.log(typeof time);
    if (typeof time === "string") {
        return time;
    }
    return new Date(time).toString()
}