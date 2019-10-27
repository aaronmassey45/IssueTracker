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
      <input
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search for a project...."
        type="text"
        value={searchTerm}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default ProjectSearch;
