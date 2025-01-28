import axios from "axios";

const API_URL = "http://localhost:5000";  // Backend URL

export const getMovies = () => axios.get(`${API_URL}/movies`);

export const getMovie = (id) => axios.get(`${API_URL}/movies/${id}`);

export const signUpUser = (data) => axios.post(`${API_URL}/users`, data);
