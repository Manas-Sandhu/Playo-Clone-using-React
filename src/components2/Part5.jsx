import React from 'react';
import './Part5.css';

function Part5() {
  return (
    <footer className="about-faq">
      <div className="footer-inner">
        {/* Left: Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            PLAY<span className="footer-logo-o">O</span>
          </div>
          <p className="footer-copy">
            © 2026 Techmash Solutions Pvt. Ltd.<br />
            All Rights Reserved.
          </p>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4 className="footer-col-title">Company</h4>
          <a href="#" className="footer-link">About Us</a>
          <a href="#" className="footer-link">Blogs</a>
          <a href="#" className="footer-link">Contact</a>
          <a href="#" className="footer-link">Careers</a>
          <a href="#" className="footer-link">Partner With Us</a>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4 className="footer-col-title">Social</h4>
          <a href="#" className="footer-link">Instagram</a>
          <a href="#" className="footer-link">Facebook</a>
          <a href="#" className="footer-link">LinkedIn</a>
          <a href="#" className="footer-link">Twitter</a>
        </div>

        {/* Privacy & Terms */}
        <div className="footer-col">
          <h4 className="footer-col-title">Privacy &amp; Terms</h4>
          <a href="#" className="footer-link">FAQs</a>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Cancellation Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Part5;