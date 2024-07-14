import React from "react";

import myImage from "assets/images/professional.jpeg";

import "components/Header/header.scss";
import { HeaderLinks } from "constants/header";
import { scrollToSection, scrollToTop } from "utils/scrollBehaviour";

const Header = () => {
  const handleClick = (id) => {
    scrollToSection(id);
  };

  const handleScrollTop = () => {
    scrollToTop();
  };

  return (
    <header className="header" id="header">
      <div className="container headerContainer">
        <div className="headerLogo">
          <img
            src={myImage}
            alt="professionalImage"
            onClick={handleScrollTop}
          />
          <span>Yogesh</span>
        </div>
        <div className="headerLogo">
          <ul>
            {HeaderLinks.map((item, index) => (
              <li
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.id);
                }}
              >
                {item?.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
