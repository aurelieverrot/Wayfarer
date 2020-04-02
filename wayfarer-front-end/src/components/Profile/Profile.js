import React from 'react';
import UserApi from '../../api/UserApi';
import ProfileForm from './ProfileForm';
import './Profile.css';

class Profile extends React.Component {
    state = {
        users: [],
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
        console.log(this.props.currentUser)
        // UserApi.show()
        // .then(res => {
        //     this.setState({
        //         user: res
        //     })
        // })
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
        <div className="ui segment">
            <img className="ui centered medium circular image" src="https://i.insider.com/5e4c641b69692c00533ecf1b?width=1100&format=jpeg&auto=webp"/>
            <div className="ui horizontal divider"></div>
            <p>First Name: {this.props.firstName}</p>
            <p>Last Name: {this.props.lastname}</p>
            <p>Join Date: {this.props.createdAt}</p>
            {/* <p><PostContainer/></p> */}
            <span
                className='edit'
                onClick={this.toggleBodyForm}>
                    Edit Your Profile
            </span>
            <ProfileForm
                    user={this.props.user}
                    style={this.state.formStyle}
                    autoFocus={true}
                    buttonName="Update Your Profile"
                    updateProfile={this.updateProfile}
                    toggleBodyForm={this.toggleBodyForm} />
        </div>
        )
    }
}
export default Profile;


