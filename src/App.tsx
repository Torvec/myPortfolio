import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ContactMeSection from "./components/ContactMeSection";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function App() {
  // Parallax effect where the about section appears to move up and covers the hero section
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


  console.log(
    "Made in 2024 by Edward Vonschondorf with Vite, React, Framer Motion, and a dash of TypeScript.",
  );

  return (
    <>
      <Header />
      <motion.div
        ref={heroRef}
        className="overflow-hidden bg-stone-800 text-xl text-stone-300"
      >
        <motion.div style={{ y: heroY }} className="z-0">
          <HeroSection />
        </motion.div>
        <div className="relative z-10 bg-stone-800">
          <AboutMeSection />
        </div>
        <div>
          <ProjectsSection />
        </div>
        <div>
          <ResumeSection />
        </div>
        <div>
          <ContactMeSection />
        </div>
      </motion.div>
    </>
  );
}
