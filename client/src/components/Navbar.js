import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/user-stories">User Stories</Link>
      </li>
      <li>
        <Link to="/tests">Tests</Link>
      </li>
    </ul>
  );
};
