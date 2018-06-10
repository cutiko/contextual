import React, {Component} from 'react';
import TimeItem from '../components/timeItem';
import real_time from '../consumers/real_time'

class LiveTime extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "Please wait"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const reference = this.props.reference;
        if (reference) {
            reference.on('value', this.handleChange);
        }
    }

    componentWillUnmount() {
        const reference = this.props.reference;
        if (reference) {
            console.log("CLEANING");
            reference.off('value', this.handleChange);
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

export default real_time(LiveTime)



