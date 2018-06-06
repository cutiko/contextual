import React, {Component} from 'react';
import TimeUpload from "./publishers/TimeUpload";
import LiveTime from './subscribers/LiveTime'

const UNMOUNT = "Unmount the component";
const LISTEN = "Re-attach the component";

class SimpleList extends Component {

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
        return <li>Listening has stop</li>;
    }

    updateListener() {
        const text = this.state.text;
        this.setState({
            text: (UNMOUNT === text) ? LISTEN : UNMOUNT
        });

    }

    render() {
        return (
            <ul>
                <TimeUpload/>
                {this.isVisualizer()}
                <li>
                    <button onClick={() => this.updateListener()}>{this.state.text}</button>
                </li>
            </ul>
        );
    }

}

export default SimpleList;