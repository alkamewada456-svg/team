import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";

const services = [
  {
    id: "service_01",
    agency: "Pixel Studio",
    title: "Brand identity sprint for growth teams",
    price: "$1,800",
    delivery: "7 days",
    rating: "5.0",
  },
  {
    id: "service_02",
    agency: "Swift Media",
    title: "Paid social performance package",
    price: "$2,500",
    delivery: "10 days",
    rating: "4.9",
  },
  {
    id: "service_03",
    agency: "Digital Hive",
    title: "SEO content engine for SaaS",
    price: "$1,200",
    delivery: "5 days",
    rating: "4.8",
  },
  {
    id: "service_04",
    agency: "Signal North",
    title: "Lifecycle email automation build",
    price: "$2,100",
    delivery: "8 days",
    rating: "4.7",
  },
  {
    id: "service_05",
    agency: "Studio Vale",
    title: "Product launch creative bundle",
    price: "$3,000",
    delivery: "14 days",
    rating: "4.9",
  },
  {
    id: "service_06",
    agency: "Coastal Labs",
    title: "Webflow conversion redesign",
    price: "$2,750",
    delivery: "12 days",
    rating: "4.8",
  },
];

const ServiceMarketplace = () => {
  const { logout } = useAuth();

  return (
    <div className="page marketplace">
      <header className="top-bar">
        <Link className="logo" to="/services">
          servicely
        </Link>
        <div className="top-search">
          <input placeholder="Search agencies or services..." aria-label="Search" />
        </div>
        <div className="top-actions">
          <button type="button" className="icon-button" aria-label="Notifications">
            🔔
          </button>
          <details className="profile-menu">
            <summary className="profile-chip">
              <span className="avatar" aria-hidden />
              <span>Marketplace</span>
              <span aria-hidden>▾</span>
            </summary>
            <div className="profile-panel">
              <Link to="/client/dashboard">Client dashboard</Link>
              <Link to="/agency/dashboard">Agency dashboard</Link>
              <button type="button" onClick={logout}>
                Logout
              </button>
            </div>
          </details>
        </div>
      </header>

      <div className="marketplace-shell">
        <aside className="marketplace-sidebar">
          <h3>Filters</h3>
          <label>
            Category
            <select>
              <option>All categories</option>
              <option>Branding</option>
              <option>Marketing</option>
              <option>Web</option>
            </select>
          </label>
          <label>
            Price
            <select>
              <option>Any price</option>
              <option>$0–$1k</option>
              <option>$1k–$3k</option>
              <option>$3k+</option>
            </select>
          </label>
          <label>
            Delivery time
            <select>
              <option>Any delivery</option>
              <option>Less than 7 days</option>
              <option>7–14 days</option>
              <option>14+ days</option>
            </select>
          </label>
          <label>
            Rating
            <select>
              <option>4.0+</option>
              <option>4.5+</option>
              <option>5.0</option>
            </select>
          </label>
          <button className="ghost-pill" type="button">
            Clear filters
          </button>
        </aside>

        <main className="marketplace-main">
          <section className="marketplace-hero">
            <h1>Service marketplace</h1>
            <p>Agency-built services with clear scope, pricing, and timelines.</p>
            <div className="marketplace-tabs">
              <button className="tab active" type="button">
                Services
              </button>
              <button className="tab" type="button">
                Agencies
              </button>
              <button className="tab" type="button">
                Freelance jobs
              </button>
            </div>
          </section>

          <section className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.id}>
                <div className="service-header">
                  <span className="avatar" aria-hidden />
                  <div>
                    <p className="service-agency">{service.agency}</p>
                    <h3>{service.title}</h3>
                  </div>
                </div>
                <div className="service-meta">
                  <span>{service.rating} ★</span>
                  <span>{service.delivery}</span>
                </div>
                <div className="service-footer">
                  <strong>{service.price}</strong>
                  <Link className="primary-button" to={`/projects/new?service_id=${service.id}`}>
                    Hire agency
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default ServiceMarketplace;
