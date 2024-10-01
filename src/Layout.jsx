// Layout.js
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
