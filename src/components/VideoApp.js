import React from 'react';
import './VideoApp.css';

const VideoApp = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />
      <div className="proDetails">
        <div className="projectContent">
          <p className="paragraph">
            This is a front-end application of a Video search App, which I built
            to demonstrate that I can design a User Interface webpage which
            fetches and displays information from an external API based on the
            input from the user
          </p>
          <button onClick={props.onConfirm}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default VideoApp;
