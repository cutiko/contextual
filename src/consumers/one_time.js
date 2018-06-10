import React from 'react';
import DatabaseContext from '../context/database-context';

export default function (SubscriberComponent) {
    return function(props) {
        return(
            <DatabaseContext.Consumer>
                {
                    rtd => (
                        <SubscriberComponent
                            reference={rtd.ref('one_time')}/>
                    )
                }
            </DatabaseContext.Consumer>
        );
    };

}