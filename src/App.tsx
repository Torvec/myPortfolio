// import AnimTesting from './components/AnimTesting'
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ContactMeSection from "./components/ContactMeSection";

export default function App() {
  return (
    <div className="overflow-hidden bg-stone-900 text-xl text-stone-300">
      {/* <AnimTesting /> */}
      <Logo />
      <Navigation />
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactMeSection />
    </div>
  );
}
