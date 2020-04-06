import React from 'react';
import './Post.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import DeleteModal from './DeleteModal';
class Post extends React.Component {
  state = {
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

    delete = () => {
      this.showModal()
    }

    render() {
        const pathName = window.location.pathname;
        let cityName = this.props.post.city.name
        cityName = cityName.replace(/\s+/g, '-').toLowerCase();
        // profile posts
        if (pathName === '/profile') {
            return (
                <div>
                    <Link to={{
                    pathname: `/cities/${cityName}`,
                   }}>{this.props.post.title}</Link>
                </div> 
            )
        }
        // city posts
        let extraContent = []
        if (this.props.post.user._id === this.props.user._id) {
            extraContent.push(<><button className="ui primary button">
            Update
          </button>
          <button className="ui button" onClick={this.delete}>
            Delete
          </button></>);
        }
        return(
            // <div>
            //     <h2>{this.props.post.title}</h2>
            // </div>
            <div className="card">
              <DeleteModal show={this.state.show} post={this.props.post} onClose={this.handleClose} update={this.props.update}/>
              <div className="content">
              <img className="right floated mini ui image" src={this.props.post.user.photo}/>
              <div className="header">
                  {this.props.post.title}
              </div>
              <div className="meta">
                  {this.props.post.user.firstName + " " + this.props.post.user.lastName}
              </div>
              <div className="description">
                  {this.props.post.body}
              </div>
            </div>
            <div className="extra content">
                {extraContent}
            </div>
        </div>
        )
    }
}

export default withRouter(Post);
