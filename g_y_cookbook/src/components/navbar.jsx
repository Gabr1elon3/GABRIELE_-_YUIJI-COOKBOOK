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
      <h1 className= "rainbow-text"  style={{ fontSize: "3.5rem",  fontFamily: "cursive", marginLeft:"auto", marginRight:"auto" }}>
        Victor & Gabriele's Cookbook
      </h1>
    </nav>
  );
}

export default Navbar;
