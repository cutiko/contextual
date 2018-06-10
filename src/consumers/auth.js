import React from 'react';
import FirebaseContext from '../firebase-context';

export default function (SubscriberComponent) {
    return function(props) {
        return(
            <FirebaseContext.Consumer>
                {
                    firebase => (
                        <SubscriberComponent
                            auth={firebase.auth}/>
                    )
                }
            </FirebaseContext.Consumer>
        );
    };

}