import React from "react";
import Header from "./Header";
import AccountApproved from "./AccountApproved";
import DashboardCards from "./DashboardCards";
import MessageReport from "./MessageReport";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navi = useNavigate();
  return (
    <>
      <Header />
      <div className="w-[100%] h-[calc(100vh-95px)] flex justify-center">
        <div className="w-[100%] h-full bg-[#f8fafc]">
          <div className="w-[95%] flex flex-col ml-[2.5%] mt-[2.5%] gap-[25px]">
            <AccountApproved />
            <DashboardCards />
            <MessageReport />
          </div>
        </div>
      </div>
    </>
  );
}
