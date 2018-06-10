import React, {Component} from 'react';
import auth from "../consumers/auth";

class Logout extends Component{

    render() {
        return (
            <div className="p-4 m-4 text-center bg-grey-light w-full underline hover:text-blue cursor-pointer">
                Logout
            </div>
        );
    }

}

export default auth(Logout);