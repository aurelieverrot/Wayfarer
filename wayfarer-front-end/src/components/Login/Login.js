import React from 'react';
import userApi from '../../api/UserApi';

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    login = () => {
        userApi.login(this.state)
        .then(res => {
            console.log("HERE")
            console.log(res)
            // call function handler
        });
    }

    validateFields = () => {
        let keys = []
        // Puts state keys in keys array
        Object.keys(this.state).map(key => keys.push(key));
        // console.log(keys);
        let valid = true
        keys.map(key => {
            let field = document.getElementById(key);
            field.classList.remove('error');
            if (this.state[key] == '') {
                valid = false;
                // add class error to fields
                field.classList.add('error');
            }
        })
        return valid;
    }

    updateState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.validateFields())
            this.login()
            // console.log("login");
    }

    render() {    
        return(
            <form onSubmit={this.onSubmit} className="ui form">
                <div className="two fields">
                    <div id="email" className="field">
                        <label>Email</label>
                        <input onInput={this.updateState} name="email" type="text" placeholder="Email"/>
                        </div>
                        <div id="password" className="field">
                        <label>Password</label>
                        <input onInput={this.updateState} name="password" type="password"/>
                    </div>
                </div>
            <button class="ui submit button">Login</button>
        </form>
        );
    }
}

export default Login;