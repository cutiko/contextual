import React from 'react';
import FirebaseContext from '../firebase-context';

export default function (SubscriberComponent) {
    return function(props) {
        return(
            <FirebaseContext.Consumer>
                {
                    rtd => (
                        <SubscriberComponent reference={rtd.ref('real_time')}/>
                    )
                }
            </FirebaseContext.Consumer>
        );
    };

}