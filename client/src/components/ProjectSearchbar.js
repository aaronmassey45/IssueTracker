import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ProjectSearch extends Component {
  state = { searchTerm: '' };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/issues/${this.state.searchTerm}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          placeholder="Search for a issue!"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default withRouter(ProjectSearch);
