import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

export default function Landing() {
  return (
    <div className="w-full h-screen flex">
      {" "}
      {/* Flexbox container */}
      <Sidebar /> {/* Sidebar takes 30% width */}
      <Dashboard /> {/* Dashboard takes 70% width */}
    </div>
  );
}
