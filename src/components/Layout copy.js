import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";

const Layout = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <ScrollContainer>
      <ScrollPage>
        <div id="welcome"></div>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <Welcome></Welcome>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <AboutMe></AboutMe>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <Skills></Skills>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
          <Contact></Contact>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Layout;
