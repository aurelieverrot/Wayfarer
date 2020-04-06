import React from 'react';
import Post from '../components/Post/Post';
import UserApi from '../api/UserApi';
import PostModal from '../components/Post/PostModal'

class PostContainer extends React.Component {
    state = {
        posts: this.props.posts,
        pathName: "",
        isOpen: false
    }

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
        }
    }

    componentDidMount() {
        // const pathName = window.location.pathname;
        
        // UserApi.postIndex()
        // .then(res => {
          
        //     if (pathName === '/profile') {
        //         const userPost = res.data.filter((post) => {
        //             return post.user === this.props.id
                    
        //         })
                
        //         this.setState({
        //             posts: userPost
        //         });
        //     } else {
        //         // /cities
        //         const cityPost = res.data.filter((post) => {
        //             return post.city === this.props.cityId
        //         })
        //         console.log("city posts:",cityPost);
        //         this.setState({
        //             posts: cityPost
        //         })}
        //   });
    }

    toggleModal = () => {
        console.log(this.state)
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

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
            )
        }
        return (
            <>
            <h2>Posts</h2>            
            <button className="ui circular" onClick={this.toggleModal}>+</button>
            <div className="modal">
            <PostModal show={this.state.isOpen} onClose={this.toggleModal}>Here's some text</PostModal>
            </div>
            <div className="ui cards">
                {posts && posts.map(post => {
                    return <Post post={post} key={post._id} />
                })}
            </div>
            </>
        )
    }
}

export default PostContainer;