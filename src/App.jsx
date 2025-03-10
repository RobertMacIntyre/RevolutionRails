import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Overview from "./pages/Overview.jsx";
import Feasibility from "./pages/Feasibility.jsx";
import Financial from "./pages/Financial.jsx";
import Impact from "./pages/Impact.jsx";
import Implementation from "./pages/Implementation.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Contact from "./pages/Contact.jsx";
import Map from "./pages/Map.jsx";
import References from "./pages/References.jsx";
import "./styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : ""}>
        {/* Light Switch */}
        <div className="light-switch" onClick={() => setDarkMode(!darkMode)}>
          <div className={`switch-toggle ${darkMode ? "on" : "off"}`}></div>
        </div>

        {/* Navbar */}
        <header className="navbar-wrapper">
          <nav className="navbar">
            <div className="logo">Rail Revolution 1</div>
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "✖" : "☰"}
            </div>
            <div className={`nav-container ${menuOpen ? "active" : ""}`}>
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/overview">Project Overview</Link></li>
                <li><Link to="/feasibility">Technical Feasibility</Link></li>
                <li><Link to="/financial">Financial Considerations</Link></li>
                <li><Link to="/impact">Environmental & Social Impact</Link></li>
                <li><Link to="/implementation">Implementation Strategy</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/map">Railway Map</Link></li>
                <li><Link to="/references">References</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Routes must be inside Router */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/feasibility" element={<Feasibility />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/implementation" element={<Implementation />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/map" element={<Map />} />
            <Route path="/references" element={<References />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer (Must be Inside Router) */}
        <footer className="footer">
          <p>2024 Electrification of the Trans-Canada Railway Project</p>
          <nav>
            <Link to="/">Home</Link> | 
            <Link to="/references">References</Link> | 
            <Link to="/contact">Contact</Link>
          </nav>
        </footer>
      </div>
    </Router>  // ✅ Properly closed Router
  );
}

export default App;