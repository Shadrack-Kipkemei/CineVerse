import axios from "axios";

const API_URL = "https://cineverse-1ekx.onrender.com";  // Backend URL

const getAuthToken = () => localStorage.getItem("token");

const authAxios = axios.create({
  baseURL: API_URL,
  headers: {
    'x-access-token': getAuthToken()
  }
});

// Get movies
export const getMovies = () => authAxios.get(`${API_URL}/movies`);

// Get a single movie by ID
export const getMovie = (id) => authAxios.get(`${API_URL}/movies/${id}`);

// Submit a new review for a movie
export const submitReview = (data) => authAxios.post(`${API_URL}/reviews`, data);

// Sign up a new user
export const signUpUser = (data) => axios.post(`${API_URL}/users`, data);

// User login
export const loginUser = (data) => axios.post(`${API_URL}/login`, data);

// Get user details 
export const getUser = (userId) => authAxios.get(`${API_URL}/users/${userId}`);

// Update user details 
export const updateUser = (userId, data) => authAxios.put(`${API_URL}/users/${userId}`, data);
