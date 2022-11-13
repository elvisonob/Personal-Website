import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const history = useHistory();
  const navigation = () => {
    history.push('/');
  };
  return (
    <div className="overAllHeader">
      <div className="header">
        <h1 className="logo" onClick={navigation}>
          Elvis Onobhayedo
        </h1>
        <nav>
          <ul>
            <li onClick={navigation}>Home</li>
            <Link to="/about">
              <li>About Me</li>
            </Link>
            <Link to="/portfolio">
              <li>Portfolio</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
