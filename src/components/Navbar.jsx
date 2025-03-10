import React, { useState } from "react";
import "../styles.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-container">
      {/* Banner Section */}
      <div className="banner">
        <h1>Electrification of the Trans-Canada Railway</h1>
        <p>Transforming Canada's railway system for a sustainable future</p>
      </div>
      
      {/* Navbar Section */}
      <div className="navbar">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/overview">Project Overview</a>
          <a href="/feasibility">Technical Feasibility</a>
          <a href="/financial">Financial Considerations</a>
          <a href="/impact">Environmental & Social Impact</a>
          <a href="/implementation">Implementation Strategy</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/map">Railway Map</a>
          <a href="/references">References</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
