import React from "react";
import { useState } from "react";
import "./Footer.css"
export default function Footer() {
  const cities = [
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Vijayawada",
    "Mumbai",
    "Delhi NCR",
    "Visakhapatnam",
    "Guntur",
    "Kochi",
    "Dubai",
    "Qatar",
    "Australia",
    "Oman",
    "Sri Lanka",
  ];
  const footerLinks = {
  Company: ['ABOUT US', 'BLOGS', 'CONTACT', 'CAREERS', 'PARTNER WITH US'],
  Social: ['INSTAGRAM', 'FACEBOOK', 'LINKEDIN', 'TWITTER'],
  'Privacy & Terms': ['FAQS', 'PRIVACY POLICY', 'TERMS OF SERVICE', 'CANCELLATION POLICY'],
};
  const [showAllCities, setShowAllCities] = useState(false);
  const visibleCities = showAllCities ? cities : cities.slice(0, 8);
  return (
    <div>

      <footer className="footer">
        
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-logo">
              PLAY<span className="footer-logo-o">O</span>
            </div>
            <div className="footer-cities-block">
              <h4 className="footer-cities-heading">
                Top Sports Complexes in Cities
              </h4>
              <div className="cities-grid">
                {visibleCities.map((city) => (
                  <button key={city} className="city-btn">
                    {city}
                  </button>
                ))}
              </div>
              <button
                className="cities-toggle"
                onClick={() => {
                  setShowAllCities(!showAllCities);
                }}
              >
                {showAllCities
                  ? "Show less ∧"
                  : `Show all ${cities.length} cities ∨`}
              </button>
            </div>
          </div>

          <div className="footer-links-cols">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div className="footer-col" key={heading}>
                <h4 className="footer-col-title">{heading}</h4>
                <ul className="footer-col-list">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#!" className="footer-link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>


        <div className="footer-bottom">
          <span>Project made by Manas and Palak 2026 WAP project!</span>
        </div>


      </footer>
    </div>
  );
}
