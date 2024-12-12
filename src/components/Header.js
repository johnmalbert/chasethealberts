// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header.css'; // Import corresponding styles

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>
          <Link to="/">
            <img 
              src="/images/banner.jpg" 
              alt="chasethealberts" 
              className="header-img" 
            />
          </Link>
        </h1>
      </div>
      
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/japan">Japan</Link></li>
          <li><Link to="/PNW">PNW</Link></li>
        </ul>
      </nav>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
