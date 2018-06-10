import React, {Component} from 'react';
import LeftColumn from './LeftColumn';

class MainGrid extends Component {

    render() {
        return (
            <div className="flex flex-wrap p-3">
                <LeftColumn/>
                <div className="w-full md:w-1/2">
                    RIGHT COLUMN
                </div>
            </div>
        );
    }

}

export default MainGrid;