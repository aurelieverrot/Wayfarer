import React from 'react';
import Post from '../components/Post/Post';

class PostContainer extends React.Component {
    state = {
        posts: this.props.posts
    }

    // componentDidMount() {
    //     UserApi.postIndex()
    //     .then(res => {
    //         this.setState({
    //             posts: res
    //         })
    //     })
    // }

    render() {
        let posts = this.state.posts;

        return(
            <div className="ui container segment">
                <h1>Posts</h1>
                {posts && posts.map(post => {
                    return <Post post={post} key={post._id} />    
                })}
            </div>
        )
    }
}

export default PostContainer;