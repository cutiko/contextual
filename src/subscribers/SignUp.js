import React, {Component, Fragment} from 'react';
import user from "../consumers/user";
import LeftColumn from '../components/columns/LeftColumn'
import RightColumn from '../components/columns/RightColumn'
import Login from '../subscribers/Login'
import Logout from '../subscribers/Logout'

class SignUp extends Component {

    render() {
        const currentUser = this.props.currentUser;
        if (currentUser) {
            return (
                <Fragment>
                    <LeftColumn
                        title={"Real Time Example"}
                        content={"The component can send the current time to the Firebase RTD and stay listening to it. When is unmount the listener will be shut down and turn on again when is mounted."}/>
                    <RightColumn
                        title={"One Time Example"}
                        content={"The component can send the current time to the Firebase RTD but only listen once. You can send the value again, too see it: unmoun and re-attach"}/>
                    <Logout/>
                </Fragment>
            );
        } else {
            return(
                <Login/>
            );
        }

    }

}

export default user(SignUp);