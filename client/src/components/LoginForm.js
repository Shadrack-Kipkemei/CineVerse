// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import "../index.css";

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/login", { email, password });
//       if (response.status === 200) {
//         localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user to localStorage
//         localStorage.setItem("token", response.data.token); // Save token to localStorage
//         navigate("/"); // Redirect to home page
//       }
//     } catch (error) {
//       alert('Invalid email or password');
//     }
//   }

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center">Login</h2>
//       <form onSubmit={handleSubmit} className="mt-4">
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary w-100">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;



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
    <div>
      <h2>Login</h2>
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
          <div>
            <Field name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
