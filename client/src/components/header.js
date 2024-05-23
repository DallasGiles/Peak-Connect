import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/style.css';

function Header() {
  return (
    <header className='header'>
      <nav>
        <ul className='nav-list'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hiking">Hiking</Link></li>
          <li><Link to="/skiing">Skiing</Link></li>
          <li><Link to="/climbing">Climbing</Link></li>
          <li><Link to="/forum">Forum</Link></li>
          <li className='nav-item'><Link to="/register">Register</Link></li>
          <li className='nav-item'><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;





