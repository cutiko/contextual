import React from 'react';
import ProfileLink from '../subscribers/ProfileLink'

export default function (props) {

    return(
        <div className="bg-blue flex flex-wrap p-6 text-white font-bold">
            <div className="w-1/2 sm:w-1/2 lg:w-3/4">
                Contextual React App
            </div>
            <ProfileLink/>
        </div>
    );
}