import React from "react";
import Sidebar from "./Sidebar"; // Import Sidebar
import { Outlet } from "react-router-dom"; // For rendering child routes

const ProtectedLayout = () => {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="w-full">
        <Outlet /> {/* Render child routes here */}
      </div>
    </div>
  );
};

export default ProtectedLayout;
