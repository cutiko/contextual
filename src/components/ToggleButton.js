import React, {Component} from 'react';

const UNMOUNT = "Unmount the component";
const REATTACH = "Re-attach the component";
export default class ToggleButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: UNMOUNT
        };
    }

    updateListener() {
        const text = this.state.text;
        const unmonunt = UNMOUNT === text;
        this.setState({
            text: unmonunt ? REATTACH : UNMOUNT
        });
        this.props.toggle(!unmonunt);
    }

    render() {
        return (
            <button
                className="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded w-full md:w-1/2 ml-2"
                onClick={() => this.updateListener()}>
                {this.state.text}
            </button>
        );
    }
}