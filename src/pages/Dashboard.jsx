import React from "react";
import { 
  PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer, LineChart, Line, RadialBarChart, RadialBar 
} from "recharts";

const financialData = [
  { name: "🚆 Railway Electrification", value: 35 },
  { name: "⚡ High-Speed Rail Upgrades", value: 10 },
  { name: "🚋 Passenger Train Fleet", value: 8 },
  { name: "🚛 Freight Rail Electrification", value: 12 },
  { name: "🔋 Energy Pipeline", value: 18 },
  { name: "💧 Clean Water Pipeline", value: 7.5 },
  { name: "☀️ Solar & Wind Power", value: 6 },
  { name: "🤖 AI Monitoring", value: 3.5 },
];

const jobData = [
  { name: "🚆 Railway Construction", jobs: 150000 },
  { name: "🔧 Pipeline Engineering", jobs: 100000 },
  { name: "🏭 Manufacturing", jobs: 75000 },
  { name: "💻 Technology & AI", jobs: 40000 },
  { name: "🚌 Public Transit", jobs: 50000 },
  { name: "🌞 Renewable Energy", jobs: 45000 },
];

const gdpData = [
  { year: "2025", gdp: 10 },
  { year: "2027", gdp: 18 },
  { year: "2030", gdp: 32 },
  { year: "2035", gdp: 50 },
  { year: "2040", gdp: 75 },
  { year: "2050", gdp: 100 },
];

const emissionsData = [
  { name: "⛽ Diesel Trains", emissions: 300 },
  { name: "⚡ Electric Trains", emissions: 50 },
];

const emissionsTrendData = [
  { year: "2025", emissions: 280 },
  { year: "2030", emissions: 200 },
  { year: "2035", emissions: 120 },
  { year: "2040", emissions: 80 },
  { year: "2050", emissions: 30 },
];

const infrastructureData = [
  { category: "🚆 Electrified Track (km)", value: 12000 },
  { category: "🚄 High-Speed Rail (km)", value: 3000 },
  { category: "☀️ Solar Energy (MW)", value: 5000 },
  { category: "🤖 AI Monitored Pipelines (km)", value: 8000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF", "#FF6666", "#DFFF00", "#FF1493"];

function Dashboard() {
  return (
    <div className="container">
      <h2>📊 Project Dashboard</h2>
      <p>
        The **Electrification of the Trans-Canada Railway** is a game-changer for Canada.  
        Here’s a fun breakdown of the **economic, environmental, and technological impact** of the project!
      </p>

      {/* Financial Breakdown - Pie Chart */}
      <div className="section">
        <h3>💰 Financial Breakdown</h3>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={financialData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={50}
              paddingAngle={5}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {financialData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="black" strokeWidth={1.5} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Job Creation - Bar Chart */}
      <div className="section">
        <h3>👷 Job Creation Per Sector</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={jobData} barSize={50}>
            <XAxis dataKey="name" stroke="#333" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="jobs">
              {jobData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* GDP Growth - Line Chart */}
      <div className="section">
        <h3>📈 GDP Growth Over Time</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={gdpData}>
            <XAxis dataKey="year" stroke="#333" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="gdp" stroke="red" strokeWidth={3} dot={{ fill: "red", r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Emissions Reduction - Horizontal Bar Chart */}
      <div className="section">
        <h3>🌿 Emissions Reduction (Comparison)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart layout="vertical" data={emissionsData}>
            <XAxis type="number" stroke="#333" />
            <YAxis dataKey="name" type="category" stroke="#333" />
            <Tooltip />
            <Legend />
            <Bar dataKey="emissions">
              {emissionsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 📉 Emissions Reduction Trend - Line Chart */}
      <div className="section">
        <h3>📉 Emissions Reduction Over Time</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={emissionsTrendData}>
            <XAxis dataKey="year" stroke="#333" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="emissions" stroke="red" strokeWidth={3} dot={{ fill: "red", r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Infrastructure Expansion - Bar Chart */}
      <div className="section">
        <h3>🏗️ Infrastructure & Technology Expansion</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={infrastructureData} barSize={60}>
            <XAxis dataKey="category" stroke="#333" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value">
              {infrastructureData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;