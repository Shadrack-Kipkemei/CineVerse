import axios from "axios";

const API_URL = "http://localhost:5000";  // Backend URL

// Get movies
export const getMovies = () => axios.get(`${API_URL}/movies`);

// Get a single movie by ID
export const getMovie = (id) => axios.get(`${API_URL}/movies/${id}`);

// Submit a new review for a movie
export const submitReview = (data) => axios.post(`${API_URL}/reviews`, data);

// Sign up a new user
export const signUpUser = (data) => axios.post(`${API_URL}/users`, data);

// User login
export const loginUser = (data) => axios.post(`${API_URL}/login`, data);

// Get user details (optional, if needed for user profile)
export const getUser = (userId) => axios.get(`${API_URL}/users/${userId}`);

// Update user details (optional, if needed)
export const updateUser = (userId, data) => axios.put(`${API_URL}/users/${userId}`, data);
