import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../services/api";
import AddMovieForm from "./AddMovieForm";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        setMovies(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch movies");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  }

  const handleDelete = async (movieId) => {
    try {
      const response = await fetch(`http://localhost:5000/movies/${movieId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
      } else {
        setError("Failed to delete the movie");
      }
    } catch (err) {
      setError("Failed to delete the movie");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Movie List</h2>
      {/* Add Movie Button */}
      <div className="mb-4">
        <AddMovieForm addMovie={addMovie} /> 
      </div>

      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Genre: {movie.genre}</p>
                <p className="card-text">Release Year: {movie.release_year}</p>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary mb-2">
                  Movie Details
                </Link>
                <Link to={`/movies/${movie.id}/review`} className="btn btn-secondary mb-2">
                  Leave a Review
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(movie.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
