import React, {Component, Fragment} from 'react';
import auth from "../consumers/auth";
import FirebaseUiAuth from 'react-firebaseui/FirebaseAuth';

class Login extends Component {

    getView() {
        const auth = this.props.auth;
        const firebase = this.props.firebase;
        const uiConfig = {
            signInFlow: 'popup',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ]
        };

        return (auth && firebase) ? <FirebaseUiAuth uiConfig={uiConfig} firebaseAuth={auth}/> : <p>Please Wait...</p>;
    }

    render() {

        return (
            <Fragment>
                {this.getView()}
            </Fragment>
        );
    }

}

export default auth(Login);