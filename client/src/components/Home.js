import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to CineVerse</h1>
        <p>Your gateway to an endless world of movies. Discover, rate, and enjoy cinema like never before!</p>
        <Link to="/movies" className="btn btn-primary explore-btn">
          Explore Movies
        </Link>
      </div>
    </div>
  );
};

export default Home;




