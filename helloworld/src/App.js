import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Intro from './Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p>Hey There!!</p>
        <Intro/>
      </div>
    );
  }
}


export default App;
