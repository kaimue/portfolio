import React from "react";
import { useState, useEffect } from "react";

const Skills = () => {
  const [className, setClassName] = useState("");

  useEffect(() => {
    setTimeout(setClassName("skills"), 10);
  }, []);

  return (
    <div id="skills">
      <div className="skillsParent">
        <h3 className={`html ${className}`}>HTML</h3>
        <h3 className={`css ${className}`}>CSS</h3>
        <h3 className={`sass ${className}`}>SASS</h3>
        <h3 className={`javaScript ${className}`}>JavaScript</h3>
        <h3 className={`react ${className}`}>React</h3>
        <h2 id="skillsSkills">Skills</h2>
      </div>
    </div>
  );
};

export default Skills;
