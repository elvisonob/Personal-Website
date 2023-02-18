import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './HomePage.css';
//import Header from './Header';

const HomePage = () => {
  const history = useHistory();
  const navigation = () => {
    history.push('/');
  };
  return (
    <div>
      <div className="wholePage1">
        <div className="header">
          <h1 className="logo" onClick={navigation}>
            Elvis Ono
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
        <div className="left">left</div>
        <div className="mainBody">
          <div className="main">
            <h1 className="name">Elvis Ono</h1>
            <h1 className="title">Full-Stack Software Developer</h1>
            <h3>based in Scotland</h3>
            <br />
            <p>
              HTML/CSS - Javascript - React - Redux- NodeJS - ExpressJS -
              MongoDB - TDD(jasmine) - Git - Github
            </p>
          </div>
        </div>
        <div className="right">right</div>
        <footer>
          <p>Email: elvisonob@yahoo.com</p>
          <p>Tel: 07778833743</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
