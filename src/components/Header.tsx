import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const Logo = () => {
    const handleClickToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <button
        onClick={handleClickToTop}
        className="text-lg font-bold uppercase text-stone-300"
      >
        EV
      </button>
    );
  };

  const Navigation = () => {
    const sections = ["about", "projects", "resume", "contact"];

    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleClickToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        window.scrollTo({ top: rect.top + window.scrollY });
      }
    };

    const MenuItem = ({
      children,
      sectionId,
    }: {
      children: string;
      sectionId: string;
    }) => {
      return (
        <li className="flex h-1/4 w-full justify-center md:block">
          <button
            className="w-full uppercase"
            onClick={() => handleClickToSection(sectionId)}
          >
            {children}
          </button>
        </li>
      );
    };

    return (
      <>
        {/* Menu Items for desktop */}
        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-20 font-bold text-stone-300 md:flex">
          {sections.map((section, index) => (
            <MenuItem key={index} sectionId={section}>
              {section}
            </MenuItem>
          ))}
        </ul>
        {/* Menu Icon Button for mobile */}
        <button
          onClick={toggleMenu}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 md:hidden"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        {/* Pop out menu for mobile */}
        <div
          id="menu"
          className={`fixed inset-0 z-10 ${isMenuOpen ? "" : "hidden"} h-screen w-screen bg-black/25 text-stone-200`}
          onClick={toggleMenu}
        >
          <div className="fixed right-0 h-screen w-screen bg-orange-500 md:w-1/2 lg:w-1/3">
            <div className="flex justify-end border-b border-black/25 px-4 py-2">
              <button onClick={toggleMenu}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <ul className="h-full divide-y divide-black/25 text-4xl md:text-5xl">
              {sections.map((section) => (
                <MenuItem key={section} sectionId={section}>
                  {section}
                </MenuItem>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      latest > previous && latest > 256 ? setHidden(true) : setHidden(false);
    }
  });

  return (
    <motion.header
      className="fixed inset-0 z-50 h-max"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* <nav className="flex w-full justify-between border-b border-white/25 px-4 py-2 text-lg font-bold text-stone-200 backdrop-blur-lg"> */}
      <nav className="relative px-4 py-2 backdrop-blur-lg">
        <Logo />
        <Navigation />
      </nav>
    </motion.header>
  );
}
