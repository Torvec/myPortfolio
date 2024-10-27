import "./app.css";
// import { useEffect } from "react";
import Header from "./components/ui/Header";
import HeroSection from "./components/sections/HeroSection";
import AboutMeSection from "./components/sections/AboutMeSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ResumeSection from "./components/sections/ResumeSection";
import ContactMeSection from "./components/sections/ContactMeSection";
import Footer from "./components/ui/Footer";

export default function App() {
  // useEffect(() => {
  //   localStorage.setItem("theme", "darkTheme");
  //   const root = document.getElementById("root");
  //   const selectedTheme = localStorage.getItem("theme");
  //   if (selectedTheme) {
  //     root && root.classList.add(selectedTheme);
  //   } else if (window.matchMedia("(prefers-color-scheme: dark").matches) {
  //     root && root.classList.add("darkTheme");
  //   } else {
  //     root && root.classList.add("lightTheme");
  //   }
  // }, [])

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
