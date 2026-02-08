import React from "react";

const AgencyProfile = () => {
  return (
    <div className="page agency-profile">
      <header className="profile-hero">
        <div>
          <p className="profile-tag">Agency profile</p>
          <h1>Horizon Agency</h1>
          <p>Full-stack growth partner for B2B SaaS teams.</p>
        </div>
        <button className="primary-button" type="button">
          Contact agency
        </button>
      </header>

      <section className="profile-grid">
        <div className="profile-card">
          <h3>About</h3>
          <p>
            Horizon Agency helps scaling teams launch campaigns, build brand systems,
            and execute growth programs with a dedicated team of specialists.
          </p>
        </div>
        <div className="profile-card">
          <h3>Services</h3>
          <ul>
            <li>Brand identity & positioning</li>
            <li>Performance marketing</li>
            <li>Lifecycle automation</li>
          </ul>
        </div>
        <div className="profile-card">
          <h3>Case studies</h3>
          <p>42% revenue lift for Atlas · 3x pipeline growth for Northwind.</p>
        </div>
        <div className="profile-card">
          <h3>Reviews</h3>
          <p>4.9 average rating · 28 verified client reviews.</p>
        </div>
      </section>
    </div>
  );
};

export default AgencyProfile;
