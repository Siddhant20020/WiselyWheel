// Home.js
import React from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import FeaturedBikes from '../Components/FeaturedBikes';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="App">
      {<Header />}
      <HeroSection />
      <FeaturedBikes />
      {<Footer />}
    </div>
  );
}

export default Home;
