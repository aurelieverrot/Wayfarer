import React from 'react';
import './Post.css';

class Post extends React.Component {
    render() {
        return(
            <div>
                <a>{this.props.post}</a>
            </div>
        )
    }
}

export default Post;
