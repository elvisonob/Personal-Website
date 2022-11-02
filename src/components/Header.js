import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const history = useHistory();
  const navigation = () => {
    history.push('/');
  };
  return (
    <div>
      <div className="header">
        <h1 className="logo" onClick={navigation}>
          Elvis Onobhayedo
        </h1>
        <nav>
          <ul>
            <Link to="/about">
              <li>About Me</li>
            </Link>
            <Link to="/portfolio">
              <li>Portfolio</li>
            </Link>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
