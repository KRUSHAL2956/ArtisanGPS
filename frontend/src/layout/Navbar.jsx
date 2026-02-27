import React, { useState, useEffect } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Left Side: Brand Area */}
        <Link to={isAuthenticated ? "/dashboard" : "/"} className="navbar-brand" onClick={handleLinkClick}>
          <img src="/src/assets/images/logo.png" alt="ArtisanGPS Logo" className="brand-icon-img" style={{height: "56px", width: "auto"}} />
        </Link>

        {/* Center: Navigation Links (Hidden <992px) */}
        <div className="navbar-links">
          {!isAuthenticated ? (
            <>
              <a href="/#features" className="nav-link">Features</a>
              <a href="/#how-it-works" className="nav-link">How It Works</a>
              <a href="/#architecture" className="nav-link">Architecture</a>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <Link to="/market-analysis" className="nav-link">Market Analysis</Link>
              <Link to="/decision-center" className="nav-link">Decision Center</Link>
              <Link to="/ai-insight" className="nav-link">AI Insight</Link>
            </>
          )}
        </div>

        {/* Right Side: Auth & Menu Toggle */}
        <div className="navbar-right">
          {!isAuthenticated ? (
            <Link to="/login" className="nav-login-btn desktop-only">Login</Link>
          ) : (
            <button onClick={handleLogout} className="nav-login-btn desktop-only" style={{ background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}>
              <LogOut size={18} /> Logout
            </button>
          )}
          
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
            {!isAuthenticated ? (
              <>
                <a href="/#features" className="mobile-nav-link" onClick={handleLinkClick}>Features</a>
                <a href="/#how-it-works" className="mobile-nav-link" onClick={handleLinkClick}>How It Works</a>
                <a href="/#architecture" className="mobile-nav-link" onClick={handleLinkClick}>Architecture</a>
                <hr className="mobile-menu-divider" />
                <Link to="/login" className="mobile-nav-link" onClick={handleLinkClick}>Login</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="mobile-nav-link" onClick={handleLinkClick}>Dashboard</Link>
                <Link to="/market-analysis" className="mobile-nav-link" onClick={handleLinkClick}>Market Analysis</Link>
                <Link to="/decision-center" className="mobile-nav-link" onClick={handleLinkClick}>Decision Center</Link>
                <Link to="/ai-insight" className="mobile-nav-link" onClick={handleLinkClick}>AI Insight</Link>
                <hr className="mobile-menu-divider" />
                <button onClick={handleLogout} className="mobile-nav-link" style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', width: '100%', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', marginTop: '10px' }}>
                  <LogOut size={18} /> Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
