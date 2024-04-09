import { useState } from "react";
import Logo from "./Logo";
import Footer from "../Footer";

export default function Navigation() {
  const sections = ["About", "Projects", "Resume", "Contact"];

    const socialLinkData = [
      { href: "https://www.linkedin.com/in/edward-von/", text: "LinkedIn" },
      { href: "https://github.com/Torvec", text: "GitHub" },
      { href: "https://dev.to/torvec", text: "Dev.to" },
      {
        href: "https://www.youtube.com/channel/UCdhU_w39u0BIgNfsRXs8taQ",
        text: "YouTube",
      },
    ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickToSection = (sectionId: string) => {
    const sectId = sectionId.toLocaleLowerCase();
    const element = document.getElementById(sectId);
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
      <li className="">
        <button
          className="border-b-2 border-white/50 w-full md:border-0 text-left"
          onClick={() => handleClickToSection(sectionId)}
        >
          {children}
        </button>
      </li>
    );
  };

  const SocialLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex justify-end gap-2 text-stone-200 transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-stone-900 text-lg"
      >
        <span>{children}</span>
        <span className="material-symbols-outlined transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
          north_east
        </span>
      </a>
    );
  };

  return (
    <>
      {/* Menu Items for desktop */}
      <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-20 font-bold text-stone-200 md:flex">
        {sections.map((section, index) => (
          <MenuItem key={index} sectionId={section}>
            {section}
          </MenuItem>
        ))}
      </ul>
      {/* Menu Icon Button for mobile */}
      <button
        onClick={toggleMenu}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-200 md:hidden"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
      {/* Pop out menu for mobile */}
      <div
        id="menu"
        className={`fixed inset-0 z-10 ${isMenuOpen ? "" : "hidden"} h-screen bg-orange-600 text-stone-200 md:hidden`}
        onClick={toggleMenu}
      >
        <div className="flex justify-between border-b border-white/50 px-4 py-2">
          <Logo />
          <button onClick={toggleMenu}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex flex-col h-full justify-evenly">
          <ul className="space-y-16 px-4 py-16 text-6xl">
            {sections.map((section) => (
              <MenuItem key={section} sectionId={section}>
                {section}
              </MenuItem>
            ))}
          </ul>

          <ul className="space-y-4 px-4 py-32">
            {socialLinkData.map(({ href, text }, index) => (
              <SocialLink key={index} href={href}>
                {text}
              </SocialLink>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
