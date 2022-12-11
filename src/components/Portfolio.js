import React, { useState } from 'react';
import './Portfolio.css';
import Header from './Header';
import image2 from './../images/youtubeapp.jpg';
import image3 from './../images/survey.png';
import { Link } from 'react-router-dom';
import VideoApp from './VideoApp';
import SurveyApp from './SurveyApp';

const Portfolio = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);

  const showInfoHandler = () => {
    setShowInfo(null);
  };

  const showInfoHandler2 = () => {
    setShowInfo2(null);
  };

  return (
    <div>
      <Header />
      <section class="portfolio">
        <h2 class="section-title">Portfolio</h2>

        <div class="project-container">
          <article class="project">
            <h3 class="project-titles">Video Search App</h3>

            <img src={image2} height="100%" width="100%" alt="" />
            {showInfo && <VideoApp onConfirm={showInfoHandler} />}

            <li onClick={() => setShowInfo(!showInfo)}>Read Briefly</li>

            <Link
              style={{ textDecoration: 'none' }}
              to={{ pathname: 'https://github.com/elvisonob/myYoutubeApp' }}
              target="_blank"
            >
              <li>Github</li>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              to={{
                pathname: 'https://videocomponent-hooks-elvisonob.vercel.app/',
              }}
              target="_blank"
            >
              <li>Link</li>
            </Link>
          </article>

          <article class="project">
            <h3 class="project-titles">Survey Collection App</h3>
            <img src={image3} height="100%" width="100%" alt="" />
            {showInfo2 && <SurveyApp onConfirm1={showInfoHandler2} />}
            <li onClick={() => setShowInfo2(!showInfo2)}>Read Briefly</li>

            <Link
              style={{ textDecoration: 'none' }}
              to={{
                pathname:
                  'https://github.com/elvisonob/Feedback-Collection-Full-stack',
              }}
              target="_blank"
            >
              <li>Github</li>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
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
