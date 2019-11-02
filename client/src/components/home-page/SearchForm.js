import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ProjectSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasError, setHasError] = useState(false);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    if (searchTerm) {
      history.push(`/issues/${searchTerm}`);
    } else {
      setHasError(true);
    }
  };

  const handleChange = e => {
    if (hasError) {
      setHasError(false);
    }
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <input
          id="searchbar"
          onChange={handleChange}
          type="text"
          value={searchTerm}
        />
        <label htmlFor="searchbar">Search for a project</label>
        {hasError && (
          <span className="helper-text red-text">
            You must enter something!
          </span>
        )}
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default ProjectSearch;
