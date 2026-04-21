import React from "react";
import "./Part6.css";

const Part6 = () => {
  return (
    <div className="navbar-wrapper">
      {/* Top Row */}
      <div className="navbar-top">
        <h1 className="navbar-title">Games in Bangalore</h1>

        <div className="navbar-app-promo">
          <span className="promo-text">To create a game, download Playo app</span>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="store-badge google"
          >
            <div className="badge-inner">
              <svg className="store-icon" viewBox="0 0 24 24" fill="none">
                <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l16 8.5-16 8.5C3.5 20.5 3 21.33 3 20.5z" fill="#EA4335"/>
                <path d="M3 3.5l9.5 9.5L3 22.5V3.5z" fill="#FBBC04"/>
                <path d="M3 3.5l9.5 9.5 6-6L5 1C4 .5 3 1 3 3.5z" fill="#4285F4"/>
                <path d="M3 22.5l9.5-9.5 6 6-13 6C4 26.5 3 25 3 22.5z" fill="#34A853"/>
              </svg>
              <div className="badge-text">
                <span className="badge-sub">GET IT ON</span>
                <span className="badge-main">Google Play</span>
              </div>
            </div>
          </a>

          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="store-badge apple"
          >
            <div className="badge-inner">
              <svg className="store-icon apple-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="badge-text">
                <span className="badge-sub">Download on the</span>
                <span className="badge-main">App Store</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Filter Row */}
      <div className="navbar-filters">
        {/* GameTime Toggle */}
        <div className="filter-chip gametime-chip">
          <div className="gametime-logo">
            <svg viewBox="0 0 32 32" width="22" height="22">
              <circle cx="16" cy="16" r="14" fill="#1a1a2e"/>
              <circle cx="16" cy="16" r="10" fill="#16213e"/>
              <path d="M12 13 Q16 9 20 13 Q22 16 20 19 Q16 23 12 19 Q10 16 12 13Z" fill="#00d4aa" opacity="0.8"/>
              <circle cx="14" cy="15" r="2" fill="#fff"/>
            </svg>
          </div>
          <span className="chip-label">GameTime by Playo</span>
          <div className="toggle-switch">
            <div className="toggle-track">
              <div className="toggle-thumb"></div>
            </div>
          </div>
        </div>

        {/* Filter & Sort */}
        <button className="filter-chip dropdown-chip">
          <svg className="chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="6" x2="20" y2="6"/>
            <line x1="4" y1="12" x2="14" y2="12"/>
            <line x1="4" y1="18" x2="10" y2="18"/>
            <polyline points="17 15 20 18 17 21"/>
          </svg>
          <span className="chip-label">Filter &amp; Sort By</span>
          <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        {/* Sports */}
        <button className="filter-chip dropdown-chip">
          <svg className="chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9"/>
            <path d="M12 3 Q9 7 9 12 Q9 17 12 21"/>
            <path d="M3 12 Q7 9 12 9 Q17 9 21 12"/>
          </svg>
          <span className="chip-label">Sports</span>
          <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        {/* Date */}
        <button className="filter-chip dropdown-chip">
          <svg className="chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="3" y1="9" x2="21" y2="9"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
          </svg>
          <span className="chip-label">Date</span>
          <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        {/* Pay & Join Game */}
        <button className="filter-chip pay-chip">
          <svg className="chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <line x1="2" y1="10" x2="22" y2="10"/>
          </svg>
          <span className="chip-label">Pay &amp; Join Game</span>
        </button>
      </div>
    </div>
  );
};

export default Part6;