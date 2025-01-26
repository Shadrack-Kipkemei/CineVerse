import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import MovieDetails from "../components/MovieDetails";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginFom";
import ReviewForm from "../components/ReviewForm";

function Routes() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/review" component={ReviewForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
