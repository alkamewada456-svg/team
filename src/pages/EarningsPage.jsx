import React from "react";

const earnings = [
  { id: "earn_01", label: "August", value: "$18,400" },
  { id: "earn_02", label: "September", value: "$22,100" },
  { id: "earn_03", label: "October", value: "$15,800" },
];

const projects = [
  { id: "proj_01", label: "Everlane Brand Refresh", value: "$9,800" },
  { id: "proj_02", label: "Northwind Paid Social", value: "$6,300" },
  { id: "proj_03", label: "Atlas Lifecycle", value: "$4,500" },
];

const clients = [
  { id: "client_01", label: "Everlane", value: "$18,200" },
  { id: "client_02", label: "Northwind", value: "$12,900" },
  { id: "client_03", label: "Atlas", value: "$8,400" },
];

const EarningsPage = () => {
  return (
    <div className="page earnings">
      <header className="top-bar">
        <div>
          <h1>Earnings</h1>
          <p>Review revenue by month, project, and client.</p>
        </div>
      </header>

      <div className="earnings-grid">
        <section className="earnings-card">
          <h3>By month</h3>
          <ul>
            {earnings.map((item) => (
              <li key={item.id}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </li>
            ))}
          </ul>
        </section>
        <section className="earnings-card">
          <h3>By project</h3>
          <ul>
            {projects.map((item) => (
              <li key={item.id}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </li>
            ))}
          </ul>
        </section>
        <section className="earnings-card">
          <h3>By client</h3>
          <ul>
            {clients.map((item) => (
              <li key={item.id}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default EarningsPage;
