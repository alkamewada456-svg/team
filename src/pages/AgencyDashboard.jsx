import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";

const AgencyDashboard = () => {
  const { logout, switchRole } = useAuth();
  const navigate = useNavigate();

  const handleRoleSwitch = (role, path) => {
    switchRole(role);
    navigate(path);
  };

  return (
    <div className="page dashboard">
      <header className="top-bar">
        <Link className="logo" to="/agency/dashboard">
          servicely
        </Link>
        <div className="top-search">
          <input placeholder="Search services, orders, or freelancers..." aria-label="Search" />
        </div>
        <div className="top-actions">
          <details className="notification-menu">
            <summary className="icon-button" aria-label="Notifications">
              🔔
            </summary>
            <div className="notification-panel">
              <Link to="/orders">New order from Atlas</Link>
              <Link to="/messages">New message from Everlane</Link>
              <Link to="/agency/jobs">2 freelancer applications</Link>
            </div>
          </details>
          <Link className="icon-button" to="/messages" aria-label="Messages">
            💬
          </Link>
          <details className="profile-menu">
            <summary className="profile-chip">
              <span className="avatar" aria-hidden />
              <span>Horizon Agency</span>
              <span aria-hidden>▾</span>
            </summary>
            <div className="profile-panel">
              <Link to="/agency/profile">Profile</Link>
              <div className="profile-subpanel">
                <span>Switch Role</span>
                <button
                  type="button"
                  onClick={() => handleRoleSwitch("agency", "/agency/dashboard")}
                >
                  Agency
                </button>
                <button
                  type="button"
                  onClick={() => handleRoleSwitch("freelancer", "/freelancer/dashboard")}
                >
                  Freelancer
                </button>
                <button
                  type="button"
                  onClick={() => handleRoleSwitch("client", "/client/dashboard")}
                >
                  Client
                </button>
              </div>
              <Link to="/settings">Settings</Link>
              <button type="button" onClick={logout}>
                Logout
              </button>
            </div>
          </details>
        </div>
      </header>

      <div className="dashboard-shell">
        <aside className="sidebar">
          <Link className="sidebar-item active" to="/agency/dashboard">
            Dashboard
          </Link>
          <Link className="sidebar-item" to="/messages">
            Messages
          </Link>
          <Link className="sidebar-item" to="/orders">
            Orders
          </Link>
          <Link className="sidebar-item" to="/agency/services">
            Services
          </Link>
          <Link className="sidebar-item" to="/agency/jobs">
            Freelance Jobs
          </Link>
          <Link className="sidebar-item" to="/earnings">
            Earnings
          </Link>
          <Link className="sidebar-item" to="/analytics">
            Analytics
          </Link>
          <div className="sidebar-group">
            <span className="sidebar-item">More</span>
            <div className="sidebar-subitems">
              <Link to="/agency/team">Team</Link>
              <Link to="/settings">Settings</Link>
            </div>
          </div>
          <div className="sidebar-card">
            <p>Agency-first workspace for services, clients, and freelancers.</p>
          </div>
        </aside>

        <main className="dashboard-main">
          <section className="welcome-card">
            <h1>Good afternoon, Horizon Agency</h1>
            <p>Keep services active, projects on track, and freelancers aligned.</p>
          </section>

          <section className="stats-grid">
            <div className="stat-card">
              <h3>Earnings</h3>
              <p>$42,300</p>
              <span>+12% this month</span>
            </div>
            <div className="stat-card">
              <h3>Orders</h3>
              <p>128</p>
              <span>24 active</span>
            </div>
            <div className="stat-card">
              <h3>Active Services</h3>
              <p>14</p>
              <span>3 new drafts</span>
            </div>
            <div className="stat-card">
              <h3>Response Rate</h3>
              <p>96%</p>
              <span>Last 30 days</span>
            </div>
          </section>

          <section className="performance-card">
            <div>
              <h2>Performance overview</h2>
              <p>Keep response times under 2 hours to stay in the top agencies.</p>
            </div>
            <div className="performance-metrics">
              <div>
                <h4>Avg. response time</h4>
                <p>1h 45m</p>
              </div>
              <div>
                <h4>Repeat clients</h4>
                <p>68%</p>
              </div>
              <div>
                <h4>On-time delivery</h4>
                <p>94%</p>
              </div>
            </div>
          </section>

          <section className="actions-grid">
            <Link className="action-card" to="/agency/services/new">
              <h3>Create New Service</h3>
              <p>Launch an agency offer with packages and timelines.</p>
            </Link>
            <Link className="action-card" to="/agency/jobs/new">
              <h3>Post Freelance Job</h3>
              <p>Share the role, skills, budget, and duration needed.</p>
            </Link>
            <Link className="action-card" to="/agency/jobs">
              <h3>View Freelance Jobs</h3>
              <p>Review applicants and manage active job posts.</p>
            </Link>
            <Link className="action-card" to="/messages">
              <h3>Messages</h3>
              <p>Respond to client and freelancer conversations.</p>
            </Link>
            <Link className="action-card" to="/orders">
              <h3>Orders</h3>
              <p>Track delivery deadlines and client feedback.</p>
            </Link>
          </section>
        </main>

        <aside className="right-rail">
          <div className="card small">
            <h3>Freelance Jobs</h3>
            <p>3 roles need applicants this week.</p>
            <div className="pill-row">
              <Link className="ghost-pill" to="/agency/jobs/new">
                Post job
              </Link>
              <Link className="ghost-pill" to="/agency/jobs">
                View jobs
              </Link>
            </div>
          </div>
          <div className="card small stats">
            <div>
              <h4>Orders in queue</h4>
              <p>11</p>
            </div>
            <div>
              <h4>Avg rating</h4>
              <p>4.9</p>
            </div>
            <div>
              <h4>Freelancers hired</h4>
              <p>23</p>
            </div>
          </div>
          <div className="card small">
            <h4>Quick actions</h4>
            <Link className="ghost-pill" to="/agency/services/new">
              New service
            </Link>
            <Link className="ghost-pill" to="/agency/jobs/new">
              Post job
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AgencyDashboard;
