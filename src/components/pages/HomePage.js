import React from 'react';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1 className={classes['name-title']}>Elvis</h1>
        <h2 className={classes['role-title']}>Full-Stack Developer</h2>
        <h3 className={classes['location-name']}>based in United Kingdom</h3>
        <p className={classes['current-skills']}>
          HTML/CSS - JavaScript - TypeScript - React - NextJS - NodeJS -
          ExpressJS - API creation(REST & GraphQL)-OOP - Git - GitHub - MongoDB,
          NoSQL
        </p>
      </div>
    </div>
  );
};

export default HomePage;
