import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getMovie} from "../services/api";
import ReviewForm from "./ReviewForm";


function MovieDetails() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMovie(id)
        .then((response) => setMovie(response.data))
        .catch((err) => console.log("Error fetching movie details:", err));

    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>{movie.release_year}</p>

            <ReviewForm movieId={movie.id} />

            <h4>Reviews</h4>
            {movie.reviews && movie.reviews.length > 0 ? (
                movie.reviews.map((review) => (
                    <div key={review.id} className="review">
                        <p>
                            <strong>Rating:</strong> {review.rating}
                        </p>
                        <p>
                            <strong>Comment:</strong> {review.comment}
                        </p>
                    </div>
                ))
            ) : (
                <p>No reviews yet.</p>
            )}
        </div>
    )
}

export default MovieDetails