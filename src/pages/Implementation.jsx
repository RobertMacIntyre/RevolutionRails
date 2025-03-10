import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const economicData = [
  { year: "2025", investment: 10, savings: 3 },
  { year: "2030", investment: 25, savings: 10 },
  { year: "2035", investment: 40, savings: 20 },
  { year: "2040", investment: 55, savings: 35 },
  { year: "2050", investment: 75, savings: 50 },
];

function Implementation() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="container">
      <h2>🛠️ Implementation Strategy</h2>
      <p>
        The **Electrification of the Trans-Canada Railway and Energy-Water Pipeline Project** will follow a **strategic phased approach** to ensure **smooth development, financial sustainability, and regulatory compliance**, while maximizing efficiency and minimizing risks.
      </p>

      {/* Phased Development Plan */}
      <div className="section">
        <h3>📅 Phased Development Plan</h3>
        <p>
          **Each phase builds upon the last, ensuring progress aligns with funding availability, environmental approvals, and infrastructure readiness.**
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#d32f2f", color: "white", fontWeight: "bold" }}>
              <th style={{ padding: "12px" }}>Phase</th>
              <th style={{ padding: "12px" }}>Key Actions</th>
              <th style={{ padding: "12px" }}>Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>📌 **Phase 1: Feasibility & Planning**</td><td>Technical, financial, and environmental assessments; stakeholder consultations.</td><td>Years 1-2</td></tr>
            <tr><td>💰 **Phase 2: Funding & Regulatory Approvals**</td><td>Government grants, private-sector investment, environmental approvals.</td><td>Years 2-3</td></tr>
            <tr><td>🚧 **Phase 3: Infrastructure Construction**</td><td>Railway electrification, pipeline installation, solar power deployment.</td><td>Years 3-8</td></tr>
            <tr><td>🚄 **Phase 4: Operational Launch & Expansion**</td><td>Electric trains fully operational, AI systems managing infrastructure, clean water pipelines delivering services.</td><td>Years 8-12</td></tr>
          </tbody>
        </table>
      </div>

      {/* Economic Impact Over Time */}
      <div className="section">
        <h3>📈 Economic Impact Over Time</h3>
        <p>
          **Projected financial impact of the project:**  
          Initial investment leads to **sustained economic growth**, with **$50 billion+ in savings by 2050**.
        </p>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={economicData}>
            <XAxis dataKey="year" stroke="#333" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="url(#grad1)" name="Investment (Billion CAD)" barSize={50} />
            <Bar dataKey="savings" fill="url(#grad2)" name="Annual Savings (Billion CAD)" barSize={50} />
            <defs>
              <linearGradient id="grad1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ffcc00" />
                <stop offset="100%" stopColor="#ff6600" />
              </linearGradient>
              <linearGradient id="grad2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#00ff99" />
                <stop offset="100%" stopColor="#009933" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Risk Mitigation Strategies */}
      <div className="section">
        <h3>⚠️ Risk Mitigation Strategies</h3>
        <p>**Comprehensive strategies ensure smooth execution while minimizing financial and environmental risks.**</p>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#d32f2f", color: "white", fontWeight: "bold" }}>
              <th style={{ padding: "12px" }}>Risk</th>
              <th style={{ padding: "12px" }}>Mitigation Strategy</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>💸 **High Upfront Investment**</td><td>Diversify funding (grants, private-sector, carbon credits), phased spending.</td></tr>
            <tr><td>⚖️ **Regulatory Challenges**</td><td>Early engagement with government, Indigenous communities, and environmental groups.</td></tr>
            <tr><td>📢 **Public Resistance**</td><td>Transparent communication, public education, and awareness campaigns.</td></tr>
            <tr><td>📉 **Market Fluctuations**</td><td>Pipeline adaptability for multiple energy sources (oil, gas, hydrogen, renewables).</td></tr>
          </tbody>
        </table>
      </div>

      {/* Additional Insights */}
      <button className="button" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "View Additional Insights"}
      </button>

      {showDetails && (
        <div className="section">
          <h3>🌍 Supporting Research & Case Studies</h3>
          <ul style={{ textAlign: "left" }}>
            <li>🔋 **Rail Electrification** – *IEA reports: electric rail can cut emissions by up to 75% while reducing operating costs.*</li>
            <li>🚆 **Free Public Transit** – *Luxembourg & Tallinn saw increased ridership and reduced congestion post-implementation.*</li>
            <li>💧 **Indigenous Water Security** – *As of 2023, 32 First Nations remain under boil-water advisories—urgent need for solutions.*</li>
            <li>🔌 **Energy & Water Pipelines** – *Studies support integrating infrastructure along transport corridors to optimize efficiency.*</li>
            <li>📈 **Economic Impact** – *Long-term operational savings will exceed infrastructure costs by over $10 billion within 20 years.*</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Implementation;