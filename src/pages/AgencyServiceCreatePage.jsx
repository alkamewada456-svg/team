import React from "react";

const AgencyServiceCreatePage = () => {
  return (
    <div className="page service-create">
      <header className="top-bar">
        <div>
          <h1>Create New Service</h1>
          <p>Define the service scope, price, and delivery expectations.</p>
        </div>
      </header>

      <form className="project-form">
        <label>
          Title
          <input placeholder="e.g. Brand identity sprint" />
        </label>
        <label>
          Category
          <input placeholder="Branding, Marketing, Web..." />
        </label>
        <label>
          Description
          <textarea placeholder="Describe the deliverables and scope" rows="4" />
        </label>
        <label>
          Starting price
          <input placeholder="$2,000" />
        </label>
        <label>
          Delivery time
          <input placeholder="7 days" />
        </label>
        <button className="primary-button" type="button">
          Save service
        </button>
      </form>
    </div>
  );
};

export default AgencyServiceCreatePage;
