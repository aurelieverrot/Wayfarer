import React from 'react';
import './Signup.css';
class Signup extends React.Component {

    onSubmit = (event) => {
        event.preventDefault();
        console.log(event.target)

    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {    
        return(
            <form onSubmit={this.onSubmit} className="ui form">
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
                <div className="two fields">
                    <div className="field">
                        <label>First name</label>
                        <input type="text" placeholder="First Name"/>
                    </div>
                    <div className="field">
                        <label>Last name</label>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="field">
                    <label>City</label>
                    <input type="text" placeholder="City"/>
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