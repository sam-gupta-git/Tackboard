import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">My Board</Link></li>
        <li><Link to="/stats">Stats</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
