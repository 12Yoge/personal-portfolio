import React from "react";

import myImage from "assets/images/professional.jpeg";

import "components/Header/header.scss";
import { HeaderLinks } from "constants/header";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container headerContainer">
        <div className="headerLogo">
          <img src={myImage} alt="professionalImage" />
          <span>Yogesh</span>
        </div>
        <div className="headerLogo">
          <ul>
            {HeaderLinks.map((item, index) => (
              <li key={index}>{item?.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
