import React from "react";
import { Link } from "react-router-dom";

const Header = ({ back }) => {
  return (
    <header className="flex items-center justify-center w-[95%] h-[200px] m-4 rounded-2xl text-white text-bold text-3xl bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 shadow-[0_6px_6px_rgba(8,_112,_184,_0.7)]">
      {back && (
        <Link to="/">
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </Link>
      )}
      <h1>
        <Link to="/"> Crypto Tracker </Link>
      </h1>
    </header>
  );
};

export default Header;
