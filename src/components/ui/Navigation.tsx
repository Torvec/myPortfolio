import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

export default function Navigation() {
  const sectionNames = ["About", "Projects", "Resume", "Contact"];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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

  return (
    <>
      <OpenMenuButton toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <DropDownMenu
        sectionNames={sectionNames}
        toggleMenu={toggleMenu}
        clickToSection={handleClickToSection}
        menuOpen={menuOpen}
      />
    </>
  );
}

const OpenMenuButton = ({
  toggleMenu,
  menuOpen,
}: {
  toggleMenu: () => void;
  menuOpen: boolean;
}) => {
  return (
    <button
      onClick={toggleMenu}
      className={`${menuOpen ? "hidden" : ""} mr-3 xl:mr-0`}
      aria-label="Open Menu"
    >
      <img src="nav/menuOpen.svg" alt="Open Menu" />
    </button>
  );
};
