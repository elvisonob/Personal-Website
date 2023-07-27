import React from 'react';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1>Elvis</h1>
        <h2>Full-Stack Developer</h2>
        <h3>based in United Kingdom</h3>
        <p>
          HTML/CSS - JavaScript - TypeScript - React - NextJS - NodeJS -
          ExpressJS - OOP - Git - GitHub
        </p>
      </div>
    </div>
  );
};

export default HomePage;
