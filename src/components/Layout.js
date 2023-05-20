import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";

const Layout = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <ul id="homeButton">
        <li onClick={scrollToTop}>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
      </ul>
      <Welcome></Welcome>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};

export default Layout;
