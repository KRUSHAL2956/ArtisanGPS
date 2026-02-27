import React from 'react';
import '../../styles/dashboard.css';

const DashboardInsight = () => {
  return (
    <div className="insight-section-wrapper">
      <div className="insight-card">
        
        {/* Header Strip */}
        <div className="insight-header">
          <h2 className="insight-title">AI Market Summary</h2>
          <div className="risk-badge risk-moderate">
            Moderate Risk
          </div>
        </div>

        {/* 3 Structured Blocks */}
        <div className="insight-grid">
          
          {/* Block 1: Market Direction */}
          <div className="insight-block">
            <h3 className="insight-block-title">Market Direction</h3>
            <p className="insight-block-text">
              Wheat prices in the Gujarat region are experiencing sustained upward pressure. 
              Recent erratic precipitation patterns coupled with steady domestic demand are 
              expected to drive a 2.4% price appreciation over the next 30 days.
            </p>
          </div>

          {/* Block 2: Risk Assessment */}
          <div className="insight-block">
            <h3 className="insight-block-title">Risk Assessment</h3>
            <p className="insight-block-text">
              Volatility remains within normal bounds, but supply chain bottlenecks present 
              a latent vulnerability. The model classifies the near-term risk environment as 
              moderate, requiring standard hedging protocols.
            </p>
          </div>

          {/* Block 3: Recommended Strategy */}
          <div className="insight-block">
            <h3 className="insight-block-title">Recommended Strategy</h3>
            <p className="insight-block-text">
              Accelerate procurement for Q3 inventory to lock in current rates. Defer long-term 
              surplus accumulation until post-harvest stabilization expected in early October.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DashboardInsight;
