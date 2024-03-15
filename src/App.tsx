import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function App() {
  const projectsRef = useRef(null);
  const isInViewProjects = useInView(projectsRef, { once: false });

  return (
    <>
      <Header />
      <motion.div
        className="overflow-hidden bg-stone-900 text-xl text-stone-300"
        whileInView={{
          backgroundColor: isInViewProjects ? "#ea580c" : "#1c1917",
        }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        <section>
          <HeroSection />
        </section>
        <section>
          <AboutMeSection />
        </section>
        <section ref={projectsRef}>
          <ProjectsSection />
        </section>
        <section>
          <ResumeSection />
        </section>
        <section>
          <ContactMeSection />
        </section>
      </motion.div>
      <Footer />
    </>
  );
}
