import React from 'react';
import BaseColumn from './BaseColumn';
import SingleTime from '../../subscribers/SingleTime';
import UploadButton from "../../publishers/UploadButton";
import one_time from "../../consumers/one_time";

export default class RightColumn extends BaseColumn {

    getActionButton() {
        const OnceBtn = one_time(UploadButton);
        return <OnceBtn/>
    }

    getToggleable() {
        return <SingleTime/>
    }

}