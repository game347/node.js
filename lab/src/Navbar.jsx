// src/Navbar.js
import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li onClick={() => setPage("home")}>Home</li>
        <li onClick={() => setPage("about")}>About</li>
        <li onClick={() => setPage("services")}>Services</li>
        <li onClick={() => setPage("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
