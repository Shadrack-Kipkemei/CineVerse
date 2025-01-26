import React, { useState, useEffect } from "react";
import { getMovies } from "../services/api";
import { Link } from "react-router-dom";


function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies()
        .then((response) => setMovies(response.data))
        .catch((err) => console.log("Error fetching movies:", err));

    }, []);

    return (
        <div className="container mt-4">
            <h2>Movies</h2>
            <div className="row">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-md-4">
                        <div className="card mb-4">
                            <img
                                src={`https://via.placeholder.com/150?text=${movie.title}`}
                                className="card-img-top"
                                alt={movie.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.genre}</p>
                                <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                                    View Details 
                                </Link>
                            </div>
                        </div> 
                    </div> 
                ))}
            </div>
        </div>
    );
}

export default MovieList