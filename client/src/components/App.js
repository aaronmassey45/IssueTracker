import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from 'components/home-page';
import Project from 'components/Project';
import Navbar from 'components/Navbar';
import UserStories from 'components/user-stories';
import 'App.css';

const App = () => (
  <Router>
    <>
      <Navbar />
      <Switch>
        <Route path="/issues/:projectName" component={Project} />
        <Route path="/user-stories" component={UserStories} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </>
  </Router>
);

export default App;
