import React, { Component } from 'react';
import './App.css';

import Header from './header.js';
import Counter from './counter.js';
import ButtonLike from './buttonLike.js';

class App extends Component {
  constructor(){
    super();
    this.state={likes:0};   
    this.like =  this.like.bind(this);
  }

  like(){
    console.log("+1");
    this.setState({likes:this.state.likes+1});  
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Counter likes={this.state.likes}/>
        <ButtonLike onClick={()=>this.like()}/>        
      </div>
    );
  }
}

export default App;
