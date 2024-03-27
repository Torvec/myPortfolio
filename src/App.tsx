import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ContactMeSection from "./components/ContactMeSection";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function App() {
  // Refs for each section to trigger effects on scroll
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  // const resumeRef = useRef(null);

  // Parallax effects where it looks like the next section cover the previous section
  // uses the next section's ref to trigger the effect when the start of the section
  // intersects the end of the viewport
  const scrollHeroY = useScroll({
    target: heroRef,
    offset: ["start end", "start start"],
  });
  const heroY = useTransform(
    scrollHeroY.scrollYProgress,
    [0, 1],
    ["0vh", "100vh"],
  );
  const scrollAboutY = useScroll({
    target: aboutRef,
    offset: ["start end", "start start"],
  });
  const aboutY = useTransform(
    scrollAboutY.scrollYProgress,
    [0, 1],
    ["0vh", "100vh"],
  );
  const scrollProjectsY = useScroll({
    target: projectsRef,
    offset: ["start end", "start start"],
  });
  const projectsY = useTransform(
    scrollProjectsY.scrollYProgress,
    [0, 1],
    ["0vh", "100vh"],
  );
  // const scrollResumeY = useScroll({
  //   target: resumeRef,
  //   offset: ["start end", "start start"],
  // });
  // const resumeY = useTransform(
  //   scrollResumeY.scrollYProgress,
  //   [0, 1],
  //   ["0vh", "100vh"],
  // );

  // Background colors from tailwindcss
  const bgStone700 = "#44403c";
  const bgStone900 = "#1c1917";

  // Background Transition effects for each section, uses the previous section's ref
  // and triggers bg color transition when the start of the section intersects the middle
  // of the viewport
  const scrollAboutBg = useScroll({
    target: heroRef,
    offset: ["start center", "start start"],
  });
  const aboutBgColorTransition = useTransform(
    scrollAboutBg.scrollYProgress,
    [0, 1],
    [bgStone700, bgStone900],
  );
  const scrollProjectsBg = useScroll({
    target: aboutRef,
    offset: ["start center", "start start"],
  });
  const projectsBgColorTransition = useTransform(
    scrollProjectsBg.scrollYProgress,
    [0, 1],
    [bgStone700, bgStone900],
  );
  const scrollResumeBg = useScroll({
    target: projectsRef,
    offset: ["start center", "start start"],
  });
  const resumeBgColorTransition = useTransform(
    scrollResumeBg.scrollYProgress,
    [0, 1],
    [bgStone700, bgStone900],
  );

  // Section scale down effect
  const scrollHeroScale = useScroll({
    target: heroRef,
    offset: ["start end", "start start"],
  });
  const heroScale = useTransform(
    scrollHeroScale.scrollYProgress,
    [0, 1],
    ["100%", "80%"],
  );
  const scrollAboutScale = useScroll({
    target: aboutRef,
    offset: ["start end", "start start"],
  });
  const aboutScale = useTransform(
    scrollAboutScale.scrollYProgress,
    [0, 1],
    ["100%", "80%"],
  );
  const scrollProjectsScale = useScroll({
    target: projectsRef,
    offset: ["start end", "start start"],
  });
  const projectsScale = useTransform(
    scrollProjectsScale.scrollYProgress,
    [0, 1],
    ["100%", "80%"],
  );
  // const scrollResumeScale = useScroll({
  //   target: resumeRef,
  //   offset: ["start end", "start start"],
  // });
  // const resumeScale = useTransform(
  //   scrollResumeScale.scrollYProgress,
  //   [0, 1],
  //   ["100%", "80%"],
  // );

  // Section fade out effect
  const scrollHeroOpacity = useScroll({
    target: heroRef,
    offset: ["start end", "start start"],
  });
  const heroOpacity = useTransform(
    scrollHeroOpacity.scrollYProgress,
    [0, 1],
    [1, 0],
  );
  const scrollAboutOpacity = useScroll({
    target: aboutRef,
    offset: ["start end", "start start"],
  });
  const aboutOpacity = useTransform(
    scrollAboutOpacity.scrollYProgress,
    [0, 1],
    [1, 0],
  );
  const scrollProjectsOpacity = useScroll({
    target: projectsRef,
    offset: ["start end", "start start"],
  });
  const projectsOpacity = useTransform(
    scrollProjectsOpacity.scrollYProgress,
    [0, 1],
    [1, 0],
  );
  // const scrollResumeOpacity = useScroll({
  //   target: resumeRef,
  //   offset: ["start end", "start start"],
  // });
  // const resumeOpacity = useTransform(
  //   scrollResumeOpacity.scrollYProgress,
  //   [0, 1],
  //   ["100%", "0%"],
  // );

  console.log("Made in 2024 by Edward Vonschondorf");

  return (
    <>
      <Header />
      <main className="text-xl text-stone-200">
        <div className="relative z-10 bg-stone-950" id="hero">
          <HeroSection
            style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          />
        </div>
        <div
          ref={heroRef}
          className="relative z-20 bg-stone-950"
          id="about"
        >
          <AboutMeSection
            style={{
              y: aboutY,
              scale: aboutScale,
              opacity: aboutOpacity,
              backgroundColor: aboutBgColorTransition,
            }}
          />
        </div>
        <div
          ref={aboutRef}
          className="relative z-30 bg-stone-950"
          id="projects"
        >
          <ProjectsSection
            style={{
              y: projectsY,
              scale: projectsScale,
              opacity: projectsOpacity,
              backgroundColor: projectsBgColorTransition,
            }}
          />
        </div>
        <div
          ref={projectsRef}
          className="relative z-40 bg-stone-950"
          id="resume"
        >
          <ResumeSection
            style={{
              backgroundColor: resumeBgColorTransition,
            }}
          />
        </div>
      </main>
      <ContactMeSection />
    </>
  );
}
