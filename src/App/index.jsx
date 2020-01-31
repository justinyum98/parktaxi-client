import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import About from '../pages/About';

import './App.css';

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={LoginPage} />
  </Router>
);

export default App;
