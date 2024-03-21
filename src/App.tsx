import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ContactMeSection from "./components/ContactMeSection";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function App() {
  // Refs for each section to trigger effects on scroll
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
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
  const scrollResumeY = useScroll({
    target: resumeRef,
    offset: ["start end", "start start"],
  });
  const resumeY = useTransform(
    scrollResumeY.scrollYProgress,
    [0, 1],
    ["0vh", "100vh"],
  );
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
    ["#292524", "#1c1917"],
  );
  const scrollProjectsBg = useScroll({
    target: aboutRef,
    offset: ["start center", "start start"],
  });
  const projectsBgColorTransition = useTransform(
    scrollProjectsBg.scrollYProgress,
    [0, 1],
    ["#292524", "#1c1917"],
  );
  const scrollResumeBg = useScroll({
    target: projectsRef,
    offset: ["start center", "start start"],
  });
  const resumeBgColorTransition = useTransform(
    scrollResumeBg.scrollYProgress,
    [0, 1],
    ["#292524", "#1c1917"],
  );

  console.log("Made in 2024 by Edward Vonschondorf");

  return (
    <>
      <Header />
      <motion.div className="overflow-hidden bg-stone-900 text-xl text-stone-300">
        <motion.div style={{ y: heroY }} className="z-0">
          <HeroSection />
        </motion.div>
        <motion.div
          ref={heroRef}
          style={{ y: aboutY, backgroundColor: aboutBgColorTransition }}
          className="relative z-10"
        >
          <AboutMeSection />
        </motion.div>
        <motion.div
          ref={aboutRef}
          className="relative z-20"
          style={{ y: projectsY, backgroundColor: projectsBgColorTransition }}
        >
          <ProjectsSection />
        </motion.div>
        <motion.div
          ref={projectsRef}
          className="relative z-30"
          style={{ y: resumeY, backgroundColor: resumeBgColorTransition }}
        >
          <ResumeSection />
        </motion.div>
        <div ref={resumeRef} className="relative z-40 bg-stone-950">
          <ContactMeSection />
        </div>
      </motion.div>
    </>
  );
}
