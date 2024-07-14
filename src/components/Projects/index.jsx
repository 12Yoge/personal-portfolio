import { Link } from "react-router-dom";
import "components/Projects/projects.scss";

import { projectList } from "constants/projects";

import navigateImage from "assets/images/projects/navigator.svg";
import { useState } from "react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const visibleProject = showAll ? projectList : projectList.slice(0, 3);

  return (
    <section className="commonSection projects" id="project">
      <div className="container">
        <div className="commonHeading">
          <h1>Projects</h1>
          <p>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>

        <ul className="projectsList">
          {visibleProject.map((data, index) => (
            <li className="projectsListCard" key={index}>
              <div className="projectsListCardImg">
                <img src={data?.image} alt="projectImage" />
              </div>
              <div className="projectsListCardContents">
                <span>{data?.projectName}</span>
                <p>{data?.projectDescription}</p>
                <Link to={data?.projectLink} target="_blank">
                  <img src={navigateImage} alt="navigator" />
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="projectsViewMore" onClick={handleClick}>
          {showAll ? "View Less" : "View More"}
        </div>
      </div>
    </section>
  );
};

export default Projects;
