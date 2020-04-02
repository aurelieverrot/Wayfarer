import React from 'react';

class Login extends React.Component {
    render() {    
        return(
            <form className="ui form">
                <div className="two fields">
                    <div className="field">
                        <label>Email</label>
                        <input type="text" placeholder="Email"/>
                        </div>
                        <div className="field">
                        <label>Password</label>
                        <input type="password"/>
                    </div>
                </div>
            <button class="ui submit button">Login</button>
        </form>
        );
    }
}

export default Login;