import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Components life cycle</h2>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Body/>
      </div>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      r: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber() {
    //console.log("random number called");
    this.setState({r: Math.floor(Math.random()*10) })
  }

  render() {
    return (
      <div>
        <p className="App-intro">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}> Random Number </button>
        <Numbers myNumber={this.state.r}/>
      </div>
    );
  }
}

class Numbers extends Component {

  componentDidMount() {
    console.log("componentDidMount called here");
  }

  componentWillMount() {
    console.log("componentWillMount called here");
  }

  componentWillReceive(newProps) {
    console.log("componentWillReceive called");
  }

  shouldComponentUpdate(newProps, nextState) {
    console.log("Called should component Update");
    return true;
  }

  componentWillUpdate(newProps, nextState) {
    console.log("Called component Will Update");
  }

  componentDidUpdate(newProps, nextState) {
    console.log("Called component Did Update");
  }

  componentWillUnmount() {
    console.log("Called componentWill unmount");
  }

  render() {
    return (
      <div>
        <br/>
        {this.props.myNumber}
      </div>
    );
  }
}


export default App;
