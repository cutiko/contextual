import React, {Component} from 'react';
import real_time from "../consumers/real_time";
import TimeButton from '../components/timeButton'

class TimeUpload extends Component {

    upload(value) {
        this.props.reference.set(value);
    }

    render() {
        return (
            <li><TimeButton click={this.upload.bind(this)}/></li>
        );
    }

}

export default real_time(TimeUpload);