import React, { useState } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Left Side: Brand Area */}
        <a href="/" className="navbar-brand">
          <img src="/src/assets/images/logo.png" alt="ArtisanGPS Logo" className="brand-icon-img" style={{height: "56px", width: "auto"}} />
        </a>

        {/* Center: Navigation Links (Hidden <992px) */}
        <div className="navbar-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#architecture" className="nav-link">Architecture</a>
        </div>

        {/* Right Side: Auth & Menu Toggle */}
        <div className="navbar-right">
          <a href="/login" className="nav-login-btn desktop-only">Login</a>
          
          {/* Mobile Menu Toggle button (Shown <992px) */}
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMenu} 
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-links">
            <a href="#features" className="mobile-nav-link" onClick={toggleMenu}>Features</a>
            <a href="#how-it-works" className="mobile-nav-link" onClick={toggleMenu}>How It Works</a>
            <a href="#architecture" className="mobile-nav-link" onClick={toggleMenu}>Architecture</a>
            <hr className="mobile-menu-divider" />
            <a href="/login" className="mobile-nav-link" onClick={toggleMenu}>Login</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
