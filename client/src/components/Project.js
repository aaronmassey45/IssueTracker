import React, { Component } from 'react';
import axios from 'axios';

export default class Project extends Component {
  state = {
    issues: [],
  };

  componentDidMount = async () => {
    const res = await axios.get(
      `/api/issues/${this.props.match.params.projectName}`
    );
    const issues = res.data;
    console.log(issues);
  };

  render() {
    return (
      <div>
        <h1>Project Page</h1>
      </div>
    );
  }
}
