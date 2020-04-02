import React from 'react';
import './Signup.css';
import userApi from '../../api/UserApi';
// import { register } from '../../serviceWorker';
class Signup extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        city: ''
    }
    validateFields = () => {
        let keys = []
        // Puts state keys in keys array
        Object.keys(this.state).map(key => keys.push(key));
        let valid = true
        // check if any states are empty
        keys.map(key => {
            if (this.state[key] == '') {
                // console.log(key);
                valid = false;

            }
        })
        return valid;
    }
    passwordValid = (password) => {
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})")
        return (strongRegex.test(password)) && (password.length >= 8) ? true : false
    }
    emailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    register = () => {
        userApi.signup(this.state)
        .then(res => {
            console.log(res)
            // call function handler
        });
    }
    updateState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        if (!this.validateFields())
            return
        // validate password and email
        // console.log("Checking password");
        if (!this.passwordValid(this.state.password) || !this.emailValid(this.state.email)) 
            return
        else 
            this.register()
    }
    render() {    
        return(
            <form onSubmit={this.onSubmit} className="ui form">
                <div className="two fields">
                    <div name="email" className="field error">
                        <label>Email</label>
                        <input onInput={this.updateState} name="email" id="email" type="text" placeholder="Email"/>
                    </div>
                    <div name="password" className="field">
                        <label>Password</label>
                        <input onInput={this.updateState} name="password" id="password" type="password"/>
                    </div>
                </div>
                <div className="two fields">
                    <div name="firstName" className="field">
                        <label>First name</label>
                        <input onInput={this.updateState} name="firstName" type="text" placeholder="First Name"/>
                    </div>
                    <div className="field">
                        <label>Last name</label>
                        <input name="lastName" onInput={this.updateState} name="lastName" type="text" placeholder="Last Name"/>
                    </div>
                </div>
                <div name="city" className="field">
                    <label>City</label>
                    <input onInput={this.updateState} name="city" type="text" placeholder="City"/>
                </div>
                <button className="ui submit button">Sign Up</button>
            </form>
        );
    }
}

export default Signup;