// Footer.js
import React from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-[95%] my-8 rounded-lg bg-white-800 text-black p-4 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
      <div className="container mx-auto flex items-center gap-6 justify-around ">
        <p className="text-sm">&copy; 2024 Crypto Tracker by Mohamed Taj</p>
        <div className="flex gap-9">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-7 h-8" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="w-7 h-8" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <IoMdMail className="w-7 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
