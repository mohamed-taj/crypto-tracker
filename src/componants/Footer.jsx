// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">&copy; 2024 Crypto Tracker</p>
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/facebook-icon.png" // Replace with your actual icon image
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/twitter-icon.png" // Replace with your actual icon image
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/instagram-icon.png" // Replace with your actual icon image
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
