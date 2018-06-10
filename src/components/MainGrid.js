import React, {Component} from 'react';
import LeftColumn from './columns/LeftColumn';
import RigthColumn from './columns/RightColumn';

class MainGrid extends Component {

    render() {
        return (
            <div className="flex flex-wrap p-3">
                <LeftColumn
                    title={"Real Time Example"}
                    content={"The component can send the current time to the Firebase RTD and stay listening to it. When is unmount the listener will be shut down and turn on again when is mounted."}/>
                <RigthColumn
                    title={"One Time Example"}
                    content={"The component can send the current time to the Firebase RTD but only listen once. You can send the value again, too see it: unmoun and re-attach"}/>
            </div>
        );
    }

}

export default MainGrid;