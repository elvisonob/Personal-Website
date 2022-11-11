import React from 'react';
import './SurveyApp.css';

const SurveyApp = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm1} />
      <div className="proDetails1">
        <div className="projectContent">
          <p>
            This is a full stack application, which demonstrates that I
            understand the concept of authentication in web development, concept
            of CRUD and usage of Databases. A user is authenticated through
            Google Oauth to gain access to send a survey to client’s email,
            which is routed from the client side of the application to the
            server side.
          </p>
          <button onClick={props.onConfirm1}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SurveyApp;
