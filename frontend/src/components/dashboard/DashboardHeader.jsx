import React, { useState } from 'react';
import '../../styles/dashboard.css';

const DashboardHeader = () => {
  const [timeframe, setTimeframe] = useState('30D');

  return (
    <div className="dashboard-header-strip">
      
      {/* LEFT: Context */}
      <div className="header-left">
        <h1 className="header-title">Wheat – Gujarat Region</h1>
        <span className="header-subtitle">Live Market Intelligence</span>
      </div>

      {/* CENTER: Timeframe Selectors */}
      <div className="header-center">
        <div className="timeframe-group">
          <button 
            className={`timeframe-btn ${timeframe === '7D' ? 'active' : ''}`}
            onClick={() => setTimeframe('7D')}
          >
            7D
          </button>
          <button 
            className={`timeframe-btn ${timeframe === '30D' ? 'active' : ''}`}
            onClick={() => setTimeframe('30D')}
          >
            30D
          </button>
          <button 
            className={`timeframe-btn ${timeframe === '90D' ? 'active' : ''}`}
            onClick={() => setTimeframe('90D')}
          >
            90D
          </button>
        </div>
      </div>

      {/* RIGHT: Status */}
      <div className="header-right">
        <div className="confidence-badge">
          86% Confidence
        </div>
        <span className="header-timestamp">Last Updated: 26 Feb 2026, 12:00 PM</span>
      </div>

    </div>
  );
};

export default DashboardHeader;
