import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Portfolio.module.css';
const Portfolio = () => {
  return (
    <section className={classes.portfolio}>
      <h1 className={classes['section-title']}>Portfolio</h1>
      <div className={classes['project-container']}>
        <article className={classes.project}>
          <h2>Shopping App</h2>
          <p>Image to come</p>
          <Link
            to={{ pathname: 'https://github.com/elvisonob/Shopping-Product' }}
            target="_blank"
            className={classes.link}
          >
            Github
          </Link>
          <Link
            to={{ pathName: 'https://elvis-shopping-product.vercel.app/' }}
            target="_blank"
            className={classes.link}
          >
            Link to view
          </Link>
        </article>
        <article className={classes.project}>
          <h2>Video Search App</h2>
          <p>Image to come</p>
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
