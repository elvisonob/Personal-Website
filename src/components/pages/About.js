import React from 'react';
import classes from './About.module.css';
import image from '../../images/coding-pic-edit.jpg';
import github from '../../images/github.jpg';
import linkedin from '../../images/linkedin.png';
import ElvisCV from '../../images/Elvis IT Resume.pdf';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={classes.AboutMeContainer}>
      <div className={classes.leftHandSide}>
        <section className={classes.content}>
          <div className={classes.aboutMeTop}>About Me</div>
          <p className={classes.aboutMe}>
            Hello dear, I am Elvis, an enthusiastic Software Developer. I made a
            deliberate decision to specialize in Software Development from an
            Electrical and Electronics Engineering background. This choice was
            driven by the thrill I feel when writing a simple line of code that
            transforms into an immediately usable art. Since embarking on this
            journey, I went from the basics of software development, to been
            able to create a full stack application (Kindly check my portfolio
            page for more details). Furthermore, I love challenging and
            problem-solving tasks; I like creating things from scratch and also
            building on preexisting things to make it more rarefy, and software
            development has provided the avenue for me to explore such ideas,
            and above all, I like learning new things and being able to apply
            the knowledge to quotidian scenarios.
          </p>
        </section>
      </div>
      <div className={classes.rightHandSide}>
        <div className={classes.picture}>
          <div></div>
          <img
            className={classes.resize}
            src={image}
            width="100%"
            height="80%"
            alt=""
          />
          <div></div>
        </div>
        <div className={classes.socialMediaLink}>
          <div className={classes.linkedin}>
            <Link
              to={{
                pathname: 'https://www.linkedin.com/in/elvis-ono-5bb4081b6/',
              }}
              target="_blank"
            >
              <img
                className={classes.linkedinImage}
                src={linkedin}
                width="100%"
                height="100%"
                alt=""
              />
            </Link>
          </div>
          <div className={classes.github}>
            <Link
              to={{ pathname: 'https://github.com/elvisonob' }}
              target="_blank"
            >
              <img
                className={classes.gitHubImage}
                src={github}
                width="100%"
                height="100%"
                alt=""
              />
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
