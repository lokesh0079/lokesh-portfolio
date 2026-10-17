import { useState } from "react";
import React from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <a href="#home" className="logo">
        Lokesh
      </a>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="menu-btn" onClick={toggleMenu}>
        <i className={menuOpen ? "bx bx-x" : "bx bx-menu"}></i>
      </button>
    </header>
  );
}

export default Navbar;