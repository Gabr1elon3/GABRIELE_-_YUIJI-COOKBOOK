import React from 'react';

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection:"row",
        alignItems: "center",
     
        textAlign: "center",
        width: "100%",
      }}
    >
      <img
        src="/cookbook.jpg"
        alt="Victor & Gabriele's Logo"
        style={{ width: "180px", marginBottom: "30px" }} // bigger logo
      />
      <h1 style={{ fontSize: "3.5rem", color: "#2c3e50", fontFamily: "cursive", marginLeft:"auto", marginRight:"auto" }}>
        Victor & Gabriele's Cookbook
      </h1>
    </nav>
  );
}

export default Navbar;
