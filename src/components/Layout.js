import React, { useEffect, useState, useRef } from "react";

import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";

const Layout = () => {
  const [classNames, setClassNames] = useState({
    welcomeClass: "active",
    aboutClass: "inactive",
    skillClass: "inactive",
    contactClass: "inactive",
  });

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef?.current;

    if (!element) return;

    const observer = new ResizeObserver(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    });

    observer.observe(element);
    return () => {
      // Cleanup the observer by unobserving all elements
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    displayed();
  }, [classNames, dimensions]);

  const displayed = () => {
    const wHeight = dimensions.height;
    const wWidth = dimensions.width;
    if (classNames.welcomeClass === "active") {
      return (
        <div>
          <svg id="BG" height={wHeight} width={wWidth}>
            <rect height={wHeight} width={wWidth} />
          </svg>
          <svg id="BG1" height={wHeight} width={wWidth}>
            <polygon
              points={`0,${wHeight / 4} 0,${wHeight} ${wWidth},${wHeight}`}
            />
          </svg>
          <svg id="BG2" height={wHeight} width={wWidth}>
            <polygon
              points={`${wWidth},${wHeight} ${
                wWidth / 5
              },${wHeight} ${wWidth},${wHeight / 1.5}`}
            />
          </svg>
          <Welcome></Welcome>
        </div>
      );
    } else if (classNames.aboutClass === "active") {
      return (
        <div>
          <svg id="BG1" height={wHeight} width={wWidth}>
            <polygon
              points={`0,${wHeight / 3} 0,${wHeight} ${wWidth},${wHeight}`}
            />
          </svg>
          <svg id="BG2" height={wHeight} width={wWidth}>
            <polygon points={`${wWidth},${wHeight} 0,${wHeight} ${wWidth},0`} />
          </svg>
          <AboutMe></AboutMe>
        </div>
      );
    } else if (classNames.skillClass === "active") {
      return (
        <div>
          <svg id="BG1" height={wHeight} width={wWidth}>
            <polygon
              points={`${wWidth},${wHeight} ${
                wWidth / 4
              },${wHeight} ${wWidth},${wHeight / 4}`}
            />
          </svg>
          <svg id="BG2" height={wHeight} width={wWidth}>
            <polygon
              points={`0,${wHeight / 6} 0,${wHeight} ${wWidth},${wHeight}`}
            />
          </svg>
          <Skills></Skills>
        </div>
      );
    } else if (classNames.contactClass === "active") {
      return (
        <div>
          <svg id="BG1" height={wHeight} width={wWidth}>
            <polygon
              points={`${wWidth},${wHeight} ${
                wWidth / 4
              },${wHeight} ${wWidth},0`}
            />
          </svg>
          <svg id="BG2" height={wHeight} width={wWidth}>
            <polygon
              points={`0,${wHeight / 3} 0,${wHeight} ${wWidth},${wHeight}`}
            />
          </svg>
          <Contact></Contact>
        </div>
      );
    }
  };

  const onScroll = (e) => {
    const y = e.deltaY;
    console.log(y);
    if (classNames.welcomeClass === "active" && y > 50) {
      setClassNames({
        welcomeClass: "inactive",
        aboutClass: "active",
        skillClass: "inactive",
        contactClass: "inactive",
      });
    } else if (classNames.aboutClass === "active" && y > 50) {
      setClassNames({
        welcomeClass: "inactive",
        aboutClass: "inactive",
        skillClass: "active",
        contactClass: "inactive",
      });
    } else if (classNames.aboutClass === "active" && y < -50) {
      setClassNames({
        welcomeClass: "active",
        aboutClass: "inactive",
        skillClass: "inactive",
        contactClass: "inactive",
      });
    } else if (classNames.skillClass === "active" && y > 50) {
      setClassNames({
        welcomeClass: "inactive",
        aboutClass: "inactive",
        skillClass: "inactive",
        contactClass: "active",
      });
    } else if (classNames.skillClass === "active" && y < -50) {
      setClassNames({
        welcomeClass: "inactive",
        aboutClass: "active",
        skillClass: "inactive",
        contactClass: "inactive",
      });
    } else if (classNames.contactClass === "active" && y < -50) {
      setClassNames({
        welcomeClass: "inactive",
        aboutClass: "inactive",
        skillClass: "active",
        contactClass: "inactive",
      });
    }
  };

  window.addEventListener("wheel", onScroll);

  return (
    <div>
      <div id="homeButton">
        <button
          className={classNames.welcomeClass}
          onClick={() => {
            setClassNames({
              welcomeClass: "active",
              aboutClass: "inactive",
              skillClass: "inactive",
              contactClass: "inactive",
            });
          }}
        ></button>
        <button
          className={classNames.aboutClass}
          onClick={() => {
            setClassNames({
              welcomeClass: "inactive",
              aboutClass: "active",
              skillClass: "inactive",
              contactClass: "inactive",
            });
          }}
        ></button>
        <button
          className={classNames.skillClass}
          onClick={() => {
            setClassNames({
              welcomeClass: "inactive",
              aboutClass: "inactive",
              skillClass: "active",
              contactClass: "inactive",
            });
          }}
        ></button>
        <button
          className={classNames.contactClass}
          onClick={() => {
            setClassNames({
              welcomeClass: "inactive",
              aboutClass: "inactive",
              skillClass: "inactive",
              contactClass: "active",
            });
          }}
        ></button>
        <button id="hiddenButton"></button>
      </div>
      <div ref={elementRef}>{displayed()}</div>
    </div>
  );
};

export default Layout;
