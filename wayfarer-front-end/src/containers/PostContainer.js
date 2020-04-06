import React from 'react';
import Post from '../components/Post/Post';
import UserApi from '../api/UserApi';
import PostModal from '../components/Post/PostModal'

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

        console.log("INSIDE OF THE FORM")
    };

    componentDidUpdate(prevProps, prevState) {
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
            <h2>Posts</h2>            
            <button id="centered-toggle-button" className="ui circular" onClick={e => {this.showModal()}}>+</button>
            <PostModal show={this.state.show} onClose={this.handleClose}/>
            </>
        )
    }
}

export default PostContainer;