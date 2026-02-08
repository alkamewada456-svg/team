import React from "react";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: "job_01",
    role: "Senior Designer",
    views: 120,
    applicants: 14,
    status: "Open",
  },
  {
    id: "job_02",
    role: "Paid Media Specialist",
    views: 90,
    applicants: 8,
    status: "Open",
  },
  {
    id: "job_03",
    role: "Copywriter",
    views: 56,
    applicants: 4,
    status: "Closed",
  },
];

const AgencyJobsPage = () => {
  return (
    <div className="page jobs-list">
      <header className="top-bar">
        <div>
          <h1>Freelance Jobs</h1>
          <p>Track applicants, job views, and hiring status.</p>
        </div>
        <Link className="primary-button" to="/agency/jobs/new">
          Post Freelance Job
        </Link>
      </header>

      <div className="jobs-table">
        <div className="jobs-row header">
          <span>Role</span>
          <span>Views</span>
          <span>Applicants</span>
          <span>Status</span>
        </div>
        {jobs.map((job) => (
          <div className="jobs-row" key={job.id}>
            <span>{job.role}</span>
            <span>{job.views}</span>
            <span>{job.applicants}</span>
            <span className={`status-pill status-${job.status.toLowerCase()}`}>
              {job.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgencyJobsPage;
