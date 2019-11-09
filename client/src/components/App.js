import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

import HomePage from 'components/home-page';
import Project from 'components/project-page';
import Navbar from 'components/navbar';
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
