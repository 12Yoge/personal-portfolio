import React from "react";
import { scrollToSection } from "utils/scrollBehaviour";

import "components/About/about.scss";
import { mySkills } from "constants/header";

const About = () => {
  const handleScroll = () => {
    scrollToSection("contact");
  };

  return (
    <section className="commonSection aboutUs" id="about">
      <div className="container">
        <div className="commonHeading">
          <h1>About Me</h1>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>

        <div className="aboutUsMyData">
          <div className="aboutUsToKnow">
            <h2>Get to know me!</h2>
            <p>
              As a{" "}
              <span className="specialText">
                Frontend-Focused Web Developer
              </span>
              , I specialize in building and managing the front-end of websites
              and web applications, contributing to the success of the overall
              product. Explore some of my work in the Projects section.
            </p>

            <p>
              Memory updated Here's a more professional and simplified version:
              I enjoy sharing my knowledge and experience in{" "}
              <span className="specialText">web development</span> to help the
              developer community. Connect with me on LinkedIn and Instagram,
              where I regularly post valuable content on web development and
              programming
            </p>

            <p>
              I am seeking <span className="specialText">job</span>{" "}
              opportunities where I can contribute, learn, and grow. If you have
              a suitable position that aligns with my skills and experience,
              please feel free to <span className="specialText">contact</span>{" "}
              me.
            </p>

            <div className="commonButton" onClick={handleScroll}>
              Contact Us
            </div>
          </div>
          <div className="aboutUsMySkills">
            <h2>My Skills</h2>

            <ul>
              {mySkills.map((item, index) => (
                <li key={index}>{item?.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
