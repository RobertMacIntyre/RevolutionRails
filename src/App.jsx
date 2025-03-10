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
import Navbar from "./components/Navbar.jsx";
import "./styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : ""}>
        <Navbar />
        <button className="toggle-dark-mode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
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
        <footer className="footer">
          <p>&copy; 2024 Electrification of the Trans-Canada Railway Project</p>
          <nav>
            <Link to="/">Home</Link> | 
            <Link to="/references">References</Link> | 
            <Link to="/contact">Contact</Link>
          </nav>
        </footer>
      </div>
    </Router>
  );
}

export default App;
