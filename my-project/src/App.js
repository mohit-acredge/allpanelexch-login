// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import UserTable from "./Components/UserTable";

function App() {
  return (
    <Router>
      <div className="App min-h-screen h-full bg-gradient-to-b from-[#0088CC] to-[#2c3e50] overflow-hidden">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/usertable" element={<UserTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
