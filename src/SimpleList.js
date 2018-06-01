import React, {Component} from 'react';
import Updater from "./Updater";
import Visualizer from "./Visualizer";

class SimpleList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            listening: true
        };
    }

    isVisualizer() {
        if (this.state.listening) {
            return <Visualizer/>
        }
        return <li>Listening has stop</li>
    }

    render() {
        return (
            <ul>
                <Updater/>
                {this.isVisualizer()}
                <li><button onClick={()=>this.setState({listening:false})}>Unmount</button></li>
            </ul>
        );
    }

}

export default SimpleList;