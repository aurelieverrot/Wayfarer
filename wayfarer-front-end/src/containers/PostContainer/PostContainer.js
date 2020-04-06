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
        console.log("Indexing all posts");
        UserApi.postIndex()
        .then(res => {
            const cityPost = res.data.filter((post) => {
                return post.city._id === this.props.cityId
            })
            console.log("city posts:",cityPost);
            this.setState({
                posts: cityPost,
            })}
      );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState, this.state);
        if (prevProps !== this.props) {
            // post index
            console.log('Index all posts')
            const pathName = window.location.pathname;
        
        UserApi.postIndex()
        .then(res => {
          
            if (pathName === '/profile') {
                const userPost = res.data.filter((post) => {
                    return post.user._id === this.props.id
                    
                })
                console.log(userPost);
                this.setState({
                    posts: userPost,
                    pathName: pathName
                });
            } else {
                // /cities
                const cityPost = res.data.filter((post) => {
                    return post.city._id === this.props.cityId
                })
                console.log("city posts:",cityPost);
                this.setState({
                    posts: cityPost,
                    pathName: pathName
                })}
          });
        };
    };

    componentDidMount() {
    };

    render() {
        let posts = this.state.posts;
        // console.log(this.props)
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
                    return <Post post={post} user={this.props.user} key={post._id} />
                })}
                </div>
            </>
        )
    }
}

export default PostContainer;