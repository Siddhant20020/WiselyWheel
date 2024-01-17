// Header.js
import React from 'react';

function Header() {
  return (
    <header>
      {<img src="WW.png" alt="WiselyWheel" />}
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Browse Bikes</a></li>
          <li><a href="#">Compare Bikes</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
