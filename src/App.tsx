import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ContactMeSection from "./components/ContactMeSection";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function App() {
  const heroRef = useRef(null);
  const scrollHero = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(
    scrollHero.scrollYProgress,
    [0, 1],
    ["0%", "600%"],
  );

  const aboutRef = useRef(null);
  const scrollAbout = useScroll({
    target: aboutRef,
    offset: ["start end", "start start"],
  });
  const aboutY = useTransform(
    scrollAbout.scrollYProgress,
    [0, 1],
    ["0%", "50%"],
  );

  const projectsRef = useRef(null);
  const scrollProjects = useScroll({
    target: projectsRef,
    offset: ["start end", "start start"],
  });
  const projectsY = useTransform(
    scrollProjects.scrollYProgress,
    [0, 1],
    ["0%", "50%"],
  );

  const resumeRef = useRef(null);
  const scrollResume = useScroll({
    target: resumeRef,
    offset: ["start end", "start start"],
  });
  const resumeY = useTransform(
    scrollResume.scrollYProgress,
    [0, 1],
    ["0%", "20%"],
  );

  console.log(
    "Made in 2024 by Edward Vonschondorf with Vite, React, Framer Motion, and a dash of TypeScript.",
  );

  return (
    <>
      <Header />
      <motion.div className="overflow-hidden bg-stone-800 text-xl text-stone-300">
        <motion.div style={{ y: heroY }} className="z-0">
          <HeroSection />
        </motion.div>
        <motion.div
          ref={heroRef}
          style={{ y: aboutY }}
          className="relative z-10 bg-stone-800"
        >
          <AboutMeSection />
        </motion.div>
        <motion.div
          ref={aboutRef}
          className="relative z-20 bg-stone-700"
          style={{ y: projectsY }}
        >
          <ProjectsSection />
        </motion.div>
        <motion.div
          ref={projectsRef}
          className="relative z-30 bg-stone-700"
          style={{ y: resumeY }}
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
