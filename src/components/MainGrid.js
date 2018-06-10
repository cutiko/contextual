import React, {Component} from 'react';
import LeftColumn from './columns/LeftColumn';
import RightColumn from './columns/RightColumn';
import auth from "../consumers/auth";

class MainGrid extends Component {

    isAuth() {
        const WrappedAuth = auth(authComponent);
        return <WrappedAuth/>
    }

    render() {
        return (
            <div className="flex flex-wrap p-3">
                {this.isAuth()}
                <LeftColumn
                    title={"Real Time Example"}
                    content={"The component can send the current time to the Firebase RTD and stay listening to it. When is unmount the listener will be shut down and turn on again when is mounted."}/>
                <RightColumn
                    title={"One Time Example"}
                    content={"The component can send the current time to the Firebase RTD but only listen once. You can send the value again, too see it: unmoun and re-attach"}/>
                <div className="p-4 m-4 text-center bg-teal-lightest w-full">You can open the console to see more details</div>
            </div>
        );
    }

}

function authComponent(props) {
    return (props.currentUser) ? <p>USER IS LOGGED</p> : <p>NO USER</p>;
}

export default MainGrid;