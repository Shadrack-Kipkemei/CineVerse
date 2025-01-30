import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/users', values);
      if (response.status === 201) {
        navigate('/login'); // Redirect to login after successful signup
      }
    } catch (error) {
      alert('Error signing up');
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label>Username</label>
            <Field
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter your username"
            />
            <ErrorMessage name="username" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <Field
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <Field
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
