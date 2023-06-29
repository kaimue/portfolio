import React from "react";
import { useState } from "react";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";

const Layout = () => {
  const [welcomeClass, setWelcomeClass] = useState("active");
  const [aboutClass, setAboutClass] = useState("inactive");
  const [skillClass, setSkillClass] = useState("inactive");
  const [contactClass, setContactClass] = useState("inactive");

  const displayed = () => {
    if (welcomeClass === "active") {
      return <Welcome></Welcome>;
    } else if (aboutClass === "active") {
      return <AboutMe></AboutMe>;
    } else if (skillClass === "active") {
      return <Skills></Skills>;
    } else if (contactClass === "active") {
      return <Contact></Contact>;
    }
  };

  const onScroll = (e) => {
    const y = e.deltaY;
    console.log(y);
    if (welcomeClass === "active" && y > 40) {
      setWelcomeClass("inactive");
      setAboutClass("active");
      setSkillClass("inactive");
      setContactClass("inactive");
      displayed();
    } else if (aboutClass === "active" && y > 40) {
      setWelcomeClass("inactive");
      setAboutClass("inactive");
      setSkillClass("active");
      setContactClass("inactive");
      displayed();
    } else if (aboutClass === "active" && y < -40) {
      setWelcomeClass("active");
      setAboutClass("inactive");
      setSkillClass("inactive");
      setContactClass("inactive");
      displayed();
    } else if (skillClass === "active" && y > 40) {
      setWelcomeClass("inactive");
      setAboutClass("inactive");
      setSkillClass("inactive");
      setContactClass("active");
      displayed();
    } else if (skillClass === "active" && y < -40) {
      setWelcomeClass("inactive");
      setAboutClass("active");
      setSkillClass("inactive");
      setContactClass("inactive");
      displayed();
    } else if (contactClass === "active" && y < -40) {
      setWelcomeClass("inactive");
      setAboutClass("inactive");
      setSkillClass("active");
      setContactClass("inactive");
      displayed();
    }
  };

  window.addEventListener("wheel", onScroll);

  return (
    <div>
      <div>
        <svg id="BG" height={window.innerHeight} width={window.innerWidth}>
          <polygon
            points={`0,0 0,${window.innerHeight} ${window.innerWidth},${window.innerHeight}`}
          />
          Sorry, your browser does not support inline SVG.
        </svg>
      </div>
      <div id="homeButton">
        <button
          className={welcomeClass}
          onClick={() => {
            setWelcomeClass("active");
            setAboutClass("inactive");
            setSkillClass("inactive");
            setContactClass("inactive");
            displayed();
          }}
        ></button>
        <button
          className={aboutClass}
          onClick={() => {
            setWelcomeClass("inactive");
            setAboutClass("active");
            setSkillClass("inactive");
            setContactClass("inactive");
            displayed();
          }}
        ></button>
        <button
          className={skillClass}
          onClick={() => {
            setWelcomeClass("inactive");
            setAboutClass("inactive");
            setSkillClass("active");
            setContactClass("inactive");
            displayed();
          }}
        ></button>
        <button
          className={contactClass}
          onClick={() => {
            setWelcomeClass("inactive");
            setAboutClass("inactive");
            setSkillClass("inactive");
            setContactClass("active");
            displayed();
          }}
        ></button>
        <button id="hiddenButton"></button>
      </div>
      <div id="layout">{displayed()}</div>
    </div>
  );
};

export default Layout;
