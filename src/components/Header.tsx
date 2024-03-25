import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
// import Navigation from "./Navigation";

const Logo = () => {
  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={handleClickToTop} className="text-lg font-bold uppercase">
      EV
    </button>
  );
};

const Navigation = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };
  const handleClickToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      window.scrollTo({ top: rect.top + window.scrollY, behavior: "smooth" });
    }
  };
  const MenuItem = ({
    children,
    anchor,
  }: {
    children: string;
    anchor: string;
  }) => {
    return (
      <li>
        <button
          className="uppercase"
          onClick={() => handleClickToSection(anchor)}
        >
          {children}
        </button>
      </li>
    );
  };
  return (
    <>
      <button onClick={toggleMenu} className="flex items-center">
        <span className="material-symbols-outlined">menu</span>
      </button>
      {/* POP OUT MENU STARTS HERE */}
      <div
        id="menu"
        className="fixed right-0 top-0 z-10 hidden h-screen w-1/2 bg-stone-200/95 text-stone-600"
      >
        <div className="flex justify-end border-b-2 border-stone-400 px-4 py-2">
          <button onClick={toggleMenu}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <ul className="grid h-full place-content-evenly text-5xl lg:text-8xl">
          <MenuItem anchor="about">About Me</MenuItem>
          <MenuItem anchor="projects">Projects</MenuItem>
          <MenuItem anchor="resume">Resume</MenuItem>
          <MenuItem anchor="contact">Contact</MenuItem>
        </ul>
      </div>
    </>
  );
};

export default function Header() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      latest > previous && latest > 150 ? setHidden(true) : setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 z-50 h-max"
    >
      <nav className="flex w-full justify-between border-b border-stone-700 px-4 py-2 text-lg font-bold text-stone-200 backdrop-blur-lg">
        <Logo />
        <Navigation />
      </nav>
    </motion.header>
  );
}
