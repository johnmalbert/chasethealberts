import React from 'react';
import '../Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media Icons and Links */}
        <a href="https://www.instagram.com/chasethealberts/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@chasethealberts" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://www.tiktok.com/chasethealberts" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>

      {/* Copyright or additional info */}
      <div className="footer-text">
        <p>&copy; 2024 The Alberts | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
