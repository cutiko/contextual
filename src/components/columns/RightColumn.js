import React from 'react';
import BaseColumn from './BaseColumn';
import SingleTime from '../../subscribers/SingleTime'
import OnceUpload from '../../publishers/OnceUpload'

export default class RightColumn extends BaseColumn {

    getActionButton() {
        return <OnceUpload/>
    }

    getToggleable() {
        return <SingleTime/>
    }

}