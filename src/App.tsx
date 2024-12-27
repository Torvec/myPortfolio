import "./app.css";
import Header from "./components/ui/header";
import HeroSection from "./sections/hero-section";
import AboutMeSection from "./sections/about-me-section";
import ProjectsSection from "./sections/projects-section";
import ResumeSection from "./sections/resume-section";
import ContactMeSection from "./sections/contact-me-section";
import Footer from "./components/ui/footer";

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
