import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/movies/${id}`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch movie details");
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h2>Title: {movie.title}</h2>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Release Year:</strong> {movie.release_year}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
