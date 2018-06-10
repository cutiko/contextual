import React from 'react';
import FirebaseContext from '../firebase-context';

export default function (SubscriberComponent) {
    return function(props) {
        return(
            <FirebaseContext.Consumer>
                {
                    firebase => (
                        <SubscriberComponent
                            reference={firebase.rtd.ref('one_time')}/>
                    )
                }
            </FirebaseContext.Consumer>
        );
    };

}