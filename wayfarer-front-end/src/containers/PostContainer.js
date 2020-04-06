import React from 'react';
import Post from '../components/Post/Post';
import UserApi from '../api/UserApi';
import PostModal from '../components/Post/PostModal'
import $ from 'jquery';

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
        $('.ui.modal').modal('show');
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
            {/* <PostModal onClose={this.toggleModal}>Here's some text</PostModal> */}

            <div class="ui modal">
                <i class="close icon"></i>
                <div class="header">
                  Profile Picture
                </div>
                <div class="image content">
                  <div class="ui medium image">
                  </div>
                  <div class="description">
                    <div class="ui header">We've auto-chosen a profile image for you.</div>
                    <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                  </div>
                </div>
                <div class="actions">
                  <div class="ui black deny button">
                    Nope
                  </div>
                  <div class="ui positive right labeled icon button">
                    Yep, that's me
                    <i class="checkmark icon"></i>
                  </div>
                </div>
            </div>
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