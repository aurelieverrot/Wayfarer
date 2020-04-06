import React from 'react';
import './Post.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom'
class Post extends React.Component {

    render() {
        const pathName = window.location.pathname;
        let cityName = this.props.post.city.name
        cityName = cityName.replace(/\s+/g, '-').toLowerCase();
        // profile posts
        if (pathName === '/profile') {
            return (
                <div>
                    <Link to={{
                    pathname: `/cities/${cityName}`,
                   }}>{this.props.post.title}</Link>
                </div> 
            )
        }
        // city posts
        let extraContent = []
        if (this.props.post.user._id === this.props.user._id) {
            extraContent.push(<><button class="ui primary button">
            Update
          </button>
          <button class="ui button">
            Delete
          </button></>);
        }
        return(
            // <div>
            //     <h2>{this.props.post.title}</h2>
            // </div>
            <div class="card">
            <div class="content">
            <img class="right floated mini ui image" src={this.props.post.user.photo}/>
            <div class="header">
                {this.props.post.title}
            </div>
            <div class="meta">
                {this.props.post.user.firstName + " " + this.props.post.user.lastName}
            </div>
            <div class="description">
                {this.props.post.body}
            </div>
            </div>
            <div class="extra content">
                {extraContent}
            </div>
        </div>
        )
    }
}

export default withRouter(Post);
