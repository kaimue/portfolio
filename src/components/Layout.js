import React from "react";
import { useState, useEffect } from "react";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import HomeButton from "./HomeButton";

const Layout = () => {
  const [welcomeClass, setWelcomeClass] = useState("active");
  const [aboutClass, setAboutClass] = useState("inactive");
  const [skillClass, setSkillClass] = useState("inactive");
  const [contactClass, setContactClass] = useState("inactive");

  function onScroll() {
    if (window.scrollY < window.innerHeight * 0.7) {
      setWelcomeClass("active");
      setAboutClass("inactive");
      setSkillClass("inactive");
      setContactClass("inactive");
    } else if (
      window.scrollY >= window.innerHeight * 0.7 &&
      window.scrollY < window.innerHeight * 1.7
    ) {
      setWelcomeClass("inactive");
      setAboutClass("active");
      setSkillClass("inactive");
      setContactClass("inactive");
    } else if (
      window.scrollY >= window.innerHeight * 1.7 &&
      window.scrollY < window.innerHeight * 2.7
    ) {
      setWelcomeClass("inactive");
      setAboutClass("inactive");
      setSkillClass("active");
      setContactClass("inactive");
    } else {
      setWelcomeClass("inactive");
      setAboutClass("inactive");
      setSkillClass("inactive");
      setContactClass("active");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    //removes the eventlistener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <Welcome></Welcome>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Contact></Contact>
      <HomeButton
        welcomeName={welcomeClass}
        aboutName={aboutClass}
        skillName={skillClass}
        contactName={contactClass}
      ></HomeButton>
    </div>
  );
};

export default Layout;
