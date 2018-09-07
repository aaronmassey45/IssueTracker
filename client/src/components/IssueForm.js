import React, { Component } from 'react';

const INITIAL_STATE = {
  issue_title: {
    value: '',
    placeholder: '*Title',
    required: true,
  },
  issue_text: {
    value: '',
    placeholder: '*Text',
    required: true,
  },
  created_by: {
    value: '',
    placeholder: '*Created by',
    required: true,
  },
  assigned_to: {
    value: '',
    placeholder: 'Assigned to',
    required: false,
  },
  status_text: {
    value: '',
    placeholder: 'Status text',
    required: false,
  },
};

export default class IssueForm extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();

    const values = {
      issue_text: this.state.issue_text.value,
      issue_title: this.state.issue_title.value,
      created_by: this.state.created_by.value,
      status_text: this.state.status_text.value,
      assigned_to: this.state.assigned_to.value,
    };

    this.props.submitNewIssue(values);
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = (e, issue) => {
    this.setState({
      ...this.state,
      [issue]: { ...this.state[issue], value: e.target.value },
    });
  };

  renderInputs = () => {
    return Object.keys(this.state).map(issue => {
      return (
        <textarea
          className={issue}
          key={issue}
          onChange={e => this.handleChange(e, issue)}
          placeholder={this.state[issue].placeholder}
          required={this.state[issue].required}
          rows={issue === 'issue_text' ? '10' : '1'}
          value={this.state[issue].value}
        />
      );
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="new-issue">
        {this.renderInputs()}
        <input type="submit" value="Submit Issue!" className="submitBtn" />
      </form>
    );
  }
}
