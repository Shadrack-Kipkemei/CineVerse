import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      alert(data.message);
      navigate('/movies');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-primary">Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) errors.email = 'Required';
          if (!values.password) errors.password = 'Required';
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group mb-4">
            <label className="text-dark">Email</label>
            <Field
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className="form-group mb-4">
            <label className="text-dark">Password</label>
            <Field
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" className="text-danger" />
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
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
