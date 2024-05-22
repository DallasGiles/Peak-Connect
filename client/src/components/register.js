import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    // Add functionality to send data to the backend server
  };

  return (
    <div className='login-body'>
    <div className='login-container'>
        <div className='login-form'>
            <h1>Sign in</h1>
    <form>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Password:
        <input type="text" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <label>
        Confirm Password:
        <input type="text" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <button type="submit">Create Account</button>
    </form>
    <p><a href="#">Forgot your password?</a></p>
    <p><a href="/">Already have an account? Sign in</a></p>
    </div>
    </div>
    </div>
  );
}

export default Register;


