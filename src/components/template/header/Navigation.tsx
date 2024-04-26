import { useState } from "react";
import Logo from "./Logo";

export default function Navigation() {
  const data = {
    sections: ["About", "Projects", "Resume", "Contact"],
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  const MenuItem = ({
    children,
    section,
  }: {
    children: React.ReactNode;
    section: string;
  }) => {
    return (
      <li>
        <button
          className="w-full border-b-2 border-white/50 text-left md:border-0"
          onClick={() => handleClickToSection(section)}
        >
          {children}
        </button>
      </li>
    );
  };

  const HorizontalMenu = () => {
    const { sections } = data;

    return (
      <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-16 font-bold text-stone-200 md:flex">
        {sections.map((section, index) => (
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
        className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-200 md:hidden"
      >
        <span className="material-symbols-sharp">menu</span>
      </button>
    );
  };

  const VerticalMenuCloseBtn = () => {
    return (
      <button onClick={toggleMenu}>
        <span className="material-symbols-sharp">close</span>
      </button>
    );
  };

  const MenuItemList = () => {
    const { sections } = data;

    return (
      <ul className="space-y-32 px-4 py-32 text-6xl">
        {sections.map((section, index) => (
          <MenuItem key={index} section={section}>
            <div className="flex items-baseline justify-between">
              <span>{section}</span>
              <span className="text-base text-white/50">0{index + 1}</span>
            </div>
          </MenuItem>
        ))}
      </ul>
    );
  };

  const VerticalMenu = () => {
    return (
      <div
        id="menu"
        className={`fixed inset-0 z-10 ${isMenuOpen ? "" : "hidden"} h-max rounded-lg border border-white/25 bg-orange-600 text-stone-200 md:hidden`}
        onClick={toggleMenu}
      >
        <div className="flex justify-between border-b border-white/25 px-4 py-2">
          <Logo />
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
