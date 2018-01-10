import React, { Component } from 'react';
import './App.css';

import Header from './header.js';
import Counter from './counter.js';
import ButtonLike from './buttonLike.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
        <ButtonLike/>        
      </div>
    );
  }
}

export default App;
