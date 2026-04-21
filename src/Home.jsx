import React from 'react';
import './App.css';
// import HeroSection from './components/HeroSection.jsx'
import BookVenues from './components/BookVenues.jsx';
import DiscoverGames from './components/DiscoverGames.jsx';
import PopularSports from './components/PopularSports.jsx';
import AboutFAQ from './components/AboutFAQ.jsx';

function Home() {
  return (
    <div className="app">
      {/* <HeroSection /> */}
      <BookVenues />
      <DiscoverGames />
      <PopularSports />
      <AboutFAQ />
    </div>
  );
}

export default Home;