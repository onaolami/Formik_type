import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <p>
        <Link to="/login">Login</Link>
      </p>
      <h1>Homepage</h1>
    </div>
  );
};

export default Homepage;
