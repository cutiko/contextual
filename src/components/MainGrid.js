import React, {Component} from 'react';
import TimeUpload from "../publishers/LiveUpload";
import LiveTime from '../subscribers/LiveTime';

const UNMOUNT = "Unmount the component";
const LISTEN = "Re-attach the component";

class MainGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: UNMOUNT
        };
    }

    isVisualizer() {
        if (UNMOUNT === this.state.text) {
            return <LiveTime/>;
        }
    }

    updateListener() {
        const text = this.state.text;
        this.setState({
            text: (UNMOUNT === text) ? LISTEN : UNMOUNT
        });

    }

    render() {
        return (
            <div className="flex flex-wrap p-3">
                <div className="w-full md:w-1/2">
                    <h3 className="bg-blue-light h-10 text-center pt-2">Real Time Example</h3>
                    {this.isVisualizer()}
                    <div className="flex content-center p-8">
                        <TimeUpload/>
                        <button
                            className="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded w-full md:w-1/2 ml-2"
                            onClick={() => this.updateListener()}>
                            {this.state.text}
                        </button>
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