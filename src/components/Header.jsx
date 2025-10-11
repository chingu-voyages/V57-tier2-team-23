import React from "react";
import Logo from "../assets/images/PR_logo.png";

const Header = () => {
  const handleReturnHome = () => {
    window.location.href = "/";
  }

  const handleCurrentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="w-full h-20 p-4 text-white flex justify-center items-center bg-gray-600">
      <div className="absolute left-4 flex flex-row items-center cursor-pointer">
        <img src={Logo} alt="Logo" className="h-8 mr-4" />
        <h1 className="text-2xl font-bold" onClick={handleReturnHome}>PR Status Board</h1>
      </div>

      <div className="absolute right-4">
        <div className="flex space-x-4">{handleCurrentDay}</div>
      </div>


    </header>
  );
};

export default Header;