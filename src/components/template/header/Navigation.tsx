import { useState } from "react";
import { type MenuItemProps } from "../../../types/allTypes";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sectionNames = ["About", "Projects", "Resume", "Contact"];

  const handleClickToSection = (section: string) => {
    const sectId = section.toLocaleLowerCase();
    const element = document.getElementById(sectId);
    if (element) {
      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY - 100,
        behavior: "smooth",
      });
    }
  };

  const MenuItem = ({ children, section }: MenuItemProps) => {
    return (
      <li>
        <button
          onClick={() => handleClickToSection(section)}
          className="w-full border-b-2 border-stone-800 bg-stone-800/80 py-8 pl-8 text-left text-2xl font-bold text-stone-200 transition-all duration-300 ease-in-out hover:border-stone-500 hover:bg-stone-700 hover:text-orange-500 active:scale-90"
        >
          {children}
        </button>
      </li>
    );
  };

  const VerticalMenuOpenBtn = () => {
    return (
      <button
        onClick={toggleMenu}
        className={`${isMenuOpen ? "hidden" : ""} mr-2`}
      >
        <img src="nav/menuOpen.svg" alt="Open Menu" />
      </button>
    );
  };

  const VerticalMenuCloseBtn = () => {
    return (
      <button onClick={toggleMenu} className="mr-2">
        <img src="nav/menuClose.svg" alt="Close Menu" />
      </button>
    );
  };

  const MenuItemList = () => {
    return (
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            key="slideInMenu"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: "100%", originY: "top", opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute right-0 top-10 flex w-screen flex-col border border-stone-800 bg-stone-900/80 py-8 md:w-96"
          >
            {sectionNames.map((section, index) => (
              <MenuItem key={index} section={section}>
                {section}
              </MenuItem>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    );
  };

  const VerticalMenu = () => {
    return (
      <div
        id="menu"
        className={`relative ${isMenuOpen ? "" : "hidden"}`}
        onClick={toggleMenu}
      >
        <VerticalMenuCloseBtn />
        <MenuItemList />
      </div>
    );
  };

  return (
    <>
      <VerticalMenuOpenBtn />
      <VerticalMenu />
    </>
  );
}
