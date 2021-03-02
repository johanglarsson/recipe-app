import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1 className="display-4">My recipies</h1>
    <p className="lead">
      This is my hobby project for displaying a recipe database
    </p>
    <p>
      It is a React front-end to show how it can be done on managing recipes.
    </p>
    <Link to="/about">About me</Link>
  </div>
);
export default HomePage;
