import React, { Component } from 'react';
import axios from 'axios';

import Issue from 'components/Issue';
import IssueForm from 'components/issue-form';

export default class Project extends Component {
  state = {
    issues: [],
    loading: true,
  };

  componentDidMount = () => {
    this.getProjectData();
  };

  getProjectData = async () => {
    const res = await axios.get(
      `/api/issues/${this.props.match.params.projectName}`
    );
    const issues = res.data;
    this.setState({ issues, loading: false });
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

  submitNewIssue = async values => {
    await axios.post(`/api/issues/${this.props.match.params.projectName}`, {
      ...values,
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
    const { loading, issues } = this.state;
    return (
      <div className="container">
        <h1>All issues for: {this.props.match.params.projectName}</h1>
        <IssueForm submitNewIssue={this.submitNewIssue} />
        <hr />
        {loading && <h3>Loading...</h3>}
        {!loading && issues.length === 0 ? (
          <h1>There are no issues for this project! Submit a new one!</h1>
        ) : (
          this.renderIssues()
        )}
      </div>
    );
  }
}
