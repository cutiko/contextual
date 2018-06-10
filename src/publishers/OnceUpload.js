import React, {Component} from 'react';
import TimeButton from '../components/timeButton';
import one_time from "../consumers/one_time";

class OnceUpload extends Component {

    upload(value) {
        this.props.reference.set(value);
    }

    render() {
        return (
            <TimeButton click={this.upload.bind(this)}/>
        );
    }

}

export default one_time(OnceUpload);