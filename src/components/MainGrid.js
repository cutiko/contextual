import React, {Component} from 'react';
import LeftColumn from './LeftColumn';
import RigthColumn from './RigthColumn';

class MainGrid extends Component {

    render() {
        return (
            <div className="flex flex-wrap p-3">
                <LeftColumn/>
                <RigthColumn/>
            </div>
        );
    }

}

export default MainGrid;