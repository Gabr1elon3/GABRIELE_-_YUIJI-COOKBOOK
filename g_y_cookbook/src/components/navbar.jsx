import React from 'react';

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <img
        src="/cookbook.jpg"
        alt="Victor & Gabriele's Logo"
        style={{ width: "160px", marginBottom: "30px" }} // bigger logo
      />
      <h1 style={{ fontSize: "3.5rem", color: "#2c3e50", marginBottom: "30px" }}>
        Victor & Gabriele's Cookbook
      </h1>
    </div>
  );
}

export default Navbar;
