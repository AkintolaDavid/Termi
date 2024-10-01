import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Import Navigate for redirection
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
// import Reports from "./Reports";
// import Wallet from "./Wallet";
import Profile from "./Profile"; // Import your Profile component
import Wallet from "./Wallet";
import WalletProceed from "./WalletProceed";
import ApiConsole from "./ApiConsole";

export default function Landing() {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/walletproceed" element={<WalletProceed />} />
          <Route path="/api-console" element={<ApiConsole />} />
        </Routes>
      </div>
    </div>
  );
}
