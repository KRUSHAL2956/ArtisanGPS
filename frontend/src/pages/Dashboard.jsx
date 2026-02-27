import React from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardKPIs from '../components/dashboard/DashboardKPIs';
import DashboardChart from '../components/dashboard/DashboardChart';
import DashboardInsight from '../components/dashboard/DashboardInsight';
import DashboardDecision from '../components/dashboard/DashboardDecision';
import DashboardCluster from '../components/dashboard/DashboardCluster';
import '../styles/dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <DashboardHeader />
      <DashboardKPIs />
      <DashboardChart />
      <DashboardInsight />
      <DashboardDecision />
      <DashboardCluster />
      
      {/* 
        Future Dashboard Content will go here 
        (Data tables, recommendation engine etc.) 
      */}
    </div>
  );
};

export default Dashboard;
