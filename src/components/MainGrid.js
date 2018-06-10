import React, {Component, Fragment} from 'react';
import SignUp from '../subscribers/SignUp'
import NavBar from './navBar';

export default class MainGrid extends Component {


    render() {
        return (
            <Fragment>
                <NavBar/>
                <div className="flex flex-wrap p-3">
                    <SignUp/>
                    <div className="p-4 m-4 text-center bg-teal-lightest w-full">You can open the console to see more
                        details
                    </div>
                </div>
            </Fragment>
        );
    }

}