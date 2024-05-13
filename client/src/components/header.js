import React from 'react';

function Header({ setContent }) {
  return (
    <header>
      <nav>
        <ul>
          <li><button onClick={() => setContent('Home')}>Home</button></li>
          <li><button onClick={() => setContent('Hiking')}>Hiking</button></li>
          <li><button onClick={() => setContent('Skiing')}>Skiing</button></li>
          <li><button onClick={() => setContent('Climbing')}>Climbing</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

