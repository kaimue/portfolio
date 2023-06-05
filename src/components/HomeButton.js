import React from "react";
import { useState } from "react";

const HomeButton = () => {
  const [welcomeClass, setWelcomeClass] = useState("active");
  const [aboutClass, setAboutClass] = useState("inactive");
  const [skillClass, setSkillClass] = useState("inactive");
  const [contactClass, setContactClass] = useState("inactive");

  const height = window.innerHeight;

  const scrollTo = (x) => {
    window.scrollTo({
      top: x,
      behavior: "smooth",
    });
  };

  return (
    <div id="homeButton">
      <svg className="svgButtons">
        <ellipse
          cx="10"
          cy="10"
          rx={welcomeClass === "active" ? "8" : "5"}
          ry={welcomeClass === "active" ? "8" : "5"}
          className={welcomeClass}
          onClick={() => {
            scrollTo(0);
            setWelcomeClass("active");
            setAboutClass("inactive");
            setSkillClass("inactive");
            setContactClass("inactive");
          }}
        ></ellipse>

        <br></br>

        <ellipse
          cx="10"
          cy="30"
          rx={aboutClass === "active" ? "8" : "5"}
          ry={aboutClass === "active" ? "8" : "5"}
          className={aboutClass}
          onClick={() => {
            scrollTo(height);
            setWelcomeClass("inactive");
            setAboutClass("active");
            setSkillClass("inactive");
            setContactClass("inactive");
          }}
        ></ellipse>

        <br></br>

        <ellipse
          cx="10"
          cy="50"
          rx={skillClass === "active" ? "8" : "5"}
          ry={skillClass === "active" ? "8" : "5"}
          className={skillClass}
          onClick={() => {
            scrollTo(height * 2);
            setWelcomeClass("inactive");
            setAboutClass("inactive");
            setSkillClass("active");
            setContactClass("inactive");
          }}
        ></ellipse>

        <br></br>

        <ellipse
          cx="10"
          cy="70"
          rx={contactClass === "active" ? "8" : "5"}
          ry={contactClass === "active" ? "8" : "5"}
          className={contactClass}
          onClick={() => {
            scrollTo(height * 3);
            setWelcomeClass("inactive");
            setAboutClass("inactive");
            setSkillClass("inactive");
            setContactClass("active");
          }}
        ></ellipse>
      </svg>
    </div>
  );
};

export default HomeButton;
