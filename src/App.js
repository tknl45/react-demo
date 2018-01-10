import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>React Example</h1>
        </header>
        <div className="counter">
          <p>Likes : 0</p>
        </div>
        <div className="button-like-counter">
          <button className="bt">Like</button>
        </div>        
      </div>
    );
  }
}

export default App;
