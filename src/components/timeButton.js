import React from 'react';

export default function (props) {
    return (
        <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded w-full md:w-1/2"
                onClick={() => props.click(Date.now())}>
            Send Current Date to Firebase
        </button>
    );
}