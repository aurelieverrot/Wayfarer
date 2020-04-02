import React from 'react';
import UserApi from '../../api/UserApi';
// import ProfileForm from './ProfileForm';
import './Profile.css';
import PostContainer from '../../containers/PostContainer';

class Profile extends React.Component {
    state = {
        user: {
            firstName: 'Seal',
            lastName: 'Rose',
            city: 'San Francisco',
            createdAt: '12-12-20',
            posts: ['i like to eat bananas'],
            photo: 'https://www.wwf.org.uk/sites/default/files/styles/hero_s/public/2016-12/Original_WW22791.jpg?h=43f95bd6&itok=KWWNIJuV'
        },
        formStyle: {
            display: 'none',
        }
    }

    toggleBodyForm = () => {
        this.state.formStyle.display === 'block'
        ? this.setState({ formStyle: {display: 'none' } })
        : this.setState({ formStyle: {display: 'block'} });
    }

    componentDidMount() {
        UserApi.show()
        .then(res => {
            this.setState({
                user: res
            })
        })
    }

    updateProfile = user => {
        const isUpdatedProfile = user => {
            return user._id === user._id;
        };

        UserApi.update(user)
            .then((res) => {
                let users = this.state.users;
                users.find(isUpdatedProfile)
                this.setState({ users : users })
            })
    }

    render(){
            // console.log({users})
        return(
        <div className="ui container segment" id="container-segment">
            <img className="ui centered medium image" id="circular-image" src={this.state.user.photo}/>
            <div className="ui form">
                <div className="fields">
                    <div className="field">
                    <label>First name:</label>
                    <input type="text" value={this.state.user.firstName} placeholder={this.state.user.firstName}/>
                    </div>
                    <div className="field">
                    <label>Last name:</label>
                    <input type="text" value={this.state.user.lastName} placeholder={this.state.user.lastName}/>
                    </div>
                    <div className="field">
                    <label>City:</label>
                    <input type="text" value={this.state.user.city} placeholder={this.state.user.city}/>
                    </div>
                </div>
                <button>Submit edits to Profile</button>
            </div>
            <p>Join Date: {this.state.user.createdAt}</p>
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



