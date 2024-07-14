import React, { useEffect, useState } from "react";

import { HeaderLinks } from "constants/header";

import { scrollToSection, scrollToTop } from "utils/scrollBehaviour";

import useScreenMobile from "hooks/useScreenMobile";

import myImage from "assets/images/professional.jpeg";
import hamburger from "assets/images/hamburger.svg";
import hamburgerClose from "assets/images/closeImg.svg";

import "components/Header/header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useScreenMobile({ size: 768 });

  const handleClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const handleScrollTop = () => {
    scrollToTop();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Add/remove body class based on menu state
    if (isMenuOpen && isMobile) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }

    // Clean up effect
    return () => {
      document.body.classList.remove("noScroll");
    };
  }, [isMenuOpen, isMobile]);

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
          {!isMobile && (
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
          )}
          {isMobile && (
            <img
              src={isMenuOpen ? hamburgerClose : hamburger}
              onClick={toggleMenu}
              alt="mobileResponsive"
            />
          )}
        </div>
      </div>

      {isMobile && isMenuOpen && (
        <div className={`headerLogo mobileLogo ${isMenuOpen ? "open" : ""}`}>
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
      )}
    </header>
  );
};

export default Header;
