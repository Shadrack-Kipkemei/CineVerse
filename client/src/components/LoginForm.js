import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../index.css";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user to localStorage
        localStorage.setItem("token", response.data.token); // Save token to localStorage
        navigate("/"); // Redirect to home page
      }
    } catch (error) {
      alert('Invalid email or password');
    }
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;



