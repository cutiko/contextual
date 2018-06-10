import React, {Component, Fragment} from 'react';
import LeftColumn from './columns/LeftColumn';
import RightColumn from './columns/RightColumn';
import Login from '../subscribers/Login'
import user from "../consumers/user";

class MainGrid extends Component {

    isAuth() {
        const WrappedAuth = user(authComponent);
        return <WrappedAuth/>;
    }

    render() {
        return (
            <div className="flex flex-wrap p-3">
                {this.isAuth()}
            </div>
        );
    }

}

function authComponent(props) {
    if (props.currentUser) {
        return (
            <Fragment>
                <LeftColumn
                    title={"Real Time Example"}
                    content={"The component can send the current time to the Firebase RTD and stay listening to it. When is unmount the listener will be shut down and turn on again when is mounted."}/>
                <RightColumn
                    title={"One Time Example"}
                    content={"The component can send the current time to the Firebase RTD but only listen once. You can send the value again, too see it: unmoun and re-attach"}/>
                <div className="p-4 m-4 text-center bg-teal-lightest w-full">You can open the console to see more
                    details
                </div>
            </Fragment>
        );
    }
    return <Login/>;
}

export default MainGrid;