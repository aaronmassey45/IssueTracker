import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './Homepage';
import Project from './Project';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/issues/:projectName" component={Project} />
          <Route path="/" component={HomePage} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
