import React, { Component } from 'react';
import axios from 'axios';

import Issue from './Issue';

export default class Project extends Component {
  state = {
    issues: [],
  };

  componentDidMount = () => {
    this.getProjectData();
  };

  getProjectData = async () => {
    const res = await axios.get(
      `/api/issues/${this.props.match.params.projectName}`
    );
    const issues = res.data;
    this.setState({ issues });
  };

  closeIssue = async id => {
    await axios.put(`/api/issues/${this.props.match.params.projectName}`, {
      id,
      open: false,
    });
    this.getProjectData();
  };

  renderIssues = () => {
    return this.state.issues.map(issue => (
      <Issue key={issue._id} {...issue} closeIssue={this.closeIssue} />
    ));
  };

  render() {
    return (
      <div className="container">
        <h1>All issues for: {this.props.match.params.projectName}</h1>
        {!this.state.issues ? <h3>Loading...</h3> : this.renderIssues()}
      </div>
    );
  }
}
