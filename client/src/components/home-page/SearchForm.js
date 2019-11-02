import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ProjectSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/issues/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <input
          id="searchbar"
          onChange={e => setSearchTerm(e.target.value)}
          type="text"
          value={searchTerm}
        />
        <label htmlFor="searchbar">Search for a project</label>
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default ProjectSearch;
