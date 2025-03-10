import React from "react";
import { Link } from "react-router-dom";

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

function Home() {
  return (
    <div className="container">
      <h2>🚆 Electrification of the Trans-Canada Railway</h2>
      <p>
        A modern, sustainable, and efficient railway system for Canada’s future.  
        This initiative aims to **electrify the national railway**, **integrate renewable energy**, and **enhance economic growth** while supporting **clean public transit, Indigenous partnerships, and infrastructure innovation**.
      </p>
      <button className="button" onClick={toggleDarkMode}>🌙 Toggle Dark Mode</button>

      <img src="/assets/train.jpg" alt="High-Speed Electric Train" style={{ width: "100%", borderRadius: "10px", margin: "20px 0" }} />

      {/* Benefits of Electrification */}
      <div className="section">
        <h3>💡 Why Electrification?</h3>
        <ul style={{ textAlign: "left" }}>
          <li>🔋 <strong>Reduces Emissions</strong> – Transitioning from diesel to electric trains **lowers carbon output by 50%**.</li>
          <li>🚆 <strong>Increases Efficiency</strong> – High-speed rail upgrades will allow **faster, more reliable service** for both **passengers and freight**.</li>
          <li>💰 <strong>Saves Billions</strong> – Studies estimate **$200 billion CAD** in **long-term savings** through infrastructure improvements.</li>
          <li>🌍 <strong>Supports Sustainability</strong> – By integrating **solar panels**, **hydroelectric power**, and **wind energy**, the railway will **generate clean electricity** for its operations.</li>
          <li>🤖 <strong>AI-Optimized Operations</strong> – **AI-driven monitoring** will predict **train maintenance**, optimize **freight logistics**, and **monitor energy efficiency**.</li>
        </ul>
      </div>

      {/* Job Creation and Economic Growth */}
      <div className="section">
        <h3>📊 Economic & Job Growth</h3>
        <p>The project is expected to create **470,000+ new jobs** and contribute **$200 billion CAD** in economic growth over 20 years.</p>
        <ul style={{ textAlign: "left" }}>
          <li>👷 <strong>150,000+ jobs</strong> in railway construction, electrification, and track upgrades.</li>
          <li>🏭 <strong>100,000+ jobs</strong> in pipeline and clean water infrastructure development.</li>
          <li>🌞 <strong>50,000+ jobs</strong> in solar power installation, wind farms, and hydroelectric integration.</li>
          <li>💼 <strong>Economic Expansion</strong> – The project will **boost trade**, **increase tourism**, and **reduce shipping costs** for Canadian businesses.</li>
        </ul>
      </div>

      {/* Solar Energy and AI-Powered Monitoring */}
      <div className="section">
        <h3>☀️ Solar Energy & AI Monitoring</h3>
        <ul style={{ textAlign: "left" }}>
          <li>🌞 <strong>Solar Power Along the Railway</strong> – **20,000+ solar panels** will be installed alongside railway tracks to generate **renewable energy** for trains and **local communities**.</li>
          <li>🔋 <strong>Battery Storage & Smart Grid</strong> – Excess solar power will be stored for **nighttime operations**, reducing reliance on external power sources.</li>
          <li>🤖 <strong>AI-Driven Monitoring</strong> – **AI sensors** will track **track conditions**, **freight logistics**, and **energy efficiency**, ensuring smooth operation.</li>
        </ul>
      </div>

      {/* Indigenous Collaboration and Infrastructure */}
      <div className="section">
        <h3>🛠️ Indigenous Partnerships & Infrastructure</h3>
        <ul style={{ textAlign: "left" }}>
          <li>💧 <strong>Clean Drinking Water</strong> – **New water pipelines** along railway routes will deliver **safe drinking water** to Indigenous and rural communities.</li>
          <li>🎨 <strong>Cultural Mural Project</strong> – Indigenous artists will help create a **nationwide art mural** along railway stations to celebrate **heritage and history**.</li>
          <li>🏗️ <strong>Community-Driven Infrastructure</strong> – The railway will **enhance trade routes**, **reduce shipping costs**, and **connect more communities**.</li>
        </ul>
      </div>

      {/* Interprovincial Trade and Travel Benefits */}
      <div className="section">
        <h3>🚄 Improving Trade & Travel Across Canada</h3>
        <ul style={{ textAlign: "left" }}>
          <li>📦 <strong>Faster Freight Transport</strong> – **High-speed cargo trains** will **reduce shipping costs** and **decrease reliance on long-haul trucking**.</li>
          <li>🛤️ <strong>Streamlined Interprovincial Travel</strong> – Faster trains will **cut travel times between cities**, making **public transportation more accessible**.</li>
          <li>💵 <strong>Boosting the Economy</strong> – Reduced **fuel costs**, **lower infrastructure maintenance**, and **faster delivery speeds** will **benefit businesses nationwide**.</li>
        </ul>
      </div>

      {/* Explore More Links */}
      <div className="section">
        <h3>📍 Explore More</h3>
        <p>Check out the interactive map and dashboard to see project progress.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <Link to="/map" className="button">🌍 View Railway Map</Link>
          <Link to="/dashboard" className="button">📊 Explore Dashboard</Link>
          <Link to="/references" className="button">📖 View References</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;