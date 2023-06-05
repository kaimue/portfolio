import React from "react";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import HomeButton from "./HomeButton";

const Layout = () => {
  return (
    <div>
      <Welcome></Welcome>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Contact></Contact>
      <HomeButton></HomeButton>
    </div>
  );
};

export default Layout;
