import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
};
