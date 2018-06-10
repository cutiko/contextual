import React, {Component} from 'react';
import user from "../consumers/user";

class ProfileLink extends Component{
    render() {
        const user = this.props.currentUser;
        const name = (user) ? `Welcome ${user.displayName}` : "Please Login";
        return (
            <div className="w-1/2 sm:w-1/2 lg:w-1/4 text-right">
                {name}
            </div>
        );
    }
}

export default user(ProfileLink);