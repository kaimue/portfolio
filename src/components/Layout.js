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

  const [startY, setStartY] = useState();

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
          <svg id="BG1" height={wHeight} width={wWidth}>
            <polygon
              points={`0,${wHeight} 0,${wHeight / 3} ${
                wWidth / 1.2
              },${wHeight}`}
            />
          </svg>
          <svg id="BG2" height={wHeight} width={wWidth}>
            <polygon
              points={`${wWidth},${wHeight} ${
                wWidth / 3.5
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
              points={`${wWidth},${wHeight} 0,${wHeight / 2} 0,${wHeight}`}
            />
          </svg>
          <svg id="BG2" height={wHeight} width={wWidth}>
            <polygon
              points={`${wWidth},${wHeight} ${
                wWidth / 7
              },${wHeight} ${wWidth},${wHeight / 4}`}
            />
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
    if (classNames.welcomeClass === "active" && y > 80) {
      setClassNames({
        welcomeClass: "inactive",
        aboutClass: "active",
        skillClass: "inactive",
        contactClass: "inactive",
      });
    } else if (classNames.aboutClass === "active" && y > 80) {
      setClassNames({
        welcomeClass: "inactive",
        aboutClass: "inactive",
        skillClass: "active",
        contactClass: "inactive",
      });
    } else if (classNames.aboutClass === "active" && y < -80) {
      setClassNames({
        welcomeClass: "active",
        aboutClass: "inactive",
        skillClass: "inactive",
        contactClass: "inactive",
      });
    } else if (classNames.skillClass === "active" && y > 80) {
      setClassNames({
        welcomeClass: "inactive",
        aboutClass: "inactive",
        skillClass: "inactive",
        contactClass: "active",
      });
    } else if (classNames.skillClass === "active" && y < -80) {
      setClassNames({
        welcomeClass: "inactive",
        aboutClass: "active",
        skillClass: "inactive",
        contactClass: "inactive",
      });
    } else if (classNames.contactClass === "active" && y < -80) {
      setClassNames({
        welcomeClass: "inactive",
        aboutClass: "inactive",
        skillClass: "active",
        contactClass: "inactive",
      });
    }
  };

  const setOnTouch = (e) => {
    if (e.changedTouches) {
      const start = e.changedTouches[0].clientY;
      setStartY(start);
      console.log(startY);
    }
  };

  const onTouch = (e) => {
    if (e.changedTouches) {
      const endX = e.changedTouches[0].clientY;
      console.log(e.changedTouches[0].clientY);
      if (classNames.welcomeClass === "active" && startY > endX) {
        setClassNames({
          welcomeClass: "inactive",
          aboutClass: "active",
          skillClass: "inactive",
          contactClass: "inactive",
        });
      } else if (classNames.aboutClass === "active" && startY > endX) {
        setClassNames({
          welcomeClass: "inactive",
          aboutClass: "inactive",
          skillClass: "active",
          contactClass: "inactive",
        });
      } else if (classNames.aboutClass === "active" && startY < endX) {
        setClassNames({
          welcomeClass: "active",
          aboutClass: "inactive",
          skillClass: "inactive",
          contactClass: "inactive",
        });
      } else if (classNames.skillClass === "active" && startY > endX) {
        setClassNames({
          welcomeClass: "inactive",
          aboutClass: "inactive",
          skillClass: "inactive",
          contactClass: "active",
        });
      } else if (classNames.skillClass === "active" && startY < endX) {
        setClassNames({
          welcomeClass: "inactive",
          aboutClass: "active",
          skillClass: "inactive",
          contactClass: "inactive",
        });
      } else if (classNames.contactClass === "active" && startY < endX) {
        setClassNames({
          welcomeClass: "inactive",
          aboutClass: "inactive",
          skillClass: "active",
          contactClass: "inactive",
        });
      }
    }
  };

  window.addEventListener("wheel", onScroll);
  window.addEventListener("touchstart", setOnTouch);
  window.addEventListener("touchend", onTouch);

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
