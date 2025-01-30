import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Home from "../components/Home"
import MovieList from "../components/MovieList";
import MovieDetails from "../components/MovieDetails";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";  
import ReviewForm from "../components/ReviewForm";
import AddMovieForm from "../components/AddMovieForm";

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movies/:id/review" element={<ReviewForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/add-movie" element={<AddMovieForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
