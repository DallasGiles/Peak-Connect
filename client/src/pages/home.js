// src/pages/Home.js
import React, { useState } from 'react';
import Register from 'components/register'; // Using alias
import Header from 'components/Header'; // Using alias
import '/Users/dallas/personal-projects/peak-connect/client/public/styles/style.css'; // Using alias

function Home() {
  const [content, setContent] = useState('Home');

  const handleRegisterClick = () => {
    console.log('click heard');
    setContent('register');
  };

  const renderContent = () => {
    switch(content) {
      case 'register':
        return <Register />;
      default:
        return (
          <div className='welcome'>
            <h1 className='welcome'>Welcome to Peak Connect</h1>
            <p className='welcome'>This is your hub for all outdoor adventure activities.</p>
            <button className='register-button' onClick={handleRegisterClick}>Register</button>
          </div>
        );
    }
  };

  return (
    <div>
      <Header /> {/* Add Header component here */}
      {renderContent()}
    </div>
  );
}

export default Home;




