import React from "react";
import { useState, useEffect } from "react";

const AboutMe = () => {
  const [className, setClassName] = useState("aboutMeInitial");

  function onScroll() {
    if (
      window.scrollY >= window.innerHeight * 0.7 &&
      window.scrollY <= window.innerHeight * 1.3
    ) {
      setClassName("aboutMeActive");
    } else {
      setClassName("aboutMe");
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
    <div id="aboutMe">
      <div className={className}>
        <div>
          <h2>About Me</h2>
          <p>
            Thus the best way this element can be used is in layouts. You can
            simply create multiple layouts, for e.g.- the Dashboard Layout(for
            the profile and members page) or the Main Layout(for login and
            logout, basically when the user is not signed in). Finally, you can
            simply inject whichever component one needs depending on its route
            rather than wrapping each route component in a parent layout
            component like:
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
