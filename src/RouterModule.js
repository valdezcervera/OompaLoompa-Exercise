/* eslint-disable arrow-body-style */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from './App';
import LoompaDetailsView from './components/LoompaDetailsView';

const RouterModule = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/details/:id" exact component={LoompaDetailsView} />
      </Switch>
    </Router>
  );
};

export default RouterModule;
