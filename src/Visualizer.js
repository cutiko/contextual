import React, {Component} from 'react';
import ThemeContext from './theme-context'

function Visualizer() {
    return (
        <ThemeContext.Consumer>
            {
                rtd =>(
                    <Child rtd={rtd}/>
                )
            }
        </ThemeContext.Consumer>
    );
}

export default Visualizer;

class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {
            consumer: "Please wait",
        };
    }

    componentDidMount() {
        const rtd = this.props.rtd;
        if (rtd) {
            const context = this;
            rtd.ref('consumer').on('value', function (snapshot) {
                const value = snapshot.val();
                console.log("consumer:", value);
                if (snapshot.exists()) {
                    context.setState({consumer:value})
                }
            });
        }
    }

    render() {
        return (
            <li>{this.state.consumer}</li>
        );
    }

}