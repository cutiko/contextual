import React, {Component} from 'react';
import './App.css';

const ThemeContext = React.createContext('light');

class App extends Component {
    render() {
        return (
            <ThemeContext.Provider value={"some value"}>
                <Toolbar/>
            </ThemeContext.Provider>

        );
    }
}

function Toolbar(props) {
    return (
        <div>
            <MyCustomElement/>
        </div>
    );
}


function MyCustomElement(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <p>
                    {theme}
                </p>
            )}
        </ThemeContext.Consumer>
    );
}

export default App;
