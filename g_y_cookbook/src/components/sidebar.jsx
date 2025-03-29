import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div
      className="sidebar"
      style={{
        display: "flex",
        justifyContent: "space-evenly",  // Center links horizontally
        gap: "40px",                // Space out the links
        padding: '20px',
        backgroundColor: "#ff7700",
        borderRadius: 40, // Optional: Adjust background color
        flexDirection:"column",
        fontSize: "3.5rem", color: "#2c3e50", fontFamily: "cursive",
        fontWeight: "bold", 
        width:"350px",
        height:"100vh",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#000000",
          fontSize: "1.5rem",
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          textDecoration: "none",
          color: "#000000",
          fontSize: "1.5rem",
        }}
      >
        About
      </Link>

      <Link
        to="/details"
        style={{
          textDecoration: "none",
          color: "#000000",
          fontSize: "1.5rem",
        }}
      >
        Details
      </Link>

      <Link
        to="/contact"
        style={{
          textDecoration: "none",
          color: "#000000",
          fontSize: "1.5rem",
        }}
      >
        Contact
      </Link>
    </div>
  );
}

export default Sidebar;

