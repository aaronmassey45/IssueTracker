import React, { useEffect } from 'react';

import Issue from 'components/Issue';
import IssueForm from 'components/project-page/issue-form';
import useAPI from 'custom-hooks/useAPI';

const Project = () => {
  const {
    issues,
    loading,
    getProjectData,
    submitNewIssue,
    closeIssue,
    deleteIssue,
    projectName,
  } = useAPI();

  useEffect(() => {
    getProjectData();
  }, [getProjectData]);

  return (
    <div className="container">
      <h1>All issues for: {projectName}</h1>
      <IssueForm submitNewIssue={submitNewIssue} />
      <hr />
      {loading && <h3>Loading...</h3>}
      {!loading && issues.length === 0 ? (
        <h1>There are no issues for this project! Submit a new one!</h1>
      ) : (
        issues.map(issue => (
          <Issue
            key={issue._id}
            {...issue}
            closeIssue={closeIssue}
            deleteIssue={deleteIssue}
          />
        ))
      )}
    </div>
  );
};

export default Project;
