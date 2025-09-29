import React from "react";
import "../styles/Footer.css";
// You can also import images here if they are part of your project assets
// import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="copyright-text">
          &copy; 2025 Lumonex. All rights reserved.
        </p>
        <div className="social-links">
          <span>Follow us on:</span>
          <a href="#facebook" className="social-link facebook">
            Facebook
          </a>{" "}
          |
          <a href="#twitter" className="social-link twitter">
            Twitter
          </a>{" "}
          |
          <a href="#instagram" className="social-link instagram">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;