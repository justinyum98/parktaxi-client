import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import AboutPage from '../pages/AboutPage';
import RegisterPage from '../pages/RegisterPage';

import './App.css';

const App = () => (
  <Router>
    <PrivateRoute exact path="/" component={HomePage} />
    <PrivateRoute path="/about" component={AboutPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
  </Router>
);

export default App;
