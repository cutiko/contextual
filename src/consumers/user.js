import React from 'react';
import AuthContext from '../context/auth-context';

export default function (SubscriberComponent) {
    return function(props) {
        return(
            <AuthContext.Consumer>
                {
                    auth => (
                        <SubscriberComponent
                            currentUser={auth.currentUser}/>
                    )
                }
            </AuthContext.Consumer>
        );
    };

}