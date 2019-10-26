import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul className="navbar">
    <li>
      <Link to="/">Home</Link>
    </li>
  </ul>
);

export default Navbar;
