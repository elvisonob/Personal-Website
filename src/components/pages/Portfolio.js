import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Portfolio.module.css';
import foodApp from '../../images/Cart screenshot.png';
import quizApp from '../../images/Quiz.png';
import animalSimulation from '../../images/animal simulation.png';
const Portfolio = () => {
  return (
    <section className={classes.portfolio}>
      <h1 className={classes['section-title']}>Portfolio</h1>
      <div className={classes['project-container']}>
        <article className={classes.project}>
          <h2>Quiz Application</h2>
          <img src={quizApp} width="100%" height="100%" alt="" />
          <Link
            to={{ pathname: 'https://github.com/elvisonob/Quiz-Project' }}
            target="_blank"
            className={classes.link}
          >
            Github
          </Link>
          <Link
            to={{
              pathname: 'https://quiz-project-lemon.vercel.app/',
            }}
            target="_blank"
            className={classes.link}
          >
            Link to view
          </Link>
        </article>
        <article className={classes.project}>
          <h2>Animal Simulation</h2>
          <img src={animalSimulation} width="100%" height="100%" alt="" />
          <Link
            to={{
              pathname: 'https://github.com/elvisonob/Animal-test-Simulation-2',
            }}
            target="_blank"
            className={classes.link}
          >
            Github
          </Link>
          <Link
            to={{ pathname: 'https://animal-simulation.vercel.app/' }}
            target="_blank"
            className={classes.link}
          >
            Link to view
          </Link>
        </article>
        <article className={classes.project}>
          <h2>Shopping App</h2>
          <img src={foodApp} width="100%" height="100%" alt="" />
          <Link
            to={{
              pathname: 'https://github.com/elvisonob/Front-End-Shopping-App',
            }}
            target="_blank"
            className={classes.link}
          >
            Github
          </Link>
          <Link
            to={{
              pathname: 'https://shopping-cart-eosin-five.vercel.app',
            }}
            target="_blank"
            className={classes.link}
          >
            Link to view
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
