import React from 'react';
import '../../styles/dashboard.css';

const DashboardCluster = () => {
  return (
    <div className="cluster-wrapper">
      <div className="cluster-card">
        
        {/* Header Strip */}
        <div className="cluster-header">
          <h2 className="cluster-title">Regional Opportunity Signals</h2>
          <a href="#" className="cluster-link">View Full Regional Analysis &rarr;</a>
        </div>

        {/* 3 Horizontal Blocks */}
        <div className="cluster-grid">
          
          {/* Block 1: Regional Demand Ranking Table */}
          <div className="cluster-block">
            <h3 className="cluster-subtitle">Top Demand Clusters</h3>
            <table className="cluster-table">
              <thead>
                <tr>
                  <th>Region</th>
                  <th className="text-right">Demand Score</th>
                  <th className="text-right">Trend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium text-dark">Saurashtra</td>
                  <td className="text-right font-semibold">92/100</td>
                  <td className="text-right text-positive">&uarr; +4.2%</td>
                </tr>
                <tr>
                  <td className="font-medium text-dark">North Gujarat</td>
                  <td className="text-right font-semibold">88/100</td>
                  <td className="text-right text-positive">&uarr; +2.8%</td>
                </tr>
                <tr>
                  <td className="font-medium text-dark">Central Gujarat</td>
                  <td className="text-right font-semibold">81/100</td>
                  <td className="text-right text-medium">&rarr; +0.5%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Block 2: Mini Demand Indicator */}
          <div className="cluster-block">
            <h3 className="cluster-subtitle">Demand Velocity</h3>
            <div className="velocity-bars-container">
              
              <div className="velocity-row">
                <span className="velocity-label">Wholesale</span>
                <div className="velocity-track">
                  <div className="velocity-fill fill-high" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="velocity-row">
                <span className="velocity-label">Retail</span>
                <div className="velocity-track">
                  <div className="velocity-fill fill-medium" style={{ width: '60%' }}></div>
                </div>
              </div>

              <div className="velocity-row">
                <span className="velocity-label">Export</span>
                <div className="velocity-track">
                  <div className="velocity-fill fill-low" style={{ width: '30%' }}></div>
                </div>
              </div>

            </div>
          </div>

          {/* Block 3: Opportunity Score Block */}
          <div className="cluster-block align-center-block">
            <h3 className="cluster-subtitle">Aggregate Opportunity</h3>
            
            <div className="opportunity-score-container">
              <span className="opportunity-number">8.2</span>
              <span className="opportunity-max">/ 10</span>
            </div>
            
            <p className="opportunity-text">
              High probability of alpha generation in regional arbitrage plays over the next 14 days.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DashboardCluster;
