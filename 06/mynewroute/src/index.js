import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './Home';
import Contact from './Contact';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render(
  <Router>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact-me</Link></li>
    </ul>
    <hr />

    <Route exact path="/" component={Home} />
    <Route path="/contact" component={Contact} />


  </div>
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
