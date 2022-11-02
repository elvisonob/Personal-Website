import React from 'react';
import './HomePage.css';
import Header from './Header';

const HomePage = () => {
  return (
    <div>
      <div className="wholePage1">
        <Header />
        <div className="mainBody">
          <div className="main">
            <h1 className="name">Elvis Onobhayedo</h1>
            <h1 className="title">Full-Stack Software Developer</h1>
            <h3>based in Scotland, United Kingdom</h3>
            <br />
            <p>
              HTML/CSS - Javascript - React - Redux- NodeJS - ExpressJS -
              MongoDB - TDD(jasmine) - Git - Github
            </p>
          </div>
        </div>
        <footer>
          <p>Email: elvisonob@yahoo.com</p>
          <p>Tel: 07778833743</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
