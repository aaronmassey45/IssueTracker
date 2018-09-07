import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './Homepage';
import Project from './Project';
import Navbar from './Navbar';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route path="/issues/:projectName" component={Project} />
            <Route path="/" component={HomePage} exact />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
