import React from "react";
import Header from "./Header";
import AccountApproved from "./AccountApproved";
import DashboardCards from "./DashboardCards";
import MessageReport from "./MessageReport";

export default function Dashboard() {
  return (
    <div className="w-[77%] h-full flex justify-center">
      <div className="w-[100%] h-full bg-[#f8fafc]">
        <Header />
        <div className="w-[94%] ml-[3%]">
          <div className="flex flex-col gap-6">
            <AccountApproved />
            <DashboardCards />
            <MessageReport />
          </div>
        </div>
      </div>
    </div>
  );
}
