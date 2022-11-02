import React from 'react';
import './Portfolio.css';
import Header from './Header';
import image2 from './../images/youtube.png';
import image3 from './../images/survey.png';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <Header />
      <section class="portfolio">
        <h2 class="section-title">Portfolio</h2>

        <div class="project-container">
          <article class="project">
            <h3 class="project-titles">YouTube App</h3>
            <img src={image2} height="100%" width="100%" alt="" />
            <Link
              to={{ pathname: 'https://github.com/elvisonob/myYoutubeApp' }}
              target="_blank"
            >
              <li>Github</li>
            </Link>
            <Link
              to={{ pathname: 'https://videocomponent-hooks.vercel.app/' }}
              target="_blank"
            >
              <li>Link</li>
            </Link>
          </article>

          <article class="project">
            <h3 class="project-titles">Survey Collection App</h3>
            <img src={image3} height="100%" width="100%" alt="" />
            <Link
              to={{
                pathname:
                  'https://github.com/elvisonob/Feedback-Collection-Full-stack',
              }}
              target="_blank"
            >
              <li>Github</li>
            </Link>
            <Link
              to={{ pathname: 'https://dry-mountain-07093.herokuapp.com/' }}
              target="_blank"
            >
              <li>Link</li>
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
