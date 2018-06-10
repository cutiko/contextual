import React, {Component} from 'react';
import real_time from "../consumers/real_time";
import TimeButton from '../components/timeButton'

class LiveUpload extends Component {

    upload(value) {
        this.props.reference.set(value);
    }

    render() {
        return (
            <TimeButton click={this.upload.bind(this)}/>
        );
    }

}

export default real_time(LiveUpload);