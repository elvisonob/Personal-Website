import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavLinks.module.css';

const NavLinks = (props) => {
  return (
    <ul className={classes['nav-links']}>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About Me</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">PortFolio</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
