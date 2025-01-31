import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; 

const Home = () => {
  return (
    <div
      style={{
        fontFamily: "'Arial', sans-serif",
        textAlign: 'center',
        backgroundColor: '#003366',
        color: '#fff',
        padding: '100px 0',
      }}
    >
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Welcome to CineVerse
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '40px' }}>
          Your gateway to an endless world of movies. Discover, rate, and enjoy cinema like never before!
        </p>
        <Link
          to="/movies"
          style={{
            backgroundColor: '#0066cc',
            color: '#fff',
            fontSize: '1rem',
            padding: '12px 30px',
            borderRadius: '5px',
            textDecoration: 'none',
          }}
        >
          Explore Movies
        </Link>
      </div>

      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQ636WdMIxn6B-BZMbFVseW1D2jZqgnraTw&s"  
          alt="Movies"
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>
    </div>
  );
};

export default Home;

