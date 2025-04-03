import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div
      className="sidebar"
      style={{
        position: "fixed", // Keeps it always visible when scrolling
        left: "-50px", // Moves it slightly to the left
        top: "150px", // Adjusts vertical position
        display: "flex",
        flexDirection: "column", // Stack links vertically
        alignItems: "center", // Center links horizontally
        gap: "20px", // Adds space between links
        padding: '20px',
        backgroundColor: "#ff7700",
        borderRadius: "40px", // Makes edges round
        fontSize: "3.5rem",
        color: "#2c3e50",
        fontFamily: "cursive",
        fontWeight: "bold",
        width: "250px", // Sidebar width
        height: "300px", // Adjusts height to avoid stretching
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
