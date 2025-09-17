import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
        {children /* Render children when Layout is used as wrapper */}
      <Footer />
    </div>
  );
};

export default Layout;