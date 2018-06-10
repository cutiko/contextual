import React, {Component} from 'react';
import ToggleButton from "./ToggleButton";

export default function (ActionButton, ToggableComponent, title, content) {

    class Column extends Component {

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
            return (this.state.show) ? <ToggableComponent/> : <h4 className="text-center m-8">Please re-attach component</h4>
        }

        render() {
            return (
                <div className="w-full md:w-1/2">
                    <h3 className="bg-blue-light h-10 text-center pt-2">{title}</h3>
                    {this.showToggle()}
                    <div className="flex content-center p-8">
                        <ActionButton/>
                        <ToggleButton toggle={this.toggle.bind(this)}/>
                    </div>
                    <p className="p-2 text-center bg-yellow-lightest">{content}</p>
                </div>
            );
        }
    }

    return(
        <Column/>
    );
}

