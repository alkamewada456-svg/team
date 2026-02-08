import React from "react";

const AnalyticsPage = () => {
  return (
    <div className="page analytics">
      <header className="top-bar">
        <div>
          <h1>Analytics</h1>
          <p>Monitor revenue, orders completed, response rate, and utilization.</p>
        </div>
      </header>

      <div className="analytics-grid">
        <div className="stat-card">
          <h3>Revenue</h3>
          <p>$42,300</p>
          <span>+12% this month</span>
        </div>
        <div className="stat-card">
          <h3>Orders completed</h3>
          <p>86</p>
          <span>24 active</span>
        </div>
        <div className="stat-card">
          <h3>Response rate</h3>
          <p>96%</p>
          <span>Last 30 days</span>
        </div>
        <div className="stat-card">
          <h3>Freelancer utilization</h3>
          <p>72%</p>
          <span>Active assignments</span>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
