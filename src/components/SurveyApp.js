import React from 'react';
import './SurveyApp.css';

const SurveyApp = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm1} />
      <div className="proDetails1">
        <div className="projectContent">
          <p className="paragraph">
            This is a time checker application, it fetches the current time of
            three major cities in Europe, and the aim of this project is to
            establish my working understanding with using external APIs
          </p>
          <button onClick={props.onConfirm1}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SurveyApp;
