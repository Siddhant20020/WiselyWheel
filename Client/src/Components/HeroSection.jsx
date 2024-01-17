// HeroSection.js
import React from 'react';

function HeroSection() {
  return (
    <section className="hero">
      <h1>Discover and Compare Your Perfect Ride</h1>
      <div className="search-bar">
        <input type="text" placeholder="Enter Your Budget" />
        <button>Search</button>
      </div>
    </section>
  );
}

export default HeroSection;
