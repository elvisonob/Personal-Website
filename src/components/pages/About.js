import React from 'react';
import classes from './About.module.css';
import image from '../../images/calm-pic.jpg';
import github from '../../images/github.jpg';
import linkedin from '../../images/linkedin.png';
import ElvisCV from '../../images/Elvis IT Resume.pdf';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={classes.AboutMeContainer}>
      <div className={classes.leftHandSide}>
        <section className={classes.content}>
          <h1>About Me</h1>
          <p>
            Hi, I am Elvis, a gung-ho and an enthusiastic Full Stack Software
            Developer. I made a concerted decision to specialize in Software
            Development from an Electrical and Electronics background due to my
            unwavering enthusiasm with computing and technology in general.
            Since embarking on this journey, I went from the basics of software
            development, to been able to make a full stack application (Kindly
            check my portfolio page for more details). Furthermore, I love
            challenging and problem-solving tasks, and I like creating things
            from scratch, and software development has really provided the
            avenue for me to explore such ideas, and above all, I like learning
            new things and being able to apply the knowledge to
            everyday/technology scenarios.
          </p>
        </section>
      </div>
      <div className={classes.rightHandSide}>
        <div className={classes.picture}>
          <img src={image} width="80%" height="80%" alt="" />
        </div>
        <div className={classes.socialMediaLink}>
          <div className={classes.linkedin}>
            <Link
              to={{
                pathname:
                  'https://www.linkedin.com/in/elvis-onobhayedo-5bb4081b6/',
              }}
              target="_blank"
            >
              <img src={linkedin} width="100%" height="100%" alt="" />
            </Link>
          </div>
          <div className={classes.github}>
            <Link
              to={{ pathname: 'https://github.com/elvisonob' }}
              target="_blank"
            >
              <img src={github} width="100%" height="100%" alt="" />
            </Link>
          </div>
        </div>
        <a className={classes.cv} href={ElvisCV} download="Resume">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
