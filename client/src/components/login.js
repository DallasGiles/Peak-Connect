import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function login(){

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
      <button type="submit">Log In</button>
    </form>
    <p><a href="#">Forgot your password?</a></p>
    <p><Link to="/register">No account? Create one here.</Link></p>
    </div>
    </div>
    </div>
  );
}

export default login;