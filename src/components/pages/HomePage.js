import React from 'react';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes['name-title']}>Elvis</h1>
      <h2 className={classes['role-title']}>Software Developer</h2>
      <h3 className={classes['location-name']}>United States</h3>
      <p className={classes['current-skills']}>
        HTML/CSS - JavaScript - TypeScript - React - NextJS - NodeJS - ExpressJS
        - API creation(REST & GraphQL) - OOP - Git - GitHub - SQL - NoSQL
      </p>
    </div>
  );
};

export default HomePage;
