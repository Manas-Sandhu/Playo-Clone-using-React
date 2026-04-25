import React from "react";
import "./Home.css";
import HeroSection from "./components/Herosection/HeroSection.jsx";
import BookVenues from "./components/BookVenues/BookVenues.jsx";
import DiscoverGames from "./components/DiscoverGames/DiscoverGames.jsx";
import PopularSports from "./components/PopularSports/PopularSports.jsx";
import AboutFAQ from "./components/AboutFAQ/AboutFAQ.jsx";
import Part2 from "./components2/Part2";

function Home() {
  return (
    <div className="app">
      <HeroSection />
      <Part2/>
      <DiscoverGames />
      <PopularSports />
      <AboutFAQ />
    </div>
  );
}

export default Home;
