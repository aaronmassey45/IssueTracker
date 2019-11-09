import React from 'react';
import PropTypes from 'prop-types';

const Issue = ({
  _id,
  assigned_to,
  closeIssue,
  created_by,
  created_on,
  deleteIssue,
  issue_text,
  issue_title,
  open,
  status_text,
  updated_on,
}) => (
  <div className={`issue ${open ? 'open' : 'closed'}`}>
    <p className="small-text">id: {_id}</p>
    <h3>
      {issue_title} - ({open ? 'open' : 'closed'})
    </h3>
    <br />
    <div>{issue_text}</div>
    <div>{status_text}</div>
    <br />
    <p className="small-text">
      <b>Created by:</b> {created_by} <b>Assigned to:</b> {assigned_to}
    </p>
    <p className="small-text">
      <b>Created on:</b> {created_on} <b>Last updated:</b>{' '}
      {updated_on ? updated_on : 'Never'}
    </p>
    <p className="small-text">
      <span className="clickable" onClick={() => closeIssue(_id)}>
        close?
      </span>{' '}
      <span className="clickable" onClick={() => deleteIssue(_id)}>
        delete?
      </span>
    </p>
  </div>
);

Issue.defaultProps = {
  updated_on: null,
};

Issue.propTypes = {
  _id: PropTypes.string.isRequired,
  assigned_to: PropTypes.string.isRequired,
  closeIssue: PropTypes.func.isRequired,
  created_by: PropTypes.string.isRequired,
  created_on: PropTypes.string.isRequired,
  deleteIssue: PropTypes.func.isRequired,
  issue_text: PropTypes.string.isRequired,
  issue_title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  status_text: PropTypes.string.isRequired,
  updated_on: PropTypes.string,
};

export default Issue;
