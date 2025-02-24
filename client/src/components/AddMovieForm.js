import React, { useState } from 'react';

function AddMovieForm({ addMovie }) {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [link, setLink] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const movieData = { title, genre, release_year: releaseYear, link };

        try {
            const response = await fetch('https://cineverse-1ekx.onrender.com/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movieData),
            });

            const data = await response.json();
            if (response.ok) {
                addMovie(data); 
                setTitle('');
                setGenre('');
                setReleaseYear('');
                setLink('');
            } else {
                setError(data.message || 'Failed to add movie');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error connecting to the server');
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-primary">Add New Movie</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit} className="shadow p-4">
                <div className="form-group">
                    <label className="form-label text-dark">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label text-dark">Genre</label>
                    <input
                        type="text"
                        className="form-control"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label text-dark">Release Year</label>
                    <input
                        type="number"
                        className="form-control"
                        value={releaseYear}
                        onChange={(e) => setReleaseYear(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label text-dark">Link</label>
                    <input
                        type="text"
                        className="form-control"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
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
                    Add Movie
                </button>
            </form>
        </div>
    );
}

export default AddMovieForm;
