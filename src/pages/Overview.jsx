import React, { useState } from "react";

function Overview() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="container">
      <h2>📢 Project Overview</h2>
      <p>
        The Electrification of the Trans-Canada Railway & Energy-Water Pipeline Project 
        aims to modernize transportation, reduce emissions, and provide clean energy solutions 
        while ensuring equitable access to <strong>free public transit</strong> and <strong>clean drinking water</strong>.
      </p>

      <div className="section">
        <h3>📌 Key Goals</h3>
        <ul style={{ textAlign: "left" }}>
          <li>✅ Electrify the Trans-Canada Railway <br />
            <span style={{ fontSize: "14px", color: "#777" }}>
              *IEA studies confirm that railway electrification reduces emissions and lowers operational costs compared to diesel trains.*
            </span>
          </li>
          <li>✅ Provide Free Public Transportation <br />
            <span style={{ fontSize: "14px", color: "#777" }}>
              *Luxembourg & Estonia have successfully implemented nationwide free transit policies, leading to reduced congestion and increased ridership.*
            </span>
          </li>
          <li>✅ Enable Passenger Vehicle Transport on Trains</li>
          <li>✅ Develop a Dual-Pipeline System for Energy & Water <br />
            <span style={{ fontSize: "14px", color: "#777" }}>
              *Integrating water and energy pipelines along existing railway corridors can optimize land use and reduce environmental disruption.*
            </span>
          </li>
          <li>✅ Reduce Canada's Carbon Footprint</li>
          <li>✅ **Install Solar Panels Along the Railway** <br />
            <span style={{ fontSize: "14px", color: "#777" }}>
              *Solar farms along the railway will supplement energy needs and store excess power for nighttime operations.*
            </span>
          </li>
          <li>✅ **Deploy AI Monitoring for Predictive Maintenance** <br />
            <span style={{ fontSize: "14px", color: "#777" }}>
              *AI-powered sensors will monitor railways, pipelines, and solar panels, reducing failures and optimizing efficiency.*
            </span>
          </li>
          <li>✅ **Support a Nationwide Mural Project Along the Route** 🎨<br />
            <span style={{ fontSize: "14px", color: "#777" }}>
              *Each province and Indigenous community will contribute to a continuous mural along railway stations and freight corridors.*
            </span>
          </li>
          <li>✅ **Improve Interprovincial Trade & Travel** <br />
            <span style={{ fontSize: "14px", color: "#777" }}>
              *Electrified, high-speed freight & passenger rail will make moving goods and people across Canada faster, cheaper, and greener.*
            </span>
          </li>
        </ul>
      </div>

      <button className="button" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "View Detailed Analysis"}
      </button>

      {showDetails && (
        <div className="section">
          <h3>📊 Expanded Economic & Environmental Impact</h3>
          <p>
            The project is expected to <strong>significantly reduce emissions</strong>, <strong>boost economic growth</strong>, 
            and <strong>ensure clean water access</strong> in Indigenous and rural communities, while also creating thousands of jobs 
            and fostering cultural enrichment through a nationwide art initiative.
          </p>
          <ul style={{ textAlign: "left" }}>
            <li>📉 **Rail Electrification:**  
              *The International Energy Agency (IEA) confirms that electric trains reduce emissions by up to 50% compared to diesel locomotives. Over time, operational costs drop as electric trains require less maintenance and have a longer lifespan than their diesel counterparts.*  
              **Projected impact:**  
              - 100% electrified freight & passenger network by 2040.  
              - **50% reduction** in transportation-related emissions by 2050.
            </li>
            <li>💰 **Economic Growth:**  
              *Free public transit in Luxembourg and Estonia led to a 20% increase in ridership and a 15% reduction in car congestion. Studies suggest that making transit free encourages people to use public transport more often, reducing reliance on personal vehicles.*  
              **Projected impact:**  
              - **470,000+ new jobs** in rail construction, maintenance, and operations.  
              - Estimated **$200 billion** in GDP growth over 20 years.  
              - Increased urban development and property value appreciation along rail corridors.
            </li>
            <li>🚰 **Clean Drinking Water:**  
              *As of 2023, 32 First Nations communities remain under long-term boil water advisories, highlighting the urgency of water infrastructure development. This project will ensure safe, clean drinking water is delivered via dedicated water pipelines along railway routes.*  
              **Projected impact:**  
              - **100% elimination** of boil water advisories in affected communities.  
              - **AI-driven monitoring** to detect water quality issues before they escalate.
            </li>
            <li>💡 **Energy & Water Integration:**  
              *Studies show that co-locating energy and water pipelines along transportation corridors can reduce environmental impact and lower overall costs.*  
              **Projected impact:**  
              - **20% cost reduction** in infrastructure projects due to shared land use.  
              - **Minimal environmental disruption** compared to separate pipeline routes.
            </li>
            <li>☀️ **Solar Energy Impact:**  
              *Solar panel installations will provide clean power, reducing reliance on fossil fuels and creating thousands of new renewable energy jobs.*  
              **Projected impact:**  
              - **20,000+ solar panel installations** along railway corridors.  
              - **Grid-independent train operations** during daylight hours.
            </li>
            <li>🤖 **AI-Powered Efficiency:**  
              *AI monitoring will predict maintenance needs, optimize train schedules, and increase overall system reliability.*  
              **Projected impact:**  
              - **50% reduction** in unexpected train & pipeline failures.  
              - AI-driven energy efficiency improvements across railway networks.
            </li>
            <li>🎨 **Cultural & Artistic Investment:**  
              *A national mural project will boost tourism, local engagement, and community involvement, featuring contributions from Indigenous and regional artists across Canada.*  
              **Projected impact:**  
              - **500+ unique mural projects** along railway stations & freight corridors.  
              - **Tourism boost** through art-related rail experiences.
            </li>
            <li>🚄 **Faster & Greener Trade:**  
              *High-speed freight will improve supply chain efficiency, reduce shipping costs, and cut delivery times.*  
              **Projected impact:**  
              - **30% decrease** in freight costs due to efficient electrified transport.  
              - **Increased domestic trade** with rapid transport options.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Overview;