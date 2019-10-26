import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/user-stories">User Stories</Link>
    </li>
  </>
);

export default NavLinks;
