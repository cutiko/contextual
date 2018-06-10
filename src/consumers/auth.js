import React from 'react';
import AuthContext from '../context/auth-context';

export default function (SubscriberComponent) {
    return function(props) {
        return(
            <AuthContext.Consumer>
                {
                    currentUser => (
                        <SubscriberComponent
                            currentUser={currentUser}/>
                    )
                }
            </AuthContext.Consumer>
        );
    };

}