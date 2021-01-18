import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/expenses">Expenses</NavLink>
    </li>
    <li>
      <NavLink to="/auth">SIGN IN</NavLink>
    </li>
  </ul>
};

export default NavLinks;