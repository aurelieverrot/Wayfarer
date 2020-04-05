import React from 'react';
import './Post.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom'
class Post extends React.Component {

    // componentDidMount() {

    // }
    render() {
        const pathName = window.location.pathname;
        console.log(pathName);
        if (pathName === '/profile') {
            return (
                <div>
                    <Link to={{
                    pathname: `/cities/${this.props.post.city._id}`,
                   }}>{this.props.post.title}</Link>
                </div> 
            )
        }
        console.log("rendering city posts")
        return(
            <div>
                <a>{this.props.post.title}</a>
            </div>
        )
    }
}

export default withRouter(Post);
