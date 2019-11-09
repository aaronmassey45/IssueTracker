import React from 'react';
import PropTypes from 'prop-types';

const IssueFormInput = ({
  handleChange,
  name,
  placeholder,
  required,
  rows,
  value,
}) => (
  <textarea
    className={name}
    name={name}
    onChange={handleChange}
    placeholder={placeholder}
    required={required}
    rows={rows}
    value={value}
  />
);

IssueFormInput.defaultProps = {
  rows: 1,
};

IssueFormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  rows: PropTypes.number,
  value: PropTypes.string.isRequired,
};

export default IssueFormInput;
