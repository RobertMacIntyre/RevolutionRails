import React from "react";

function Map() {
  return (
    <div className="container">
      <h2>📍 Trans-Canada Railway Route</h2>
      <p>Railway Map showing the planned electrification route.</p>

      {/* Display Image Instead of an Iframe */}
      <img
        src="https://www.cn.ca/-/media/Images/Our-Services/Images/CN-Network-map-EN.jpg"
        alt="Trans-Canada Railway Route"
        style={{ width: "100%", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
      />
    </div>
  );
}

export default Map;