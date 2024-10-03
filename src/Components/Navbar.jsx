import React from "react";
import logo from "../assets/logo.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLogoSection">
        <img src={logo} alt="" id="navlogo" />
        <h2 id="navlogotext">DIGI KOEIN</h2>
      </div>
    </div>
  );
};

export default Navbar;
