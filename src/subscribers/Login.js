import React, {Component} from 'react';
import auth from "../consumers/auth";

class Login extends Component{

    createUser() {
        this.props.auth.createUserWithEmailAndPassword("test@test.com", "12345678").catch(function(error) {
            console.log("LOGIN ERROR:", error);
        });
    }

    render() {
        return (
            <button
                onClick={()=> this.createUser()}
                className="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded"
            >CREATE TEST USER</button>
        );
    }

}

export default auth(Login);