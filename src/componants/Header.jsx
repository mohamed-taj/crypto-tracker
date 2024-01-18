import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Header = ({ back }) => {
  return (
    <header className="header">
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