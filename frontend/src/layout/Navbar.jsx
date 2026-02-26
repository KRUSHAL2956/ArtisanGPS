import React, { useState } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar">
      <div className="navbar-container">
        
        {/* Left Side: Brand Area */}
        <a href="/" className="navbar-brand">
          <img src="/src/assets/images/logo.png" alt="ArtisanGPS Logo" className="brand-icon-img" style={{height: "56px", width: "auto"}} />
        </a>

        {/* Center: Navigation Links (Hidden <992px) */}
        <nav className="navbar-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#architecture" className="nav-link">Architecture</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </nav>

        {/* Right Side: Auth Buttons (Hidden <768px, shown strictly in mobile menu) */}
        <div className="navbar-auth desktop-auth">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Get Forecast</button>
        </div>

        {/* Mobile Menu Toggle button (Shown <992px) */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-links">
            <a href="#features" className="mobile-nav-link" onClick={toggleMenu}>Features</a>
            <a href="#how-it-works" className="mobile-nav-link" onClick={toggleMenu}>How It Works</a>
            <a href="#architecture" className="mobile-nav-link" onClick={toggleMenu}>Architecture</a>
            <a href="#pricing" className="mobile-nav-link" onClick={toggleMenu}>Pricing</a>
          </nav>
          
          <div className="mobile-auth">
            <button className="btn-login full-width" onClick={toggleMenu}>Login</button>
            <button className="btn-signup full-width" onClick={toggleMenu}>Get Forecast</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
