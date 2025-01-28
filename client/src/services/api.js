import axios from "axios";

const API_URL = "http://localhost:5000";  // Backend URL

// Get movies
export const getMovies = () => axios.get(`${API_URL}/movies`);

// Get a single movie by ID
export const getMovie = (id) => axios.get(`${API_URL}/movies/${id}`);

// Submit a new review
export const submitReview = (data) => axios.post(`${API_URL}/reviews`, data);

// Sign up a new user
export const signUpUser = (data) => axios.post(`${API_URL}/users`, data);
