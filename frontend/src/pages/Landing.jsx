import React, { useEffect, useRef } from 'react';
import { Tag, BarChart2, AlertTriangle } from 'lucide-react';
import '../styles/hero.css';
import '../styles/problem.css';
import '../styles/how.css';
import '../styles/intelligence.css';
import '../styles/cta.css';
import '../styles/footer.css';
import '../styles/motion.css';

const Landing = () => {
  const heroRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const problemGridRef = useRef(null);
  const solutionRef = useRef(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    const imageEl = imageWrapperRef.current;
    if (!heroEl || !imageEl) return;

    let targetX = 0;
    let targetY = 0;
    let isMoving = false;
    let animationsFinished = false;

    // Wait for the heavy CSS entrance animations to complete before binding hover state
    // 700ms delay + 1200ms duration = 1900ms
    const timer = setTimeout(() => {
      animationsFinished = true;
      if (imageEl) {
        imageEl.style.animation = 'none'; // remove keyframe block
        imageEl.style.opacity = '1';
        imageEl.style.transition = 'transform 400ms ease-out';
      }
    }, 1900);

    const handleMouseMove = (e) => {
      if (!animationsFinished) return;
      const rect = heroEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPct = (x / rect.width) * 2 - 1;
      const yPct = (y / rect.height) * 2 - 1;

      targetX = -yPct * 1.5; 
      targetY = xPct * 1.5;

      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(updateTransform);
      }
    };

    const handleMouseLeave = () => {
      if (!animationsFinished) return;
      targetX = 0;
      targetY = 0;
      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(updateTransform);
      }
    };

    const updateTransform = () => {
      if (imageEl) {
        imageEl.style.transform = `translateY(0px) scale(1) perspective(1400px) rotateX(${targetX}deg) rotateY(${targetY}deg)`;
      }
      isMoving = false;
    };

    // Global Scroll Direction Tracker
    let lastScrollY = window.scrollY;
    let scrollDirection = 'down';

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Global Intersection Observer
    const globalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add('in-view');
            el.classList.remove('exit-left', 'exit-right', 'exit-up');
          } else {
            if (scrollDirection === 'up') {
              if (el.classList.contains('reveal-left')) el.classList.add('exit-right');
              else if (el.classList.contains('reveal-right')) el.classList.add('exit-left');
              else if (el.classList.contains('reveal-up')) el.classList.add('exit-up');
            }
            if (scrollDirection === 'down' || scrollDirection === 'up') {
              el.classList.remove('in-view');
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    // Observe all globally tracked elements
    setTimeout(() => {
      const animatedEls = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
      animatedEls.forEach(el => globalObserver.observe(el));
    }, 100);

    heroEl.addEventListener('mousemove', handleMouseMove, { passive: true });
    heroEl.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      heroEl.removeEventListener('mousemove', handleMouseMove);
      heroEl.removeEventListener('mouseleave', handleMouseLeave);
      globalObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-micro-label">Market Intelligence for Businesses That Refuse to Guess</div>
            <h1 className="hero-title">
              Own the Market.
            </h1>
            <h2 className="hero-subtitle">
              Price with precision. Produce with confidence. Protect every margin.
            </h2>
            <p className="hero-description">
              Stop relying on instinct and outdated spreadsheets.<br/>
              ArtisanGPS delivers forward-looking market clarity — so every pricing, production, and risk decision is intentional.
            </p>
            <div className="hero-cta-group">
              <button className="btn-hero-primary">Get Your Market Forecast</button>
              <button className="btn-hero-secondary">Explore How It Works</button>
            </div>
          </div>

          <div className="hero-image-wrapper" ref={imageWrapperRef}>
            <img 
              src="/src/assets/images/human-hero-preview.png"
              alt="Small business team reviewing data" 
              className="hero-main-image"
            />
            <div className="hero-gloss"></div>

            <div className="hero-floating-card reveal-up" style={{ transitionDelay: '800ms' }}>
              <div className="forecast-header">
                  Wheat – Gujarat Region
              </div>
              <div className="forecast-price">
                  ₹2,340
                  <span className="forecast-change positive">+4.2%</span>
              </div>
              <div className="forecast-chart"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Decision Problem & Solution (Features) */}
      <section id="features" className="problem-solution-section" ref={problemGridRef}>
        <div className="problem-solution-inner">
          <div className="problem-solution-grid">
            {/* Left: Pain Points */}
            <div className="pain-column">
              <div className="pain-card reveal-left" style={{ transitionDelay: '0ms' }}>
                <h3 className="pain-card-title">Pricing Without Data Is Gambling.</h3>
                <p className="pain-card-text">Set the wrong price, and margins disappear. Set it late, and competitors take the advantage.</p>
              </div>
              <div className="pain-card reveal-left" style={{ transitionDelay: '100ms' }}>
                <h3 className="pain-card-title">Demand Uncertainty Slows Growth.</h3>
                <p className="pain-card-text">Overproduce and inventory sits idle. Underproduce and revenue is lost before you can respond.</p>
              </div>
              <div className="pain-card reveal-left" style={{ transitionDelay: '200ms' }}>
                <h3 className="pain-card-title">Hidden Risk Erodes Profit.</h3>
                <p className="pain-card-text">Seasonal shifts, market volatility, and cost fluctuations quietly reduce profitability.</p>
              </div>
            </div>

            {/* Right: Solutions */}
            <div className="solution-column">
              <div className="solution-card reveal-right" style={{ transitionDelay: '0ms' }}>
                <h3 className="solution-card-title">Data-Driven Pricing</h3>
                <p className="solution-card-text">Set pricing based on forward-looking intelligence instead of assumptions.</p>
              </div>
              <div className="solution-card reveal-right" style={{ transitionDelay: '100ms' }}>
                <h3 className="solution-card-title">Demand Forecasting</h3>
                <p className="solution-card-text">Anticipate market shifts early and align production with confidence.</p>
              </div>
              <div className="solution-card reveal-right" style={{ transitionDelay: '200ms' }}>
                <h3 className="solution-card-title">Risk Protection Engine</h3>
                <p className="solution-card-text">Detect volatility patterns before they impact margins.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section id="how-it-works" className="how-section">
        <div className="how-inner">
          <div className="how-header reveal-up">
            <h2 className="how-heading">From Signal to Strategy in Three Moves.</h2>
            <p className="how-subheading">
              A streamlined system that turns complex data into clear direction.
            </p>
          </div>

          <div className="how-steps">
            <div className="step-card reveal-left" style={{ transitionDelay: '0ms' }}>
              <h3 className="step-title">01 – Connect Your Market Signals</h3>
              <p className="step-text">
                Input your commodity, region, and cost structure. ArtisanGPS integrates live pricing data and historical demand patterns automatically.
              </p>
            </div>
            
            <div className="step-card reveal-up" style={{ transitionDelay: '120ms' }}>
              <h3 className="step-title">02 – Analyze & Forecast</h3>
              <p className="step-text">
                Our predictive engine evaluates price movement, seasonal trends, and volatility to generate actionable projections.
              </p>
            </div>
            
            <div className="step-card reveal-right" style={{ transitionDelay: '240ms' }}>
              <h3 className="step-title">03 – Execute With Clarity</h3>
              <p className="step-text">
                Receive structured recommendations that guide pricing, production, and risk decisions in plain language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Intelligence Engine (Compressed) */}
      <section id="architecture" className="intelligence-section">
        <div className="intelligence-inner">
          <div className="intelligence-header reveal-up">
            <h2 className="intelligence-heading">Engineered for Predictive Control.</h2>
          </div>

          <div className="intelligence-grid-compressed">
            <div className="architecture-block reveal-up" style={{ transitionDelay: '0ms' }}>
              <div className="architecture-block-title">Market Data Integration</div>
              <div className="architecture-block-desc">Consolidating disparate pricing signals into one source of truth.</div>
            </div>
            <div className="architecture-block reveal-up" style={{ transitionDelay: '100ms' }}>
              <div className="architecture-block-title">Seasonal & Demand Modeling</div>
              <div className="architecture-block-desc">Mapping historical trends to future projections and cycles.</div>
            </div>
            <div className="architecture-block reveal-up" style={{ transitionDelay: '200ms' }}>
              <div className="architecture-block-title">Predictive Forecast Engine</div>
              <div className="architecture-block-desc">Statistical AI models generating forward-looking clarity.</div>
            </div>
            <div className="architecture-block reveal-up" style={{ transitionDelay: '300ms' }}>
              <div className="architecture-block-title">Decision & Risk Optimization</div>
              <div className="architecture-block-desc">Translating mathematics into actionable business recommendations.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Final CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-card reveal-up" style={{ transitionDelay: '0ms' }}>
            <h2 className="cta-heading">Take Control of Your Market.</h2>
            <p className="cta-subheading">
              Stop reacting to change. Start leading with clarity.
            </p>
            <div className="cta-button-group">
              <button className="btn-cta-primary reveal-up" style={{ transitionDelay: '150ms' }}>
                Get Your Market Forecast
              </button>
              <button className="btn-cta-secondary reveal-up" style={{ transitionDelay: '300ms' }}>
                Explore the Platform
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top reveal-up" style={{ transitionDelay: '0ms' }}>
            
            {/* Brand Block */}
            <div className="footer-brand">
              <div className="footer-brand-name">ArtisanGPS</div>
              <div className="footer-brand-tagline">Own the Market.</div>
              <div className="footer-brand-desc">
                ArtisanGPS delivers structured market intelligence for serious small businesses ready to operate with clarity.
              </div>
              <span className="footer-brand-highlight">Predict. Optimize. Protect.</span>
            </div>

            {/* Navigation Columns */}
            <div className="footer-col">
              <div className="footer-col-title">Product</div>
              <a href="#features" className="footer-link">Features</a>
              <a href="#how-it-works" className="footer-link">How It Works</a>
              <a href="#architecture" className="footer-link">Intelligence Engine</a>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Resources</div>
              <a href="#docs" className="footer-link">Documentation</a>
              <a href="#insights" className="footer-link">Market Insights</a>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Company</div>
              <a href="#contact" className="footer-link">Contact</a>
              <a href="#privacy" className="footer-link">Privacy Policy</a>
              <a href="#terms" className="footer-link">Terms of Service</a>
            </div>
            
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom reveal-up" style={{ transitionDelay: '100ms' }}>
            <div className="footer-bottom-text">
              © 2026 ArtisanGPS. All rights reserved.
            </div>
            <div className="footer-bottom-links">
              Privacy Policy | Terms of Service
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
