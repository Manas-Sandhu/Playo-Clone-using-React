import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-wrapper">


      <div className="promo-banner">
        <p className="promo-text">
          WAP Group Project! - <strong>MANAS & PALAK</strong>
          <span className="promo-cta">Hope you like it!</span>
        </p>
      </div>


      <div className="hero-content">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="location-pill">
              <span className="location-icon">📍</span>
              <span>Bangalore</span>
            </div>
            <h1 className="hero-heading">
              BOOK SPORTS VENUES.
              <br />
              JOIN GAMES.
              <br />
              FIND TRAINERS NEAR YOU.
            </h1>
            <p className="hero-sub">
              The World's Largest Sports Community to Book Venues, Find
              Trainers, and Join Games Near you.
            </p>
          </div>

          <div className="hero-right">
            <div className="hero-grid">
              <div className="hero-img-main">
                <img
                  src="https://picsum.photos/600/500?random=1"
                  alt="Basketball"
                />
              </div>
              <div className="hero-img-top-right">
                <img
                  src="https://picsum.photos/300/240?random=2"
                  alt="Indoor Court"
                />
              </div>
              <div className="hero-img-bottom-right">
                <img
                  src="https://picsum.photos/300/240?random=3"
                  alt="Football"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
