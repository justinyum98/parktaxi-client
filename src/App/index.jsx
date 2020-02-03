import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import AboutPage from '../pages/AboutPage';

import './App.css';

const App = () => (
  <Router>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/login" component={LoginPage} />
  </Router>
);

export default App;
