import React, {Component} from 'react';
import TimeItem from '../components/timeItem';
import one_time from "../consumers/one_time";

class SingleTime extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "Please wait"
        };
    }

    componentDidMount() {
        const reference = this.props.reference;
        if (reference) {
            reference.once('value').then(this.handleChange.bind(this));
        }
    }

    handleChange(snapshot) {
        const value = snapshot.val() || "Nothing found";
        console.log("value", value);
        this.setState({
           text: value
        });
    }

    render() {
        return (
            <TimeItem text={this.state.text}/>
        );
    }
}

export default one_time(SingleTime)



