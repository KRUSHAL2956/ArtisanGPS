import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import '../styles/auth.css';
import logoImg from '../assets/images/logo.png';
import authBg from '../assets/images/auth-bg.png';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    setIsSignup(location.pathname === '/signup');
  }, [location.pathname]);

  const toggleMode = () => {
    const newMode = !isSignup;
    navigate(newMode ? '/signup' : '/login', { replace: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="auth-page-premium">
      <div className="auth-container">
        
        {/* LEFT SIDE - IMAGE SECTION (60%) */}
        <div className="auth-image-side">
          <img src={authBg} alt="Premium Workspace" className="auth-hero-img" />
        </div>

        {/* RIGHT SIDE - FORM SECTION (40%) */}
        <div className="auth-form-side">
          <div className="auth-form-inner">
            
            <Link to="/" className="auth-brand-link">
              <img src={logoImg} alt="ArtisanGPS" className="auth-brand-logo" />
            </Link>

            <div className={`auth-view-wrapper ${isSignup ? 'show-signup' : 'show-login'}`}>
              
              {/* LOGIN VIEW */}
              <div className="auth-view login-view">
                <div className="auth-view-header">
                  <h2>Welcome Back</h2>
                  <p>Access your market intelligence dashboard.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="premium-form">
                  <div className="premium-input-group">
                    <label>Email</label>
                    <input type="email" required placeholder="name@company.com" />
                  </div>
                  <div className="premium-input-group">
                    <label>Password</label>
                    <input type="password" required placeholder="••••••••" />
                  </div>
                  
                  <div className="premium-form-meta">
                    <label className="premium-checkbox">
                      <input type="checkbox" />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className="premium-forgot-link">Forgot password?</a>
                  </div>
                  
                  <button className="btn-premium-primary" type="submit">Log In</button>
                  
                  <div className="premium-auth-footer">
                    <span className="footer-mute">New here? </span>
                    <button type="button" onClick={toggleMode} className="btn-switch-mode">
                      Create an account
                    </button>
                  </div>
                </form>
              </div>

              {/* SIGNUP VIEW */}
              <div className="auth-view signup-view">
                <div className="auth-view-header">
                  <h2>Create an Account</h2>
                  <p>Start predicting market shifts with precision.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="premium-form">
                  <div className="premium-input-group">
                    <label>Full Name</label>
                    <input type="text" required placeholder="Jane Doe" />
                  </div>
                  <div className="premium-input-group">
                    <label>Email</label>
                    <input type="email" required placeholder="name@company.com" />
                  </div>
                  <div className="premium-input-group">
                    <label>Password</label>
                    <input type="password" required placeholder="••••••••" />
                  </div>
                  
                  <button className="btn-premium-primary" type="submit">Create Account</button>
                  
                  <div className="premium-auth-footer">
                    <span className="footer-mute">Already have an account? </span>
                    <button type="button" onClick={toggleMode} className="btn-switch-mode">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Auth;
