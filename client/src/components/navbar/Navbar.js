import React from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

import NavLinks from 'components/navbar/NavLinks';
import './navbar.styles.scss';

const Navbar = () => {
  React.useEffect(() => {
    const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav);
  }, []);

  return (
    <>
      <nav className="nav-wrapper grey darken-4">
        <div className="container">
          <Link to="/" className="brand-logo">
            Issue Tracker
          </Link>
          <button href="#" data-target="mobile-nav" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </button>
          <ul className="right hide-on-med-and-down">
            <NavLinks />
          </ul>
        </div>
      </nav>

      <ul id="mobile-nav" className="sidenav grey darken-4">
        <NavLinks />
      </ul>
    </>
  );
};

export default Navbar;
