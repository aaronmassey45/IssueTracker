import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ProjectSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const search = () => {
    history.push(`/issues/${searchTerm}`);
  };

  const searchOnEnterPress = e => {
    if (e.key === 'Enter') {
      search();
    }
  };

  return (
    <>
      <input
        onChange={e => setSearchTerm(e.target.value)}
        onKeyPress={searchOnEnterPress}
        placeholder="Search for a project...."
        type="text"
        value={searchTerm}
      />
      <button onClick={search}>Search</button>
    </>
  );
};

export default ProjectSearch;
