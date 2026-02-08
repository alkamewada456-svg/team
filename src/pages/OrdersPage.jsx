import React from "react";

const orders = [
  {
    id: "order_01",
    client: "Everlane",
    service: "Brand identity sprint",
    status: "Active",
    due: "Sep 12",
  },
  {
    id: "order_02",
    client: "Northwind",
    service: "Paid social performance",
    status: "Late",
    due: "Sep 8",
  },
  {
    id: "order_03",
    client: "Atlas",
    service: "Lifecycle automation",
    status: "Completed",
    due: "Aug 30",
  },
];

const OrdersPage = () => {
  return (
    <div className="page orders">
      <header className="top-bar">
        <div>
          <h1>Orders</h1>
          <p>Track milestones, delivery dates, and project history.</p>
        </div>
        <div className="orders-filters">
          <button className="tab active" type="button">
            Active
          </button>
          <button className="tab" type="button">
            Late
          </button>
          <button className="tab" type="button">
            Completed
          </button>
        </div>
      </header>

      <div className="orders-table">
        <div className="orders-row header">
          <span>Client</span>
          <span>Service</span>
          <span>Status</span>
          <span>Due</span>
        </div>
        {orders.map((order) => (
          <div className="orders-row" key={order.id}>
            <span>{order.client}</span>
            <span>{order.service}</span>
            <span className={`status-pill status-${order.status.toLowerCase()}`}>
              {order.status}
            </span>
            <span>{order.due}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
