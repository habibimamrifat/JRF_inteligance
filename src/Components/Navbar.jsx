import React, { useContext } from "react";
import { HomeDataContext } from "../Layout/Home";
import NavLanguageSelector from "./NavLanguageSelector";
const Navbar = () => {
  const homeData = useContext(HomeDataContext);
  const { logo, logoText, menus, languages } = homeData.navbar;

  return (
    <div className="navbar">
      {/* logo and menu section */}
      <div className="logoandMenuSection">
        {/* logo section */}
        <div className="navbarLogoSection">
          <img src={logo} alt="" id="navlogo" />
          <h2 id="navlogotext">{logoText}</h2>
        </div>

        {/* menu section  */}
        <div className="menusection">
          {menus.map((menu, index) => (
            <a href={menu.link} key={index}>
                <h2 className="menu">
              {menu.name}
            </h2>
            </a>
          ))}
        </div>
      </div>

      <div>
        <NavLanguageSelector
        languages={languages}
        />
      </div>
    </div>
  );
};

export default Navbar;
