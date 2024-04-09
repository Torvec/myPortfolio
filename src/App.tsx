import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
// import ContactMeSection from "./components/ContactMeSection";

export default function App() {
  console.log("Made in 2024 by Edward Vonschondorf");

  return (
    <>
      <Header />
      <main className="bg-stone-950 text-xl text-stone-200">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutMeSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="resume">
          <ResumeSection />
        </div>
      </main>
      {/* <ContactMeSection /> */}
    </>
  );
}
