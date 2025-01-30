import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../services/api";


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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Movie List</h2>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5 className="card-title">{movie.title}</h5>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary mb-2">
                  Movie Details
                </Link>
                <Link to={`/movies/${movie.id}/review`} className="btn btn-secondary">
                  Leave a Review
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
