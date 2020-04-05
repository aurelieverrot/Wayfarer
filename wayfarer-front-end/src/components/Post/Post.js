import React from 'react';
import './Post.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom'
class Post extends React.Component {

    // componentDidMount() {

    // }
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
        return(
            <div>
                <a>{this.props.post.title}</a>
            </div>
        )
    }
}

export default withRouter(Post);
