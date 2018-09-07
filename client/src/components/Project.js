import React, { Component } from 'react';
import axios from 'axios';

import Issue from './Issue';
import IssueForm from './IssueForm';

export const { Provider, Consumer } = React.createContext();

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.submitNewIssue = async values => {
      console.log('called');
      await axios.post(`/api/issues/${props.match.params.projectName}`, {
        ...values,
      });
      this.getProjectData();
    };

    this.state = {
      issues: [],
      submitNewIssue: this.submitNewIssue,
    };
  }

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

  deleteIssue = async id => {
    await axios.delete(`/api/issues/${this.props.match.params.projectName}`, {
      data: { id },
    });
    this.getProjectData();
  };

  renderIssues = () => {
    return this.state.issues.map(issue => (
      <Issue
        key={issue._id}
        {...issue}
        closeIssue={this.closeIssue}
        deleteIssue={this.deleteIssue}
      />
    ));
  };

  render() {
    return (
      <Provider value={this.state}>
        <div className="container">
          <h1>All issues for: {this.props.match.params.projectName}</h1>
          <IssueForm />
          {!this.state.issues ? <h3>Loading...</h3> : this.renderIssues()}
        </div>
      </Provider>
    );
  }
}
