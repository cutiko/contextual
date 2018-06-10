import React, {Component} from 'react';
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
            <div className="w-full flex flex-wrap justify-center p-8 m-8">
                {this.getView()}
            </div>
        );
    }

}

export default auth(Login);