import React from "react";
import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 QuickCart is Live</h1>
      <p>Your deployment is working fine</p>

      <button
        onClick={() => alert("Button clicked!")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;