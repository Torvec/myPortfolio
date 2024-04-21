import Header from "./components/template/header/Header";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/template/Footer";

export default function App() {
  console.log("Made in 2024 by Edward Vonschondorf");

  return (
    <>
      <Header />
      <main className="bg-stone-950">
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
