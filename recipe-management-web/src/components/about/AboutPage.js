import React from "react";

const AboutPage = () => (
  <div className="container-fluid">
    <div className="card" style={{ width: "300px" }}>
      <div className="card-body">
        <h5 className="card-title">About me</h5>
        <p className="card-text">
          I'm primarly a backend developer using this project to learn React so
          that I can move to a fullstack position
        </p>
        <a
          href="https://www.linkedin.com/in/johanlarsson04/"
          className="card-link"
        >
          LinkedIn
        </a>
        <a href="https://github.com/johanglarsson" className="card-link">
          Github repository
        </a>
      </div>
    </div>
  </div>
);

export default AboutPage;
