import React from 'react';

import ProjectSearchbar from 'components/ProjectSearchbar';

const HomePage = () => (
  <div className="container homepage">
    <h1>Issue Tracker</h1>
    <h3>
      <a
        href="https://learn.freecodecamp.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        freeCodeCamp
      </a>{' '}
      Information Security and Quality Assurance Project
    </h3>
    <ProjectSearchbar />
    <div className="user_stories">
      <h3>User Stories</h3>
      <ol>
        <li>Prevent cross site scripting(XSS attack).</li>
        <li>
          I can <b>POST</b>{' '}
          <code>
            /api/issues/
            {'{projectname}'}
          </code>{' '}
          with form data containing required issue_title, issue_text,
          created_by, and optional assigned_to and status_text. The object saved
          (and returned) will include all of those fields (blank for optional no
          input) and also include created_on(date/time), updated_on(date/time),
          open(boolean, true for open, false for closed), and _id.
        </li>
        <li>
          The object saved (and returned) will include all of those fields
          (blank for optional no input) and also include created_on(date/time),
          updated_on(date/time), open(boolean, true for open, false for closed),
          and _id.
        </li>
        <li>
          I can <b>PUT</b>{' '}
          <code>
            /api/issues/
            {'{projectname}'}
          </code>{' '}
          with a _id and any fields in the object with a value to object said
          object. Returned will be &apos;successfully updated&apos; or
          &apos;could not update &apos;+_id. This should always update
          updated_on. If no fields are sent return &apos;no updated field
          sent&apos;.
        </li>
        <li>
          I can <b>DELETE</b>{' '}
          <code>
            /api/issues/
            {'{projectname}'}
          </code>{' '}
          with a _id to completely delete an issue. If no _id is sent return
          &apos;_id error&apos;, success: &apos;deleted &apos;+_id, failed:
          &apos;could not delete &apos;+_id.
        </li>
        <li>
          I can <b>GET</b>{' '}
          <code>
            /api/issues/
            {'{projectname}'}
          </code>{' '}
          for an array of all issues on that specific project with all the
          information for each issue as was returned when posted.
        </li>
        <li>
          I can filter my get request by also passing along any field and value
          in the query(ie.{' '}
          <code>
            /api/issues/
            {'{projectname}'}
            ?open=false
          </code>
          ). I can pass along as many fields/values as I want.
        </li>
        <li>All 11 functional tests are complete and passing.</li>
      </ol>
    </div>
  </div>
);

export default HomePage;
