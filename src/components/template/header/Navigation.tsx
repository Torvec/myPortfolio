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
      <li className="text-4xl font-bold text-stone-300 transition-all duration-300 ease-in-out hover:text-orange-600 md:text-base md:active:scale-75">
        <button
          onClick={() => handleClickToSection(section)}
          className="w-full text-left md:w-max md:text-center"
        >
          {children}
        </button>
      </li>
    );
  };

  const HorizontalMenu = () => {
    return (
      <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-16 md:flex">
        {sectionNames.map((section, index) => (
          <MenuItem key={index} section={section}>
            {section}
          </MenuItem>
        ))}
      </ul>
    );
  };

  const VerticalMenuOpenBtn = () => {
    return (
      <button
        onClick={toggleMenu}
        className={`absolute ${isMenuOpen ? "hidden" : ""} right-4 top-1/2 -translate-y-1/2 text-stone-200 md:hidden`}
      >
        <span className="material-symbols-sharp">menu</span>
      </button>
    );
  };

  const VerticalMenuCloseBtn = () => {
    return (
      <button onClick={toggleMenu}>
        <span className="material-symbols-sharp text-stone-200">close</span>
      </button>
    );
  };

  const MenuItemList = () => {
    return (
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            key="slideInMenu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="space-y-16 border border-stone-800 bg-stone-900 p-8"
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
        className={`fixed inset-0 z-10 ${isMenuOpen ? "" : "hidden"} h-max rounded-lg md:hidden`}
        onClick={toggleMenu}
      >
        <div className="flex justify-end border-b border-stone-900 px-4 py-2">
          <VerticalMenuCloseBtn />
        </div>
        <MenuItemList />
      </div>
    );
  };

  return (
    <>
      <HorizontalMenu />
      <VerticalMenuOpenBtn />
      <VerticalMenu />
    </>
  );
}
