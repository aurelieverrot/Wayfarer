import React from 'react';
import './Post.css';

class Post extends React.Component {
    render() {
      console.log(this.props)
        return(
            <div>
                <a>{this.props.post.title}</a>
            </div>
        )
    }
}

export default Post;
