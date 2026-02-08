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

      <section className="projects-grid">
        {projects.map((project) => (
          <article className="project-tile" key={project.id}>
            <div className="project-tile-header">
              <div>
                <p className="project-client">{project.client}</p>
                <h3>{project.title}</h3>
              </div>
              <span className={`status-pill status-${project.status.toLowerCase().replace(" ", "-")}`}>
                {project.status}
              </span>
            </div>
            <p className="project-milestone">Milestone: {project.milestone}</p>
            <div className="project-progress">
              <div className="progress-line">
                <span style={{ width: project.progress }} />
              </div>
              <span>{project.progress}</span>
            </div>
            <div className="project-footer">
              <span>Due {project.due}</span>
              <Link className="secondary-button" to={`/projects/${project.id}`}>
                Manage
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default ProjectsView;
