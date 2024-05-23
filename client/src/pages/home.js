// src/pages/Home.js
import React, { useState } from 'react';
import Register from 'components/register'; // Using alias
import Header from 'components/Header'; // Using alias
import 'styles/style.css'; // Using alias
import Login from '../components/login.js';

function Home() {
  const [content, setContent] = useState('Home');

  

  const renderContent = () => {
    switch(content) {
      case 'register':
        return <Register />;
        case 'login':
          return <Login/>;
      default:
        return (
          <div className='welcome'>
            <h1 className='welcome'>Welcome to Peak Connect</h1>
            <p className='welcome'>This is your hub for all outdoor adventure activities.</p>
          </div>
        );
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
}

export default Home;




