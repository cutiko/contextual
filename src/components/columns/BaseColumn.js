import React, {Component} from 'react';
import ToggleButton from "../ToggleButton";

export default class BaseColumn extends Component {

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
        return (this.state.show) ? this.getToggleable() : <h4 className="text-center m-8">Please re-attach component</h4>
    }

    getActionButton() {
        return <p className="text-red">Override getActionButton() on child class</p>
    }

    getToggleable() {
        return <p className="text-red">Override geToggleable() on child class</p>
    }

    render() {
        return (
            <div className="w-full md:w-1/2 p-1">
                <h3 className="bg-blue-light h-10 text-center pt-2">{this.props.title}</h3>
                {this.showToggle()}
                <div className="flex content-center p-8">
                    {this.getActionButton()}
                    <ToggleButton toggle={this.toggle.bind(this)}/>
                </div>
                <p className="p-2 text-center bg-yellow-lightest">{this.props.content}</p>
            </div>
        );
    }
}
