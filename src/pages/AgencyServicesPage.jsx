import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "svc_01",
    title: "Brand identity sprint",
    tier: "Premium",
    price: "$3,000",
    status: "Active",
  },
  {
    id: "svc_02",
    title: "Paid social performance",
    tier: "Standard",
    price: "$2,200",
    status: "Draft",
  },
  {
    id: "svc_03",
    title: "Lifecycle automation",
    tier: "Basic",
    price: "$1,200",
    status: "Active",
  },
];

const AgencyServicesPage = () => {
  return (
    <div className="page services-list">
      <header className="top-bar">
        <div>
          <h1>Services</h1>
          <p>Manage agency offerings and package tiers.</p>
        </div>
        <Link className="primary-button" to="/agency/services/new">
          Create New Service
        </Link>
      </header>

      <div className="services-table">
        <div className="services-row header">
          <span>Service</span>
          <span>Tier</span>
          <span>Price</span>
          <span>Status</span>
        </div>
        {services.map((service) => (
          <div className="services-row" key={service.id}>
            <span>{service.title}</span>
            <span>{service.tier}</span>
            <span>{service.price}</span>
            <span className={`status-pill status-${service.status.toLowerCase()}`}>
              {service.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgencyServicesPage;
