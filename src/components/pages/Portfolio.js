import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Portfolio.module.css';
import foodApp from '../../images/Cart screenshot.png';
import youtubeapp from '../../images/youtubeapp.jpg';
import checkTimer from '../../images/10219071.jpg';
const Portfolio = () => {
  return (
    <section className={classes.portfolio}>
      <h1 className={classes['section-title']}>Portfolio</h1>
      <div className={classes['project-container']}>
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
              pathname: 'https://shopping-cart-bke9dkwn5-elvisonob.vercel.app',
            }}
            target="_blank"
            className={classes.link}
          >
            Link to view
          </Link>
        </article>
        <article className={classes.project}>
          <h2>Current Time Checker</h2>
          <img src={checkTimer} width="100%" height="100%" alt="" />
          <Link
            to={{
              pathname: 'https://github.com/elvisonob/Current-time-checker',
            }}
            target="_blank"
            className={classes.link}
          >
            Github
          </Link>
          <Link
            to={{ pathname: 'https://check-timer.vercel.app/' }}
            target="_blank"
            className={classes.link}
          >
            Link to view
          </Link>
        </article>
        <article className={classes.project}>
          <h2>Video Search App</h2>
          <img src={youtubeapp} width="100%" height="100%" alt="" />
          <Link
            to={{ pathname: 'https://github.com/elvisonob/Video-Search-App' }}
            target="_blank"
            className={classes.link}
          >
            Github
          </Link>
          <Link
            to={{
              pathname: 'https://videocomponent-hooks-elvisonob.vercel.app/',
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
