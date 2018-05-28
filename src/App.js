import React, {Component} from 'react';

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
        <ul>
            <li>Click this to change</li>
            <MyCustomElement/>
        </ul>
    );
}


function MyCustomElement(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <li>
                    {theme}
                </li>
            )}
        </ThemeContext.Consumer>
    );
}

export default App;
