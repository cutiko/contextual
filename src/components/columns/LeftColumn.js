import React from 'react';
import BaseColumn from './BaseColumn';
import LiveupLoad from '../../publishers/LiveUpload';
import LiveTime from '../../subscribers/LiveTime';

export default class LeftColumn extends BaseColumn {

    getActionButton() {
        return <LiveupLoad/>
    }

    getToggleable() {
        return <LiveTime/>
    }

}