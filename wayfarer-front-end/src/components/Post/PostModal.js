import React from 'react';
import './PostModal.css'

class PostModal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if(!this.props.show){
        return null;
    };
    return (
      <div class="modal" id="modal">
        <div id="fields">
          <form> 
            <input id="title-field" type="text" placeholder="Title"/>
            <textarea id="body-field" rows="4" cols="50">
            </textarea>

            <div class="actions">
              <button onClick={() => {this.onClose()}}> Close </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default PostModal;