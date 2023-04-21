import React from "react";
//style
import styles from "../styles/Projects.module.scss";
//media
import {ProjectsData} from "../data/index";

const Projects = () => {
  return (
    <div className={styles.MyProjects}>
      <span className={styles.HeadingShadow}>MY PROJECTS</span>
      <h3>Latest Projects</h3>
      <div className={styles.ProjectsSection}>
        {ProjectsData.length
          ? ProjectsData.map((item) => (
              <div className={styles.ProjectBox} key={item.name}>
                <div>
                  <div>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <h4>{item.name}</h4>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    View
                  </a>
                </div>
                <div className={styles.Description}>
                  {item.description ? (
                    <p>
                      {item.description}{" "}
                      {item.source ? (
                        <a href={item.source} target="_blank" rel="noreferrer">
                          Source
                        </a>
                      ) : null}
                    </p>
                  ) : (
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  )}
                </div>
              </div>
            ))
          : null}
      </div>
      <div className={styles.ProjectOfferBox}>
        <div>
          <p>Have any project in mind?</p>
          <span>I'm available for freelancing</span>
        </div>
        <a href="https://wa.me/+989210393561" target="_blank" rel="noreferrer">
          Tell Me
        </a>
      </div>
    </div>
  );
};

export default Projects;
