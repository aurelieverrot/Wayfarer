import React from 'react';
import UserApi from '../../api/UserApi';
// import ProfileForm from './ProfileForm';
import './Profile.css';
import PostContainer from '../../containers/PostContainer';

class Profile extends React.Component {
    state = {
        user: {
            
        },
<<<<<<< HEAD
        value: ''
    }

    // form handling
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.value)
        event.preventDefault();
=======
        formStyle: {
            display: 'none',
        },
        messageStyle: {
            display: 'none',
        }
    }
    validateFields = () => {
        // Puts state keys in keys array
        let keys = ['firstName','lastName','city']
        let valid = true
        keys.map(key => {
            let field = document.getElementById(key);
            field.classList.remove('error');
            if (field.value == '') {
                valid = false;
                // add class error to fields
                field.classList.add('error');
            }
        })
        return valid;
    }
    toggleBodyForm = () => {
        this.state.formStyle.display === 'block'
        ? this.setState({ formStyle: {display: 'none' } })
        : this.setState({ formStyle: {display: 'block'} });
>>>>>>> 4d37b4b7fcee23e4cc983687227fadceaeab50b7
    }
    toggleFormMessage = () => {
        this.state.messageStyle.display === 'block'
        ? this.setState({ messageStyle: {display: 'none' } })
        : this.setState({ messageStyle: {display: 'block'} });
    }
    submit = (event) => {
        event.preventDefault();
        if (this.validateFields())
            this.updateProfile({
                _id: this.state.user._id,
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                city: document.getElementById('city').value
            })
    }
    componentDidMount() {
        this.setState({
            user: this.props.currentUser
        })

        UserApi.show(this.props.currentUser._id)
        .then(res => {
            this.setState({
                user: res.data
            })
        })
    }

    changeField = (event) => {
        if (this.state.formStyle.display == "none") {
            this.toggleBodyForm()
            if (this.state.messageStyle.display == "block")
                this.toggleFormMessage();

        }
    }

    updateProfile = user => {
        const isUpdatedProfile = user => {
            return user._id === user._id;
        };
        UserApi.update(user)
            .then((res) => {
                this.toggleBodyForm();
                this.toggleFormMessage();
                this.props.loggedIn(res.data);
                this.setState({ user : res.data});
            })
    }

    render(){
        let date = new Date(this.state.user.createdAt);
        return(
        <div className="ui container segment" id="container-segment">
            <img className="ui centered medium image" id="circular-image" src={this.state.user.photo}/>
<<<<<<< HEAD
            <div className="ui form">
                <div className="fields" onSubmit={this.handleSubmit}>
                    <div className="field">
                    <label>First name:</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.state.user.firstName}/>
                    </div>
                    <div className="field">
                    <label>Last name:</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.state.user.lastName}/>
                    </div>
                    <div className="field">
                    <label>City:</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.state.user.city}/>
=======
            <form className="ui form" onSubmit={this.submit}>
                <div className="fields" style={{flexDirection: "column"}}>
                    <div className="field">
                    <label>First name:</label>
                    <input name="firstName" id="firstName" type="text" onInput={this.changeField} defaultValue={this.props.currentUser.firstName} placeholder={this.state.user.firstName}/>
                    </div>
                    <div className="field">
                    <label>Last name:</label>
                    <input name="lastName" id="lastName" type="text" onInput={this.changeField} defaultValue={this.state.user.lastName} placeholder={this.state.user.lastName}/>
                    </div>
                    <div className="field">
                    <label>City:</label>
                    <input name="city" id="city" type="text" onInput={this.changeField} defaultValue={this.state.user.city} placeholder={this.state.user.city}/>
                    </div>
                    <div className="field">
                        <label>joined:</label>
                        <input value={date.toLocaleDateString()}/>
>>>>>>> 4d37b4b7fcee23e4cc983687227fadceaeab50b7
                    </div>
                </div>
                <div class="ui success message" style={this.state.messageStyle}>
                <div class="header">Profile Updated!</div>
                <p>Your profile has successfully been updated.</p>
            </div>
                <button className="ui submit button" style={this.state.formStyle}>Update Profile</button>
            </form>
            {/* <span
                className='edit'
                onClick={this.toggleBodyForm}>
                    Edit Your Profile
            </span>
            <ProfileForm
                    user={this.state.user}
                    style={this.state.formStyle}
                    autoFocus={true}
                    buttonName="Update Your Profile"
                    updateProfile={this.updateProfile}
                    toggleBodyForm={this.toggleBodyForm} /> */}
        <PostContainer posts={this.state.user.posts}/>
        </div>
        )
    }
}
export default Profile;



