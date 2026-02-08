import React from "react";
import { Link } from "react-router-dom";

const threads = [
  {
    id: "thread_01",
    name: "Everlane",
    preview: "Can we review the milestone this afternoon?",
    time: "2m ago",
  },
  {
    id: "thread_02",
    name: "Pixel Studio",
    preview: "Shared the draft delivery for approval.",
    time: "1h ago",
  },
  {
    id: "thread_03",
    name: "Freelancer — Maya R.",
    preview: "I can start the onboarding tasks tomorrow.",
    time: "3h ago",
  },
];

const MessagesInbox = () => {
  return (
    <div className="page inbox">
      <header className="top-bar">
        <Link className="logo" to="/messages">
          servicely
        </Link>
        <div className="top-search">
          <input placeholder="Search conversations..." aria-label="Search" />
        </div>
        <div className="top-actions">
          <button type="button" className="icon-button" aria-label="New message">
            ✉️
          </button>
        </div>
      </header>

      <section className="inbox-layout">
        <aside className="inbox-sidebar">
          <h2>Inbox</h2>
          <div className="inbox-filters">
            <button className="tab active" type="button">
              All
            </button>
            <button className="tab" type="button">
              Clients
            </button>
            <button className="tab" type="button">
              Freelancers
            </button>
            <button className="tab" type="button">
              Internal
            </button>
          </div>
          <div className="thread-list">
            {threads.map((thread) => (
              <button className="thread-item" key={thread.id} type="button">
                <div>
                  <strong>{thread.name}</strong>
                  <p>{thread.preview}</p>
                </div>
                <span>{thread.time}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className="inbox-content">
          <div className="message-header">
            <div>
              <h3>Everlane · Project Sprint</h3>
              <p>Project-linked conversation · 4 members</p>
            </div>
            <button className="ghost-pill" type="button">
              View project
            </button>
          </div>
          <div className="message-thread">
            <div className="message-bubble">
              <strong>Everlane</strong>
              <p>Can we review the milestone this afternoon?</p>
            </div>
            <div className="message-bubble reply">
              <strong>Horizon Agency</strong>
              <p>Absolutely. Sending a calendar invite now.</p>
            </div>
          </div>
          <div className="message-input">
            <input placeholder="Write a message..." aria-label="Message" />
            <button className="primary-button" type="button">
              Send
            </button>
          </div>
        </main>
      </section>
    </div>
  );
};

export default MessagesInbox;
