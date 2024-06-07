import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'styles/login.css';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onLogin(); // Simulate login
  };

  return (
    <div className='login-body'>
      <div className='home-icon'>
        <Link to="/">
          <i className="fas fa-home"></i>
        </Link>
      </div>
      <div className='login-container'>
        <div className='login-form'>
          <h1>Peak Connect</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <button type="submit">Log In</button>
          </form>
          <p><Link to="/register">Don't have an account? Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
