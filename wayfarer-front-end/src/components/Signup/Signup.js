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
    checkFormsEmpty = () => {
        Object.keys(this.state.item).map(i => {
                var myitem = this.state.item[key];
            if (myitem == ''){
                // this.refs.[key].parentMarkError();
                return false
            }
        });
        return true;
    }
    passwordValid = (password) => {
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})")
        return (strongRegex.test(password)) && (password.length >= 8) ? true : false
    }
    emailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    register = () => {
        userApi.signup()
        .then(res => {
            console.log(res)
            // call function handler
        });
    }
    updateState = (event) => {
        console.log(event.target)
    }
    onSubmit = (event) => {
        event.preventDefault();
        // document.querySelectorAll('.error').forEach((alert) => alert.remove());
        let formIsValid = true;
        // console.log(event.target.email.value)
        // inputs = document.querySelectorAll('input')
        // console.log(document.querySelectorAll('input'));
        if (!this.checkFormsEmpty())
            return
        // if forms are non-empty
        // validate password
        if (!this.passwordValid(this.state.password)) 
            formIsValid = false;
        // validate email
        if (!formIsValid) {
            return
        }
        else {
            this.register()
        }
    }
    render() {    
        return(
            <form onSubmit={this.onSubmit} className="ui form">
                <div className="two fields">
                    <div className="field error">
                        <label>Email</label>
                        <input onInput={this.updateState} name="email" id="email" type="text" placeholder="Email"/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input onInput={this.updateState} name="password" id="password" type="password"/>
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>First name</label>
                        <input onInput={this.updateState} name="firstName" type="text" placeholder="First Name"/>
                    </div>
                    <div className="field">
                        <label>Last name</label>
                        <input onInput={this.updateState} name="lastName" type="text" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="field">
                    <label>City</label>
                    <input onInput={this.updateState} name="city" type="text" placeholder="City"/>
                </div>
                <button className="ui submit button">Sign Up</button>
            </form>

            // <form onSubmit={this.onSubmit}>
            // <div className="ui icon input" id="search_bar">
            //     <input type="text" onInput={this.onChange} placeholder="Search..."/>
            //     <i className="circular search link icon"></i>
            // </div>
            // </form>
        );
    }
}

export default Signup;