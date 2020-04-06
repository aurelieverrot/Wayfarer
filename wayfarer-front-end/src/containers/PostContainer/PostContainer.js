import React from 'react';
import Post from '../../components/Post/Post';
import UserApi from '../../api/UserApi';
import PostModal from '../../components/Post/PostModal'
import './PostContainer.css';

class PostContainer extends React.Component {
    state = {
        posts: this.props.posts,
        pathName: "",
        show: false
    }

    showModal = e => {
        this.setState({
          show: !this.state.show
        });
    };

    handleClose = (e) => {
        this.setState({
            show: !this.state.show
        });
    };

    updatePosts = () => {
        UserApi.postIndex()
        .then(res => {
            let cityPost = res.data.filter((post) => {
                return post.city._id === this.props.cityId
            })
            cityPost.reverse()
            this.setState({
                posts: cityPost,
            })}
      );
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            // post index
            const pathName = window.location.pathname;
        
        UserApi.postIndex()
        .then(res => {
          
            if (pathName === '/profile') {
                let userPost = res.data.filter((post) => {
                    return post.user._id === this.props.id
                    
                })
                userPost.reverse();
                console.log(userPost);
                this.setState({
                    posts: userPost,
                    pathName: pathName
                });
            } else {
                // /cities
                let cityPost = res.data.filter((post) => {
                    return post.city._id === this.props.cityId
                })
                cityPost.reverse();
                console.log("city posts:",cityPost);
                this.setState({
                    posts: cityPost,
                    pathName: pathName
                })}
          });

        };
    };

    render() {
        let posts = this.state.posts;
        if (this.state.pathName === '/profile') {
            return(
                <div className="ui container segment">
                    <h1>Posts</h1>
                    {posts && posts.map(post => {
                        return <Post post={post} key={post._id} />    
                    })}
                </div>
            );
        };

        return (
            <>
            <h2 className="cityPostHeader">Posts</h2>            
            <button id="centered-toggle-button" className="ui button" onClick={e => {this.showModal()}}>Add Post</button>
            <PostModal show={this.state.show} cityId={this.props.cityId} user={this.props.user} onClose={this.handleClose} update={this.updatePosts}/>
            <div class="ui cards">
                {posts && posts.map(post => {
                    return <Post post={post} user={this.props.user} update={this.updatePosts} key={post._id} />
                })}
                </div>
            </>
        )
    }
}

export default PostContainer;