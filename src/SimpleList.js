import React, {Component} from 'react';
import Updater from "./Updater";
import Visualizer from "./Visualizer";

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
            return <Visualizer/>;
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
                <Updater/>
                {this.isVisualizer()}
                <li>
                    <button onClick={() => this.updateListener()}>{this.state.text}</button>
                </li>
            </ul>
        );
    }

}

export default SimpleList;