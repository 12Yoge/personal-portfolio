import { Link } from "react-router-dom";

import { socialLinks } from "constants/header";
import { scrollToSection } from "utils/scrollBehaviour";

const Banner = () => {
  const handleScroll = () => {
    scrollToSection("project");
  };
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="bannerName">
          <h1>Hey, I'm Yogesh Senthilkumar</h1>
          <p>
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </p>
        </div>
        <div className="commonButton" onClick={handleScroll}>
          Projects
        </div>
      </div>

      <ul className="socialIcons">
        {socialLinks.map((item, index) => (
          <li className="socialIconsList" key={index}>
            <Link to={item?.linkTo} target="_blank">
              <img src={item?.image} alt="socialIcons" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="bannerScroll">
        <div className="bannerScrollMouse"></div>
      </div>
    </section>
  );
};

export default Banner;
