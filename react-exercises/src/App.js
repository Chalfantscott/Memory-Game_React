import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import RenderingState from './RenderingState.js';
import Poker from './Poker.js';
import EX4 from './ex4.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <RenderingState />
          <hr/>
          <Counter />
          <hr/>
          <Poker />
          <hr/>
          <EX4 />
        </div>
      </div>
    );
  }
}

export default App;
