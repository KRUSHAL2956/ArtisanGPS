import React from 'react';
import '../../styles/dashboard.css';

const DashboardDecision = () => {
  return (
    <div className="decision-wrapper">
      <div className="decision-grid">
        
        {/* LEFT COLUMN: 60% */}
        <div className="decision-card decision-left">
          
          {/* Section 1: Dynamic Pricing */}
          <div className="decision-section">
            <h3 className="decision-title">Dynamic Pricing Recommendation</h3>
            <div className="pricing-primary">
              <span className="pricing-metric">₹2,480</span>
              <span className="pricing-label">Suggested Selling Price / Quintal</span>
            </div>
            
            <div className="pricing-details-grid">
              <div className="detail-item">
                <span className="detail-label">Current Margin</span>
                <span className="detail-value text-positive">18.5%</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Projected Margin</span>
                <span className="detail-value text-positive">21.2%</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Break-even Threshold</span>
                <span className="detail-value">₹2,090</span>
              </div>
            </div>
          </div>

          <div className="decision-divider"></div>

          {/* Section 2: Production Optimization */}
          <div className="decision-section">
            <h3 className="decision-title">Production Optimization</h3>
            
            <div className="optimization-header">
              <div className="opt-metric-group">
                <span className="opt-value">12,500 MT</span>
                <span className="opt-label">Recommended Quantity</span>
              </div>
              <div className="opt-metric-group align-right">
                <span className="opt-value">Aggressive Growth</span>
                <span className="opt-label">Strategy Mode</span>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-header">
                <span className="progress-label">Capital Allocation Used</span>
                <span className="progress-percent">78%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '78%' }}></div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: 40% */}
        <div className="decision-card decision-right cost-guard-card">
          <h3 className="decision-title">Cost Guard Status</h3>
          
          <div className="cost-guard-content">
            <div className="guard-status-pill status-safe">
              Safe
            </div>
            <p className="guard-message">
              Current operational costs are securely below the regional 30-day moving average. 
              No immediate defensive actions are required. Margin expansion protocols are active.
            </p>

            <div className="guard-metrics">
              <div className="guard-metric-row">
                <span className="guard-metric-label">Regional Avg Cost</span>
                <span className="guard-metric-value">₹2,150</span>
              </div>
              <div className="guard-metric-row">
                <span className="guard-metric-label">Your Blended Cost</span>
                <span className="guard-metric-value text-positive">₹2,045</span>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default DashboardDecision;
