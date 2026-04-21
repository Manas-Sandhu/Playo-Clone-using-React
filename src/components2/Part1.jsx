import React from 'react';
import './Part1.css';

function Part1() {
  return (
    <div className="hero-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">
            PLAY<span className="logo-o">O</span>
          </div>
          <div className="location-pill">
            <span className="location-icon">📍</span>
            <span>Bangalore</span>
          </div>
        </div>
        <div className="navbar-center">
          <a href="#" className="nav-link active">
            <span className="nav-icon">🏃</span> Play
          </a>
          <a href="#" className="nav-link">
            <span className="nav-icon">🏟️</span> Book
          </a>
          <a href="#" className="nav-link">
            <span className="nav-icon">🎓</span> Train
          </a>
        </div>
        <div className="navbar-right">
          <a href="#" className="login-btn">
            <span className="user-icon">👤</span> Login / Signup
          </a>
        </div>
      </nav>

      {/* Hero Banner */}
      {/* <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Find & Join Sports<br />Games Near You</h1>
          <p className="hero-subtitle">Connect with players, book venues, and play your favourite sport in Bangalore</p>
          <div className="hero-search">
            <input
              type="text"
              placeholder="Search sport, venue or location..."
              className="hero-search-input"
              readOnly
            />
            <button className="hero-search-btn">Search</button>
          </div>
          <div className="hero-sport-tags">
            <span className="sport-tag">⚽ Football</span>
            <span className="sport-tag">🏸 Badminton</span>
            <span className="sport-tag">🎾 Tennis</span>
            <span className="sport-tag">🏏 Cricket</span>
            <span className="sport-tag">🏀 Basketball</span>
          </div>
        </div>
        <div className="hero-image-area">
          <img src="https://picsum.photos/600/420?random=10" alt="Sports" className="hero-img" />
        </div>
      </div> */}
    </div>
  );
}

export default Part1;