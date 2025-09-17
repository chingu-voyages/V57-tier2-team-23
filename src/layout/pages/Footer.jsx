import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full p-4 bg-gray-400 text-white text-center">
        <p>&copy; {currentYear} PR Status Board. All rights reserved.</p>
        </footer>
    );
};

export default Footer;