import React from 'react';
import Post from '../components/Post/Post';
import UserApi from '../api/UserApi';

class PostContainer extends React.Component {
    state = {
        posts: this.props.posts
    }

    componentDidMount() {
        const pathName = window.location.pathname;
        
        UserApi.postIndex()
        .then(res => {
          
            if (pathName === '/profile') {
                const userPost = res.data.filter((post) => {
                    return post.user === this.props.id
                    
                })
                
                this.setState({
                    posts: userPost
                });
            } else {
                const cityPost = res.data.filter((post) => {
                    return post.city === this.props.cityId
                })
                this.setState({
                    posts: cityPost
                })}
          });
    }

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