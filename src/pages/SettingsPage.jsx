import React from "react";

const SettingsPage = () => {
  return (
    <div className="page settings">
      <header className="top-bar">
        <div>
          <h1>Settings</h1>
          <p>Manage profile, billing, team, notifications, and security.</p>
        </div>
      </header>

      <div className="settings-grid">
        <section className="settings-card">
          <h3>Profile</h3>
          <p>Update agency details, contact info, and branding.</p>
          <button className="ghost-pill" type="button">
            Edit profile
          </button>
        </section>
        <section className="settings-card">
          <h3>Billing</h3>
          <p>Manage subscription plans and payment methods.</p>
          <button className="ghost-pill" type="button">
            Manage billing
          </button>
        </section>
        <section className="settings-card">
          <h3>Team</h3>
          <p>Invite members and assign roles.</p>
          <button className="ghost-pill" type="button">
            Manage team
          </button>
        </section>
        <section className="settings-card">
          <h3>Notifications</h3>
          <p>Control alerts for orders, projects, and messages.</p>
          <button className="ghost-pill" type="button">
            Notification settings
          </button>
        </section>
        <section className="settings-card">
          <h3>Security</h3>
          <p>Configure password, 2FA, and login devices.</p>
          <button className="ghost-pill" type="button">
            Security settings
          </button>
        </section>
      </div>
    </div>
  );
};

export default SettingsPage;
