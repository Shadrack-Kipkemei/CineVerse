import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { submitReview } from "../services/api";

const ReviewForm = () => {
  const { id } = useParams();  // Get movie ID from URL
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      setError("Invalid movie ID");
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating || !comment) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      await submitReview({
        rating,
        comment,
        movie_id: id,
        user_id: 1  // Assuming user_id 1
      });
      alert("Review submitted successfully!");
      setRating("");
      setComment("");
    } catch (err) {
      setError("Failed to submit review.");
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <p className="text-danger text-center">{error}</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-primary">Write a Review</h2>
      <form onSubmit={handleSubmit} className="shadow p-4">
        <div className="mb-3">
          <label className="form-label text-dark">Rating (1-5)</label>
          <input
            type="number"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-dark">Comment</label>
          <textarea
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn"
          style={{
            backgroundColor: "#003366", // Primary color for button
            color: "#fff",
            padding: "12px 30px",
            fontSize: "1rem",
            borderRadius: "5px",
            width: "100%",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#002244")} // Hover effect
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#003366")}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
        {error && <div className="text-danger mt-2">{error}</div>}
      </form>
      <Link
        to="/"
        className="btn"
        style={{
          backgroundColor: "#6c757d", // Secondary color for button
          color: "#fff",
          padding: "12px 30px",
          fontSize: "1rem",
          borderRadius: "5px",
          marginTop: "20px",
          display: "block",
          textAlign: "center",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#5a6268")} // Hover effect
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#6c757d")}
      >
        Back to Movies
      </Link>
    </div>
  );
};

export default ReviewForm;
