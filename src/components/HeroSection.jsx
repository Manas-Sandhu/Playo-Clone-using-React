import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="logo-text">PLAY<span className="logo-o">O</span></span>
        </div>
        <div className="navbar-center">
          <button className="nav-btn nav-btn--active">
            <span className="nav-icon">🏃</span> Play
          </button>
          <button className="nav-btn">
            <span className="nav-icon">📅</span> Book
          </button>
          <button className="nav-btn">
            <span className="nav-icon">🎓</span> Train
          </button>
        </div>
        <div className="navbar-right">
          <button className="login-btn">👤 Login / Signup</button>
        </div>
      </nav>

      {/* Promo Banner */}
      <div className="promo-banner">
        <p className="promo-text">
          DON'T JUST PLAY! <strong>DOMINATE!</strong>
          <span className="promo-cta">Shop Now – Min 40% Off ⚡</span>
        </p>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-left">
          <div className="location-pill">
            <span className="location-icon">📍</span>
            <span>Bangalore</span>
          </div>
          <h1 className="hero-heading">
            BOOK SPORTS VENUES.<br />
            JOIN GAMES.<br />
            FIND TRAINERS NEAR YOU.
          </h1>
          <p className="hero-sub">
            The World's Largest Sports Community to Book Venues, Find Trainers, and Join Games Near you.
          </p>
        </div>

        <div className="hero-right">
          <div className="hero-grid">
            <div className="hero-img-main">
              <img src="https://picsum.photos/600/500?random=1" alt="Basketball" />
            </div>
            <div className="hero-img-top-right">
              <img src="https://picsum.photos/300/240?random=2" alt="Indoor Court" />
            </div>
            <div className="hero-img-bottom-right">
              <img src="https://picsum.photos/300/240?random=3" alt="Football" />
            </div>
          </div>
          <div className="hero-badge">
            <span>🎾</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;