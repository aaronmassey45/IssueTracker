import React from 'react';

export default ({
  assigned_to,
  status_text,
  created_on,
  open,
  _id,
  issue_title,
  issue_text,
  created_by,
  updated_on,
  closeIssue,
}) => {
  return (
    <div className={`issue ${open ? 'open' : 'closed'}`}>
      <p className="small-text">id: {_id}</p>
      <h3>
        {issue_title} - ({open ? 'open' : 'closed'})
      </h3>
      <br />
      <div>{issue_text}</div>
      <br />
      <p className="small-text">
        <b>Created by:</b> {created_by} <b>Assigned to:</b> {assigned_to}
      </p>
      <p className="small-text">
        <b>Created on:</b> {created_on} <b>Last updated:</b> {updated_on}
      </p>
      <p className="small-text">
        <span className="clickable" onClick={() => closeIssue(_id)}>
          close?
        </span>{' '}
        <span className="clickable">delete?</span>
      </p>
    </div>
  );
};
