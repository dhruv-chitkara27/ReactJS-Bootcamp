import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Timer App built in React JS</h2>
        <Timer start={Date.now()}/>
        </header>
      </div>
    );
  }
}

export default App;
