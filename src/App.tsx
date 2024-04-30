import Header from "./components/template/header/Header";
import HeroSection from "./sections/HeroSection";
import AboutMeSection from "./sections/AboutMeSection";
import ProjectsSection from "./sections/ProjectsSection";
import ResumeSection from "./sections/ResumeSection";
import ContactMeSection from "./sections/ContactMeSection";
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
