import React from "react";
import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [className, setClassName] = useState("");
  const [skillsPos, setSkillsPos] = useState({ left: 0, top: 0 });
  const [htmlPos, setHtmlPos] = useState({ left: 0, top: 0 });
  const [cssPos, setCssPos] = useState({ left: 0, top: 0 });
  const [sassPos, setSassPos] = useState({ left: 0, top: 0 });
  const [reactPos, setReactPos] = useState({ left: 0, top: 0 });
  const [javaScriptPos, setJavaScriptPos] = useState({ left: 0, top: 0 });
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const skillsRef = useRef(null);
  const htmlRef = useRef(null);
  const cssRef = useRef(null);
  const sassRef = useRef(null);
  const javaScriptRef = useRef(null);
  const reactRef = useRef(null);

  const getPos = () => {
    const skills = skillsRef?.current;
    if (!skills) return;
    const posSkills = skills.getBoundingClientRect();
    setSkillsPos({
      left: posSkills.left + posSkills.width / 2,
      top: posSkills.top + posSkills.height / 2,
    });
    console.log(posSkills);

    const html = htmlRef?.current;
    if (!html) return;
    const posHtml = html.getBoundingClientRect();
    setHtmlPos({
      left: posHtml.left + posHtml.width / 2,
      top: posHtml.top + posHtml.height / 2,
    });

    const css = cssRef?.current;
    if (!css) return;
    const posCss = css.getBoundingClientRect();
    setCssPos({
      left: posCss.left + posCss.width / 2,
      top: posCss.top + posCss.height / 2,
    });

    const react = reactRef?.current;
    if (!react) return;
    const posReact = react.getBoundingClientRect();
    setReactPos({
      left: posReact.left + posReact.width / 2,
      top: posReact.top + posReact.height / 2,
    });

    const sass = sassRef?.current;
    if (!sass) return;
    const posSass = sass.getBoundingClientRect();
    setSassPos({
      left: posSass.left + posSass.width / 2,
      top: posSass.top + posSass.height / 2,
    });

    const javaScript = javaScriptRef?.current;
    if (!javaScript) return;
    const posJavaScript = javaScript.getBoundingClientRect();
    setJavaScriptPos({
      left: posJavaScript.left + posJavaScript.width / 2,
      top: posJavaScript.top + posJavaScript.height / 2,
    });
  };

  useEffect(() => {
    setClassName("skills");
  }, []);

  useEffect(() => {
    getPos();
    const element = htmlRef?.current;

    if (!element) return;

    const observer = new ResizeObserver(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [dimensions]);

  return (
    <div>
      <div>
        <svg
          id="skillsSvg"
          width={window.innerWidth}
          height={window.innerHeight}
          viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1={skillsPos.left}
            y1={skillsPos.top}
            x2={htmlPos.left}
            y2={htmlPos.top}
          />
          <line
            x1={skillsPos.left}
            y1={skillsPos.top}
            x2={cssPos.left}
            y2={cssPos.top}
          />
          <line
            x1={skillsPos.left}
            y1={skillsPos.top}
            x2={reactPos.left}
            y2={reactPos.top}
          />
          <line
            x1={skillsPos.left}
            y1={skillsPos.top}
            x2={sassPos.left}
            y2={sassPos.top}
          />
          <line
            x1={skillsPos.left}
            y1={skillsPos.top}
            x2={javaScriptPos.left}
            y2={javaScriptPos.top}
          />
        </svg>
      </div>
      <div id="skills">
        <div className="skillsParent">
          <h3 id="html" className={`html ${className}`} ref={htmlRef}>
            HTML
          </h3>
          <h3 className={`css ${className}`} ref={cssRef}>
            CSS
          </h3>
          <h3 className={`sass ${className}`} ref={sassRef}>
            SASS
          </h3>
          <h3 className={`javaScript ${className}`} ref={javaScriptRef}>
            JavaScript
          </h3>
          <h3 className={`react ${className}`} ref={reactRef}>
            React
          </h3>
          <h2 id="skillsSkills" ref={skillsRef}>
            Skills
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
