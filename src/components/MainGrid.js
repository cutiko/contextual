import React, {Component} from 'react';
import SignUp from '../subscribers/SignUp'

export default class MainGrid extends Component {


    render() {
        return (
            <div className="flex flex-wrap p-3">
                <SignUp/>
                <div className="p-4 m-4 text-center bg-teal-lightest w-full">You can open the console to see more
                    details
                </div>
            </div>
        );
    }

}