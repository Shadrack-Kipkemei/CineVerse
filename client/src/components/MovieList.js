import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../services/api";
import AddMovieForm from "./AddMovieForm";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

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
  };

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
      <h2 className="text-primary">Movie List</h2>

      {/* Show Add Movie button */}
      <div className="mb-4">
        <button
          className="btn"
          style={{
            backgroundColor: "#003366",  // Primary color for the Add Movie button
            color: "#fff",
            fontSize: "1rem",
            padding: "12px 30px",
            borderRadius: "5px",
          }}
          onClick={() => setShowAddForm((prev) => !prev)} // Toggle form visibility
        >
          {showAddForm ? "Cancel" : "Add Movie"}
        </button>
      </div>

      {/* Conditionally render the AddMovieForm */}
      {showAddForm && <AddMovieForm addMovie={addMovie} />}

      <div className="row mt-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src={movie.image_url}
                alt={movie.title}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{movie.title}</h5>
                <a href={movie.link} target="_blank" rel="noopener noreferrer" className="btn btn-link">
                  Watch Now
                </a>
                <div className="mt-2">
                  <Link
                    to={`/movies/${movie.id}`}
                    className="btn"
                    style={{
                      backgroundColor: "#003366",
                      color: "#fff",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#002244")} // Hover effect
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#003366")}
                  >
                    Movie Details
                  </Link>
                </div>
                <div className="mt-2">
                  <Link
                    to={`/movies/${movie.id}/review`}
                    className="btn"
                    style={{
                      backgroundColor: "#003366",
                      color: "#fff",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#002244")} // Hover effect
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#003366")}
                  >
                    Leave a Review
                  </Link>
                </div>
                <div className="mt-2">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(movie.id)}
                    style={{
                      backgroundColor: "#ff3b30",  // Red for Delete button
                      color: "#fff",
                      fontSize: "0.8rem",
                      padding: "6px 15px",
                      borderRadius: "5px",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff2a1f")} // Hover effect
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff3b30")}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
