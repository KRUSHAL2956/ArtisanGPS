import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../../styles/dashboard.css';

const DashboardChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');

    // Destroy existing chart to prevent memory leaks during hot reloads
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun (Today)', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Base data
    const historicalData = [2150, 2210, 2180, 2300, 2380, 2450, null, null, null, null, null, null];
    const forecastData = [null, null, null, null, null, 2450, 2490, 2520, 2510, 2560, 2580, 2630];
    const confHigh = [null, null, null, null, null, 2450, 2540, 2590, 2600, 2670, 2710, 2780];
    const confLow = [null, null, null, null, null, 2450, 2440, 2450, 2420, 2450, 2450, 2480];

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Historical',
            data: historicalData,
            borderColor: '#0B3C5D',
            borderWidth: 2.5,
            tension: 0.3,
            pointRadius: 0,
            pointHoverRadius: 5,
            pointBackgroundColor: '#0B3C5D'
          },
          {
            label: 'Forecast',
            data: forecastData,
            borderColor: '#00A8A8',
            borderWidth: 2,
            borderDash: [5, 5],
            tension: 0.3,
            pointRadius: 0,
            pointHoverRadius: 5,
            pointBackgroundColor: '#00A8A8'
          },
          {
            label: 'Confidence High',
            data: confHigh,
            borderColor: 'transparent',
            backgroundColor: 'transparent',
            borderWidth: 0,
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
            tension: 0.3,
          },
          {
            label: 'Confidence Range',
            data: confLow,
            borderColor: 'transparent',
            backgroundColor: 'rgba(0, 168, 168, 0.12)', // Teal 10-15% opacity
            borderWidth: 0,
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: '-1', // Fill to previous dataset (Confidence High)
            tension: 0.3,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 800,
          easing: 'easeOutQuart'
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            display: false // We will use our custom HTML legend
          },
          tooltip: {
            backgroundColor: '#FFFFFF',
            titleColor: '#111827',
            bodyColor: '#475569',
            borderColor: '#E3E8EF',
            borderWidth: 1,
            padding: 12,
            boxPadding: 6,
            usePointStyle: true,
            titleFont: {
              family: "'Inter', -apple-system, sans-serif",
              size: 14,
              weight: '600'
            },
            bodyFont: {
              family: "'Inter', -apple-system, sans-serif",
              size: 13
            },
            callbacks: {
              label: function(context) {
                // Hide Confidence High/Low raw bounds from tooltip, only show the main lines
                if (context.dataset.label === 'Confidence High') return null;
                if (context.dataset.label === 'Confidence Range' && context.raw !== null) {
                   return 'Confidence: ±' + Math.abs(context.chart.data.datasets[1].data[context.dataIndex] - context.raw).toFixed(0);
                }
                if (context.raw !== null) {
                  return context.dataset.label + ': ₹' + context.raw.toLocaleString();
                }
                return null;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              font: {
                family: "'Inter', -apple-system, sans-serif",
                size: 12
              },
              color: '#94A3B8'
            }
          },
          y: {
            grid: {
              color: '#F1F5F9', // Light gray grid
              drawBorder: false,
            },
            ticks: {
              font: {
                family: "'Inter', -apple-system, sans-serif",
                size: 12
              },
              color: '#94A3B8',
              callback: function(value) {
                return '₹' + value.toLocaleString();
              }
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-section-wrapper">
      <div className="chart-card">
        
        {/* Card Header & Custom Legend */}
        <div className="chart-header">
          <h2 className="chart-title">Price Forecast Overview</h2>
          
          <div className="chart-legend">
            <div className="legend-item">
              <span className="legend-marker marker-historical"></span>
              Historical
            </div>
            <div className="legend-item">
              <span className="legend-marker marker-forecast"></span>
              Forecast
            </div>
            <div className="legend-item">
              <span className="legend-marker marker-confidence"></span>
              Confidence Range
            </div>
          </div>
        </div>

        {/* Chart Canvas Container */}
        <div className="chart-canvas-container">
          <canvas ref={chartRef}></canvas>
        </div>

      </div>
    </div>
  );
};

export default DashboardChart;
