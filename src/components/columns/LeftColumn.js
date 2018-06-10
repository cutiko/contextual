import React from 'react';
import BaseColumn from './BaseColumn';
import LiveTime from '../../subscribers/LiveTime';
import real_time from "../../consumers/real_time";
import UploadButton from "../../publishers/UploadButton";

export default class LeftColumn extends BaseColumn {

    getActionButton() {
        const LiveBtn = real_time(UploadButton);
        return <LiveBtn/>
    }

    getToggleable() {
        return <LiveTime/>
    }

}