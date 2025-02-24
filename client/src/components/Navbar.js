import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  const token = localStorage.getItem("token"); // Check if the user is logged in

  const logout = () => {
    localStorage.removeItem("token");  // Remove stored token
    localStorage.removeItem("user");   // Clear user data if stored
    window.location.href = "/login";   // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar" style={{ backgroundColor: '#003366' }}>
      <div className="container">
        <Link className="navbar-brand text-white" to="/" style={{ fontWeight: 'bold' }}>
          CineVerse
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/" style={{ color: '#fff' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/movies">
                Movies
              </Link>
            </li>
            {token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/add-movie">
                    Add Movie
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger nav-link" onClick={logout} style={{ color: '#fff' }}>
                    Logout
                  </button>
                </li>
              </>
            )}
            {!token && (
              <>
                <li className="nav-item">
                  <Link className="btn btn-primary nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


