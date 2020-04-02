import React from 'react';
import './Profile.css';

class ProfileForm extends React.Component {
    state = {
        user: '',
    }

    onChange = (event) => {
        this.setState({
            user: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const user = this.props.user;
        user = this.state.user;
        this.props.updateProfile(user);
        this.setState({ user: '' });
        this.props.toggleBodyForm();
    }

    render() {
        return(
            <div style={this.props.style} className="updProfileForm">
                <form onSubmit={ this.onSubmit }>
                    <input
                        autoFocus={this.props.autoFocus}
                        onChange={ this.onChange }
                        type='text'
                        value={this.state.user.firstName} />
                        <input
                        autoFocus={this.props.autoFocus}
                        onChange={ this.onChange }
                        type='text'
                        value={this.state.user.lastname} />
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default ProfileForm;