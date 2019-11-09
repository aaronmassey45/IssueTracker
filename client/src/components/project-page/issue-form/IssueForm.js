import React, { useState } from 'react';
import PropTypes from 'prop-types';

import formFieldsData from 'components/project-page/issue-form/form-fields';
import IssueFormInput from 'components/project-page/issue-form/IssueFormInput';

const INITIAL_VALUES = {
  assigned_to: '',
  created_by: '',
  issue_text: '',
  issue_title: '',
  status_text: '',
};

const IssueForm = ({ submitNewIssue }) => {
  const [inputValues, setInputValues] = useState({ ...INITIAL_VALUES });

  const handleSubmit = e => {
    e.preventDefault();

    submitNewIssue(inputValues);
    setInputValues({ ...INITIAL_VALUES });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="new-issue">
      {formFieldsData.map(({ name, placeholder, rows, required }) => (
        <IssueFormInput
          handleChange={handleChange}
          key={name}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows}
          value={inputValues[name]}
        />
      ))}
      <input type="submit" value="Submit Issue!" className="submitBtn" />
    </form>
  );
};

IssueForm.propTypes = { submitNewIssue: PropTypes.func.isRequired };

export default IssueForm;
