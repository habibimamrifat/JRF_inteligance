import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

const NavLanguageSelector = ({ languages }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [dropdownVisible, setDropdownVisible] = useState(false); // For toggling the dropdown

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language); // Set the selected language when clicked
    setDropdownVisible(false); // Close dropdown after selection
  };

  return (
    <div className="languageButtonSection">
      <button
        className="languageButton"
        onClick={() => setDropdownVisible(!dropdownVisible)} // Toggle dropdown visibility
      >
        {selectedLanguage}
        <GoTriangleDown
          className={`${dropdownVisible && "langDownArrowUp"}`}
        />
      </button>

      {dropdownVisible && (
        <div className="languageOptionDropdown">
          {languages.map((language, index) => (
            <h2 key={index} onClick={() => handleLanguageChange(language)}>
              <button className="langOptionButton">{language}</button>
            </h2>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLanguageSelector;
