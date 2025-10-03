// src/App.js
import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h1>User Auth System (Custom Supabase Table)</h1>
      <div style={{ border: "1px solid #ccc", padding: "20px", marginBottom: "20px" }}>
        <Register />
      </div>
      <div style={{ border: "1px solid #ccc", padding: "20px" }}>
        <Login />
      </div>
    </div>
  );
}

export default App;
