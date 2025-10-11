import React from "react";

const Footer = () => {

  const teamMembers = [
    { avatar: "https://www.github.com/sokuenryan.png", name: "Zephyrus Koryami (Sokuen Ryan)", github: "https://github.com/sokuenryan" },
    { avatar: "https://www.github.com/soprettypink.png", name: "Sarah Obi", github: "https://github.com/soprettypink" },
    { avatar: "https://www.github.com/kobysysouvanh.png", name: "Koby Sysouvanh", github: "https://github.com/kobysysouvanh" },
    { avatar: "https://www.github.com/fcuevas6.png", name: "Francisco Cuevas", github: "https://github.com/fcuevas6" },
    { avatar: "https://www.github.com/Nandhini0123.png", name: "Nandhini Ravichandran", github: "https://github.com/Nandhini0123" },
    { avatar: "https://www.github.com/emadgfy.png", name: "Emad Faheem", github: "https://github.com/emadgfy" },
  ];

  return (
    <footer className="w-full bg-gray-400 text-white text-center">
      <div className="flex flex-row w-full justify-center items-center gap-4 font-bold">
        <p>Meet the Chingu Team</p>
      </div>

      <div className="flex justify-center flex-wrap gap-6 mt-4">
        {teamMembers.map((member) => (
          <a
            key={member.name}
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
          <div className="flex flex-col items-center">
            <img src={member.avatar} alt="Member Avatar" className="h-10" />
            <span>{member.name}</span>
          </div>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
