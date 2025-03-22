import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div
      className="sidebar"
      style={{
        display: "flex",
        justifyContent: "center",  // Center links horizontally
        gap: "40px",                // Space out the links
        padding: '20px',
        backgroundColor: "#f5f5f5", // Optional: Adjust background color
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#2c3e50",
          fontSize: "1.5rem",
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          textDecoration: "none",
          color: "#2c3e50",
          fontSize: "1.5rem",
        }}
      >
        About
      </Link>
      <Link
        to="/contact"
        style={{
          textDecoration: "none",
          color: "#2c3e50",
          fontSize: "1.5rem",
        }}
      >
        Contact
      </Link>
    </div>
  );
}

export default Sidebar;

