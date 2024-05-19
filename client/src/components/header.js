import React from 'react';
import '../styles/style.css';

function Header({ setContent }) {
  return (
    <header>
      <nav>
        <h1 className='title'> Peak Connect</h1>
        <ul>
        <li className='nav-item'><link to="/forum">Forums</link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

