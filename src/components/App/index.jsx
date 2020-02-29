import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import setUpApolloClient from '../../graphql';
import PrivateRoute from '../routing/PrivateRoute';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import AboutPage from '../../pages/AboutPage';
import RegisterPage from '../../pages/RegisterPage';

import './App.css';

const client = setUpApolloClient();

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <PrivateRoute exact path="/" component={HomePage} />
      <PrivateRoute path="/about" component={AboutPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </Router>
  </ApolloProvider>
);

export default App;
