import React from 'react';
// import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class PostModal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div></div>
      // <div class="ui modal">
      //   <i class="close icon"></i>
      //   <div class="header">
      //     Profile Picture
      //   </div>
      //   <div class="image content">
      //     <div class="ui medium image">
      //     </div>
      //     <div class="description">
      //       <div class="ui header">We've auto-chosen a profile image for you.</div>
      //       <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
      //       <p>Is it okay to use this photo?</p>
      //     </div>
      //   </div>
      //   <div class="actions">
      //     <div class="ui black deny button">
      //       Nope
      //     </div>
      //     <div class="ui positive right labeled icon button">
      //       Yep, that's me
      //       <i class="checkmark icon"></i>
      //     </div>
      //   </div>
      // </div>
    );
  }
}


export default PostModal;