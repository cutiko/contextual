import React, {Component} from 'react';
import auth from "../consumers/auth";

class Logout extends Component{

    logout() {
        const auth = this.props.auth;
        if (auth) {
            auth.signOut();
        }
    }

    render() {
        return (
            <div onClick={()=>this.logout()} className="p-4 m-4 text-center bg-grey-light w-full underline hover:text-blue cursor-pointer">
                Logout
            </div>
        );
    }

}

export default auth(Logout);