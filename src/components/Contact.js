import React from "react";
import ghlogo from "../github-mark.png";
import lilogo from "../linkedin.png";

const Contact = () => {
  return (
    <div id="contact">
      <div className="logoparent">
        <p className="logo">Contact:</p>
        <a className="logo" href="mailto:kaimuench90@gmail.com">
          <p>kaimuench90@gmail.com</p>
        </a>
      </div>
      <hr className="contactLine"></hr>

      <div className="logoparent">
        <a
          className="logo"
          href="https://github.com/kaimue"
          target="_blank"
          rel="noreferrer"
        >
          <img className="ghlogo" src={ghlogo} alt="github logo" />
        </a>
        <a
          className="logo"
          href="https://www.linkedin.com/in/kaimuench/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="lilogo" src={lilogo} alt="linkedin logo" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
