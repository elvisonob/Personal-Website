import React from 'react';
import classes from './About.module.css';
import image from '../../images/portfolio-pic.jpg';
import github from '../../images/github.jpg';
import linkedin from '../../images/linkedin.png';
import ElvisCV from '../../images/Elvis IT Resume.pdf';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.information}>
        <h2>About Me</h2>
        <p>
          Hi, I'm Elvis — a Software Developer with a foundation in Electrical
          and Electronics Engineering. I transitioned into software development
          driven by the excitement of turning ideas into functional solutions
          that improves organisations and individuals. I thrive on solving
          problems, building products (more information on my portfolio page)
          from the ground up, and refining existing systems. For me, coding is
          not just a craft but a powerful way to make a positive impact. I'm
          constantly learning and evolving to stay ahead in this fast-moving
          field.
        </p>
      </div>
      <div className={classes.leftMenu}>
        <div className={classes.leftMenuOptions}>
          <img className={classes.myimage} src={image} alt="" />

          <div className={classes.socialMedia}>
            <Link
              to={{ pathname: 'https://github.com/elvisonob' }}
              target="_blank"
            >
              <img src={github} height="100%" width="100%" alt="" />
            </Link>
            <Link
              to={{
                pathname:
                  'https://www.linkedin.com/in/elvis-ono-meng-5bb4081b6/',
              }}
              target="_blank"
            >
              <img src={linkedin} height="100%" width="100%" alt="" />
            </Link>
          </div>
          <a className={classes.CV} href={ElvisCV} download="Resume">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
