import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.scss';

const Navbar = () => (
  <nav className="nav-wrapper grey darken-4">
    <div className="container">
      <Link to="/" className="brand-logo">
        Issue Tracker
      </Link>
      <ul className="right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user-stories">User Stories</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
