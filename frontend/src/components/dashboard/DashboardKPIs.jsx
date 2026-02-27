import React from 'react';
import '../../styles/dashboard.css';

const kpiData = [
  {
    id: 'current_price',
    label: 'CURRENT PRICE',
    value: '₹2,450',
    insight: '+2.4% vs last week',
    direction: 'positive'
  },
  {
    id: 'forecast_price',
    label: 'FORECAST PRICE (30D)',
    value: '₹2,510',
    insight: 'Expected upward trend',
    direction: 'positive'
  },
  {
    id: 'demand_index',
    label: 'DEMAND INDEX',
    value: '92.4',
    insight: '-1.1% vs yesterday',
    direction: 'negative'
  },
  {
    id: 'volatility_score',
    label: 'VOLATILITY SCORE',
    value: 'Moderate',
    insight: 'Market stable',
    direction: 'medium'
  },
  {
    id: 'model_confidence',
    label: 'MODEL CONFIDENCE',
    value: '86%',
    insight: 'High reliability',
    direction: 'positive'
  }
];

const DashboardKPIs = () => {
  return (
    <div className="kpi-row-wrapper">
      <div className="kpi-row">
        {kpiData.map((kpi) => (
          <div key={kpi.id} className="kpi-card">
            <div className="kpi-label">{kpi.label}</div>
            <div className="kpi-value">{kpi.value}</div>
            <div className={`kpi-insight indicator-${kpi.direction}`}>
              {kpi.direction === 'positive' && <span className="dir-icon">↑</span>}
              {kpi.direction === 'negative' && <span className="dir-icon">↓</span>}
              {kpi.direction === 'medium' && <span className="dir-icon">−</span>}
              {kpi.insight}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardKPIs;
