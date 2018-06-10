import React, {Component} from 'react';
import TimeUpload from "../publishers/LiveUpload";
import LiveTime from '../subscribers/LiveTime';
import ToggleButton from "./ToggleButton";

class MainGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }

    toggle(show) {
        this.setState({show})
    }

    showToggle() {
        return (this.state.show) ? <LiveTime/> : <h4 className="text-center m-8">Please re-attach component</h4>
    }

    render() {
        return (
            <div className="flex flex-wrap p-3">
                <div className="w-full md:w-1/2">
                    <h3 className="bg-blue-light h-10 text-center pt-2">Real Time Example</h3>
                    {this.showToggle()}
                    <div className="flex content-center p-8">
                        <TimeUpload/>
                        <ToggleButton toggle={this.toggle.bind(this)}/>
                    </div>
                    <p className="p-2 text-center bg-yellow-lightest">The component can send the current time to the Firebase RTD and stay listening to it.
                        When is unmount the listener will be shut down and turn on again when is mounted.</p>
                </div>
                <div className="w-full md:w-1/2">

                </div>
            </div>
        );
    }

}

export default MainGrid;