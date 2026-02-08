import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";

const projects = [
  {
    id: "project_01",
    client: "Everlane",
    title: "Brand refresh rollout",
    status: "Active",
    milestone: "Identity system review",
    due: "Sep 12",
    progress: "70%",
  },
  {
    id: "project_02",
    client: "Northwind",
    title: "Paid social revamp",
    status: "Active",
    milestone: "Creative testing sprint",
    due: "Sep 18",
    progress: "45%",
  },
  {
    id: "project_03",
    client: "Riverline",
    title: "SEO content engine",
    status: "On Hold",
    milestone: "Keyword clustering",
    due: "Sep 28",
    progress: "25%",
  },
  {
    id: "project_04",
    client: "Atlas",
    title: "Lifecycle automation",
    status: "Completed",
    milestone: "Post-launch QA",
    due: "Aug 30",
    progress: "100%",
  },
];

const ProjectsView = () => {
  const { logout } = useAuth();

  return (
    <div className="page projects">
      <header className="top-bar">
        <Link className="logo" to="/projects">
          servicely
        </Link>
        <div className="top-search">
          <input placeholder="Search projects or clients..." aria-label="Search" />
        </div>
        <div className="top-actions">
          <button type="button" className="icon-button" aria-label="Notifications">
            🔔
          </button>
          <button type="button" className="icon-button" aria-label="Messages">
            💬
          </button>
          <details className="profile-menu">
            <summary className="profile-chip">
              <span className="avatar" aria-hidden />
              <span>Projects</span>
              <span aria-hidden>▾</span>
            </summary>
            <div className="profile-panel">
              <Link to="/agency/dashboard">Agency dashboard</Link>
              <Link to="/client/dashboard">Client dashboard</Link>
              <button type="button" onClick={logout}>
                Logout
              </button>
            </div>
          </details>
        </div>
      </header>

      <section className="projects-hero">
        <div>
          <h1>Projects</h1>
          <p>Track long-term engagements, milestones, and client approvals.</p>
        </div>
        <div className="projects-actions">
          <Link className="ghost-pill" to="/projects/new">
            New project
          </Link>
          <Link className="primary-button" to="/messages">
            Message clients
          </Link>
        </div>
      </section>

      <section className="projects-tabs">
        <button className="tab active" type="button">
          Active
        </button>
        <button className="tab" type="button">
          On hold
        </button>
        <button className="tab" type="button">
          Completed
        </button>
      </section>

      <section className="projects-table">
        <div className="projects-row header">
          <span>Client</span>
          <span>Project</span>
          <span>Milestone</span>
          <span>Status</span>
          <span>Due</span>
          <span>Progress</span>
          <span />
        </div>
        {projects.map((project) => (
          <div className="projects-row" key={project.id}>
            <span>{project.client}</span>
            <span>{project.title}</span>
            <span>{project.milestone}</span>
            <span className={`status-pill status-${project.status.toLowerCase().replace(" ", "-")}`}>
              {project.status}
            </span>
            <span>{project.due}</span>
            <span>{project.progress}</span>
            <Link className="secondary-button" to={`/projects/${project.id}`}>
              Manage
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectsView;
