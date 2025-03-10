import React from "react";

function Financial() {
  return (
    <div className="container">
      <h2>💰 Financial Considerations</h2>
      <p>
        The <strong>Electrification of the Trans-Canada Railway & Energy-Water Pipeline Project</strong> requires substantial investment.  
        However, **long-term operational savings, increased efficiency, and environmental benefits** outweigh the initial costs, making this a **high-return national infrastructure upgrade**.
      </p>

      {/* Estimated Costs */}
      <div className="section">
        <h3>📊 Estimated Project Costs</h3>
        <p>
          **Investing in sustainable infrastructure pays off** through **job creation, energy savings, and long-term efficiency gains**.  
          Below is the **estimated financial breakdown**:
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#d32f2f", color: "white", fontWeight: "bold" }}>
              <th style={{ padding: "12px" }}>Category</th>
              <th style={{ padding: "12px" }}>Estimated Cost (Billion CAD)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>🚆 <strong>Railway Electrification Infrastructure</strong></td><td>$35.0</td></tr>
            <tr><td>🚄 <strong>High-Speed Rail Upgrades</strong></td><td>$10.0</td></tr>
            <tr><td>🚉 <strong>Passenger Train Fleet Modernization</strong></td><td>$8.0</td></tr>
            <tr><td>🚛 <strong>Freight Rail Electrification</strong></td><td>$12.0</td></tr>
            <tr><td>🛢️ <strong>Energy Pipeline Construction</strong></td><td>$18.0</td></tr>
            <tr><td>💧 <strong>Clean Water Pipeline Development</strong></td><td>$7.5</td></tr>
            <tr><td>☀️ <strong>Solar & Wind Energy Integration</strong></td><td>$6.0</td></tr>
            <tr><td>📡 <strong>AI Monitoring & Safety Systems</strong></td><td>$4.0</td></tr>
            <tr><td>🏗️ <strong>Land Acquisition & Right-of-Way Costs</strong></td><td>$3.5</td></tr>
            <tr><td>👷 <strong>Labor & Workforce Training</strong></td><td>$9.0</td></tr>
            <tr><td>🌍 <strong>Regulatory & Environmental Compliance</strong></td><td>$6.0</td></tr>
          </tbody>
        </table>
        <p>
          📌 **Total Projected Cost:** Estimated at **$118 billion CAD**  
          *(including a **10% contingency fund** for unforeseen expenses).*
        </p>
      </div>

      {/* Funding Sources */}
      <div className="section">
        <h3>💰 Funding Sources</h3>
        <p>
          The project will be **strategically funded** through multiple sources, ensuring **minimal burden on taxpayers**.
        </p>
        <ul style={{ textAlign: "left" }}>
          <li>🏦 **Federal & Provincial Grants** – Support from the **Canada Infrastructure Bank**, **Green Energy Initiatives**, and **Sustainable Transportation Programs**.</li>
          <li>💼 **Public-Private Partnerships (PPPs)** – Investment from **railway companies, tech firms, and energy providers**.</li>
          <li>🛢️ **Energy Sector Contributions** – Pipeline expansion **funded through oil, gas, and hydrogen investments**, helping offset initial costs.</li>
          <li>💧 **Indigenous & Rural Development Grants** – Funding directed towards **clean water access** and **community-driven infrastructure development**.</li>
          <li>♻️ **Carbon Credit Revenues** – The reduction of emissions will generate **carbon credits**, which can be sold to industries needing offsets.</li>
        </ul>
      </div>

      {/* Return on Investment (ROI) */}
      <div className="section">
        <h3>📈 Return on Investment (ROI) Projections</h3>
        <p>
          The project is designed to **pay for itself over time**, through **increased trade efficiency, energy savings, and economic stimulation**.
        </p>
        <ul style={{ textAlign: "left" }}>
          <li>📉 **Operational Savings:** **$3.5B/year** saved in **highway maintenance costs** due to reduced trucking demand.</li>
          <li>💸 **Freight Efficiency Gains:** **30% lower costs** for shipping goods across Canada.</li>
          <li>🚄 **Passenger Revenue Growth:** Electrified trains **increase ridership**, bringing in **new annual revenue streams**.</li>
          <li>💡 **Energy Cost Reductions:** Electric rail reduces fuel costs, **saving billions over decades**.</li>
          <li>🌱 **Environmental Savings:** Avoiding fuel-based emissions saves **$4.2 billion annually** in **public health costs**.</li>
        </ul>
      </div>

      {/* Economic & Environmental Benefits */}
      <div className="section">
        <h3>📊 Economic & Environmental Benefits</h3>
        <p>
          The **financial investment** is matched by **major long-term gains** for Canada's **economy, environment, and job market**.
        </p>
        <ul style={{ textAlign: "left" }}>
          <li>👷 **470,000+ new jobs** – Direct & indirect employment across railway, clean energy, and AI industries.</li>
          <li>📈 **$200B in economic activity** – Boosts GDP through increased **trade efficiency, passenger transport, and tourism**.</li>
          <li>💨 **Reduction in Carbon Emissions** – Helping Canada achieve its **Net-Zero 2050 target**.</li>
          <li>🛤️ **Modernized Transportation Network** – Enabling **faster, safer, and more energy-efficient** freight & passenger services.</li>
          <li>🏡 **Stronger Local Economies** – Enhanced rail accessibility brings **growth to small towns & Indigenous communities**.</li>
        </ul>
      </div>
    </div>
  );
}

export default Financial;