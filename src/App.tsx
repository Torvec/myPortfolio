import "./app.css";
import Header from "./components/ui/Header";
import HeroSection from "./components/sections/HeroSection";
import AboutMeSection from "./components/sections/AboutMeSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ResumeSection from "./components/sections/ResumeSection";
import ContactMeSection from "./components/sections/ContactMeSection";
import Footer from "./components/ui/Footer";

export default function App() {
  console.log("Made in 2024 by Edward Vonschondorf");

  return (
    <>
      <Header />
      <main className="bg-stone-900">
        <HeroSection />
        <AboutMeSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactMeSection />
      </main>
      <Footer />
    </>
  );
}
