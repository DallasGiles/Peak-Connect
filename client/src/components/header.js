// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/dallas/personal-projects/peak-connect/client/public/styles/style.css'; // Ensure this path is correct

function Header() {
  return (
    <header className='header'>
      <nav>
        <ul className='nav-list'>
          <li className='nav-item'><Link to="/">Home</Link></li>
          <li className='nav-item'><Link to="/hiking">Hiking</Link></li>
          <li className='nav-item'><Link to="/skiing">Skiing</Link></li>
          <li className='nav-item'><Link to="/climbing">Climbing</Link></li>
          <li className='nav-item'><Link to="/forum">Forum</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


