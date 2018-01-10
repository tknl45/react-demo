import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  likes:PropTypes.number
}

const defaultProps = {
  likes:0
}


export default class Counter extends Component {
    render() {
      return (
        <div className="counter">
          <p>Likes : {this.props.likes}</p>
        </div>
      );
    }
  }



Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;