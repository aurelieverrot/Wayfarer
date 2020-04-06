import React from 'react';
// import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class PostModal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    // const backdropStyle = {
    //   position: 'fixed',
    //   top: 0,
    //   bottom: 0,
    //   left: 0,
    //   right: 0,
    //   backgroundColor: 'rgba(0,0,0,0.3)',
    //   padding: 50
    // };

    // // The modal "window"
    // const modalStyle = {
    //   backgroundColor: '#fff',
    //   borderRadius: 5,
    //   maxWidth: 500,
    //   minHeight: 300,
    //   margin: '0 auto',
    //   padding: 30
    // };

    return (
      <div className="backdrop">
        <div className="ui modal">
          {this.props.children}

          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

PostModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};







// const PostModal = (
//   <div className="ui dimmer modals visible active">  
//     <div className="ui standard modal visible active">
//       THIS IS SOME TEXT IN THE MODAL // add some UI features here
//     </div>
//   </div>
// );

// function Modal(props) {
//   return ReactDOM.createPortal(PostModal, document.querySelector("#modal"));
// }

export default PostModal;