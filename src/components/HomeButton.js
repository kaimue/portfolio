import React from "react";

const HomeButton = ({ aboutName, welcomeName, skillName, contactName }) => {
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
        <rect
          y="10"
          width={welcomeName === "active" ? "15" : "10"}
          height={welcomeName === "active" ? "15" : "10"}
          rx={welcomeName === "active" ? "0" : "10"}
          className={welcomeName}
          onClick={() => {
            scrollTo(0);
          }}
        ></rect>

        <br></br>

        <rect
          y="30"
          width={aboutName === "active" ? "15" : "10"}
          height={aboutName === "active" ? "15" : "10"}
          rx={aboutName === "active" ? "0" : "10"}
          className={aboutName}
          onClick={() => {
            scrollTo(height);
          }}
        ></rect>

        <br></br>

        <rect
          y="50"
          width={skillName === "active" ? "15" : "10"}
          height={skillName === "active" ? "15" : "10"}
          rx={skillName === "active" ? "0" : "10"}
          className={skillName}
          onClick={() => {
            scrollTo(height * 2);
          }}
        ></rect>

        <br></br>

        <rect
          y="70"
          width={contactName === "active" ? "15" : "10"}
          height={contactName === "active" ? "15" : "10"}
          rx={contactName === "active" ? "0" : "10"}
          className={contactName}
          onClick={() => {
            scrollTo(height * 3);
          }}
        ></rect>
      </svg>
    </div>
  );
};

export default HomeButton;
