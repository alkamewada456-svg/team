import React from "react";

const AgencyJobCreatePage = () => {
  return (
    <div className="page job-create">
      <header className="top-bar">
        <div>
          <h1>Post Freelance Job</h1>
          <p>Share role requirements and hiring details.</p>
        </div>
      </header>

      <form className="project-form">
        <label>
          Role type
          <input placeholder="Designer, Copywriter, Growth..." />
        </label>
        <label>
          Public / Private
          <input placeholder="Public" />
        </label>
        <label>
          Budget
          <input placeholder="$60/hr or $2,500 fixed" />
        </label>
        <label>
          Required skills
          <input placeholder="Figma, Meta Ads, Webflow..." />
        </label>
        <label>
          Duration
          <input placeholder="6 weeks" />
        </label>
        <button className="primary-button" type="button">
          Publish job
        </button>
      </form>
    </div>
  );
};

export default AgencyJobCreatePage;
