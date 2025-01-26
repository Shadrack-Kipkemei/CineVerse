import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { submitReview } from "../services/api";

function ReviewForm({ movieId }) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = { rating, comment, movie_id: movieId };
    submitReview(reviewData)
      .then(() => {
        history.push(`/movie/${movieId}`);
      })
      .catch((err) => console.log("Error submitting review:", err));
  };

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h4>Submit a Review</h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Rating (1-5)</label>
            <input
              type="number"
              className="form-control"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              required
            />
          </div>
          <div className="form-group">
            <label>Comment</label>
            <textarea
              className="form-control"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows="3"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
