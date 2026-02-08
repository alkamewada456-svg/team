import React from "react";
import { Link } from "react-router-dom";

const orders = [
  {
    id: "order_01",
    projectId: "project_01",
    project: "Brand identity sprint",
    partner: "Everlane",
    status: "Active",
    deadline: "Sep 12",
    amount: "$3,200",
  },
  {
    id: "order_02",
    projectId: "project_02",
    project: "Paid social performance",
    partner: "Northwind",
    status: "Late",
    deadline: "Sep 8",
    amount: "$2,400",
  },
  {
    id: "order_03",
    projectId: "project_03",
    project: "Lifecycle automation",
    partner: "Atlas",
    status: "Completed",
    deadline: "Aug 30",
    amount: "$1,750",
  },
];

const OrdersPage = () => {
  return (
    <div className="page orders">
      <header className="top-bar">
        <Link className="logo" to="/orders">
          servicely
        </Link>
        <div className="top-search">
          <input placeholder="Search orders..." aria-label="Search" />
        </div>
        <div className="top-actions">
          <button type="button" className="icon-button" aria-label="Notifications">
            🔔
          </button>
          <Link className="icon-button" to="/messages" aria-label="Messages">
            💬
          </Link>
        </div>
      </header>

      <div className="orders-shell">
        <aside className="sidebar">
          <Link className="sidebar-item" to="/agency/dashboard">
            Dashboard
          </Link>
          <Link className="sidebar-item" to="/projects">
            Projects
          </Link>
          <Link className="sidebar-item" to="/messages">
            Messages
          </Link>
          <Link className="sidebar-item active" to="/orders">
            Orders
          </Link>
          <Link className="sidebar-item" to="/services">
            Services
          </Link>
          <Link className="sidebar-item" to="/settings">
            Settings
          </Link>
        </aside>

        <main className="orders-main">
          <div className="orders-header">
            <div>
              <h1>Orders</h1>
              <p>Track milestones, delivery dates, and project history.</p>
            </div>
            <div className="orders-filters">
              <select>
                <option>Status: All</option>
                <option>Active</option>
                <option>Late</option>
                <option>Completed</option>
              </select>
              <select>
                <option>Date: Last 30 days</option>
                <option>Last 7 days</option>
                <option>Last 90 days</option>
              </select>
              <select>
                <option>Client / Agency</option>
                <option>Everlane</option>
                <option>Northwind</option>
                <option>Atlas</option>
              </select>
            </div>
          </div>

          <div className="orders-table orders-table-dense">
            <div className="orders-row header">
              <span>Order / Project</span>
              <span>Client / Agency</span>
              <span>Status</span>
              <span>Deadline</span>
              <span>Amount</span>
              <span>Actions</span>
            </div>
            {orders.map((order) => (
              <div className="orders-row" key={order.id}>
                <span>{order.project}</span>
                <span>{order.partner}</span>
                <span className={`status-pill status-${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
                <span>{order.deadline}</span>
                <span>{order.amount}</span>
                <div className="orders-actions">
                  <Link className="ghost-pill" to={`/projects/${order.projectId}`}>
                    View
                  </Link>
                  <Link className="ghost-pill" to="/messages">
                    Message
                  </Link>
                  <button className="primary-button" type="button">
                    Deliver
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrdersPage;
