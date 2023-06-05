import React from "react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [className, setClassName] = useState("contactInitial");

  function onScroll() {
    if (window.innerHeight * 2.7 <= window.scrollY) {
      setClassName("contactActive");
    } else {
      setClassName("contact");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    //removes the eventlistener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", onScroll);
      console.log("listener removed");
    };
  }, []);

  return (
    <div id="contact">
      <p>Contact: kaimuench90@gmail.com</p>
      <hr className={className}></hr>
    </div>
  );
};

export default Contact;
