import React, {Component} from 'react';
import TimeButton from '../components/timeButton'

export default class UploadButton extends Component {

    upload(value) {
        const reference = this.props.reference;
        console.log(`Time upload to RTD node ${reference.key}:`, value);
        reference.set(value);
    }

    render() {
        return (
            <TimeButton click={this.upload.bind(this)}/>
        );
    }

}