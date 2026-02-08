import React from "react";

const ProjectCreatePage = () => {
  return (
    <div className="page project-create">
      <header className="top-bar">
        <div>
          <h1>New Project</h1>
          <p>Create a long-term project and define milestones.</p>
        </div>
      </header>

      <form className="project-form">
        <label>
          Project name
          <input placeholder="e.g. Brand refresh rollout" />
        </label>
        <label>
          Client / Agency
          <input placeholder="Select or add a client" />
        </label>
        <label>
          Budget
          <input placeholder="$5,000" />
        </label>
        <label>
          Timeline
          <input placeholder="6 weeks" />
        </label>
        <label>
          Milestone summary
          <textarea placeholder="Define the first milestone deliverables" rows="4" />
        </label>
        <button className="primary-button" type="button">
          Create project
        </button>
      </form>
    </div>
  );
};

export default ProjectCreatePage;
