import React from "react";
import GitHubLogo from "../assets/images/github.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const teamMembers = [
    { name: "Zephyrus Koryami (Sokuen Ryan)", github: "https://github.com/sokuenryan" },
    { name: "Sarah Obi", github: "https://github.com/soprettypink" },
    { name: "Koby Sysouvanh", github: "https://github.com/kobysysouvanh" },
    { name: "Francisco Cuevas", github: "https://github.com/fcuevas6" },
    { name: "Nandhini Ravichandran", github: "https://github.com/Nandhini0123" },
    { name: "Emad Faheem", github: "https://github.com/emadgfy" },
  ];

  const handleTitleClick = () => {
    window.open("https://github.com/chingu-voyages/V57-tier2-team-23", "_blank");
  };

  return (
    <footer className="w-full p-4 bg-gray-400 text-white text-center">
      <button
        onClick={handleTitleClick}
        className="text-lg font-bold border w-80 hover:bg-gray-500 mb-4"
      >
        Voyage 57 Tier2 Team23
      </button>

      <div className="flex justify-center flex-wrap gap-6 mb-4">
        {teamMembers.map((member) => (
          <a
            key={member.name}
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <img src={GitHubLogo} alt="GitHub Logo" className="h-5" />
            <span>{member.name}</span>
          </a>
        ))}
      </div>

      <p>&copy; {currentYear} PR Status Board. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
