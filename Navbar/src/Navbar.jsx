import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Logo</div>

        <div className="ham-burger-icon" onClick={handleShowNavbar}>
          Hamburger
        </div>

        <div className={`show-list ${showNavbar ? "active" : " "}`}>
          <ul>
            <li>Home</li>
            <li>Education</li>
            <li>Career</li>
            <li>Work</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
