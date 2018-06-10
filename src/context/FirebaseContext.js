import React, {Component} from 'react';
import DatabaseContext from './database-context';
import AuthContext from './auth-context';
import MainGrid from '../components/MainGrid';

export default class FirebaseContext extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        const auth = this.props.auth;
        if (auth) {
            auth.onAuthStateChanged(this.userState.bind(this));
        }
    }

    userState(user) {
        console.log("AUTH:", user);
        this.setState({currentUser: user});
    }

    render() {
        return (
            <AuthContext.Provider value={this.state.currentUser}>
                <DatabaseContext.Provider value={this.props.rtd}>
                    <MainGrid/>
                </DatabaseContext.Provider>
            </AuthContext.Provider>
        );
    }

}