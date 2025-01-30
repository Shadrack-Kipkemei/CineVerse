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
            const response = await fetch('http://localhost:5000/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movieData),
            });

            const data = await response.json();
            if (response.ok) {
                addMovie(data); // This will add the movie to the list in the parent component
                setTitle('');
                setGenre('');
                setReleaseYear('');
                setLink('')
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
            <h2>Add New Movie</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <input
                        type="text"
                        className="form-control"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Release Year</label>
                    <input
                        type="number"
                        className="form-control"
                        value={releaseYear}
                        onChange={(e) => setReleaseYear(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Link</label>
                    <input
                        type="number"
                        className="form-control"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Add Movie
                </button>
            </form>
        </div>
    );
}

export default AddMovieForm;
