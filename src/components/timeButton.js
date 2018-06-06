import React from 'react';

export default function(props) {
    return(
        <button onClick={()=>props.click(Date.now())}>Send Current Date to Firebase</button>
    );
}