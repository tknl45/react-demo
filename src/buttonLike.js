import React, { Component } from 'react';
class ButtonLike extends Component {
    render() {
      return (
        <div className="button-like-counter">
          <button className="bt" onClick={()=>this.props.onClick()}>Like</button>
        </div>
      );
    }
  }
  
  export default ButtonLike;