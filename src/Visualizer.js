import React, {Component} from 'react';
import FirebaseContext from './firebase-context';

function Visualizer() {
    return (
        <FirebaseContext.Consumer>
            {
                rtd => (
                    <Child rtd={rtd}/>
                )
            }
        </FirebaseContext.Consumer>
    );
}

export default Visualizer;

class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {
            consumer: "Please wait",
            reference: null,
            listener: null
        };
    }

    componentDidMount() {
        const rtd = this.props.rtd;
        if (rtd && !this.state.reference && !this.state.listener) {
            const reference = rtd.ref('consumer');
            const context = this;
            const listener = function (snapshot) {
                const value = snapshot.val();
                console.log("consumer:", value);
                if (snapshot.exists()) {
                    context.setState({consumer: value});
                }
            };
            this.setState(
                {
                    reference: reference,
                    listener: listener
                }
            );
            reference.on('value', listener);
        }
    }

    componentWillUnmount() {
        console.log("UNMOUNTING");
        const reference = this.state.reference;
        const listener = this.state.listener;
        if (reference && listener) {
            console.log("CLEANING");
            reference.off('value', listener);
        }
    }

    render() {
        return (
            <li>{this.state.consumer}</li>
        );
    }

}