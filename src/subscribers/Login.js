import React, {Component} from 'react';
import auth from "../consumers/auth";

class Login extends Component{

    render() {
        return (
            <p>No user</p>
        );
    }

}

export default auth(Login);