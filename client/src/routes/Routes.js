import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import MovieDetails from "../components/MovieDetails";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";  
import ReviewForm from "../components/ReviewForm";

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>  
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movie/:id/review" element={<ReviewForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
