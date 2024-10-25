import { AnimatePresence, motion } from "framer-motion";

interface DropDownMenuProps {
  sectionNames: string[];
  toggleMenu: () => void;
  clickToSection: (section: string) => void;
  menuOpen: boolean;
}

interface CloseMenuButtonProps {
  togglemenu: () => void;
}

interface MenuItemProps {
  section: string;
  clickToSection: (section: string) => void;
}

export default function DropDownMenu({
  sectionNames,
  toggleMenu,
  clickToSection,
  menuOpen,
}: DropDownMenuProps) {
  return (
    <div
      id="menu"
      className={`relative ${menuOpen ? "" : "hidden"}`}
      onClick={toggleMenu}
    >
      <CloseMenuButton togglemenu={toggleMenu} />
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            key="slideInMenu"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: "100%", originY: "top", opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute right-0 top-10 flex w-screen flex-col border border-stone-800 bg-stone-900/80 py-8 md:w-96"
          >
            {sectionNames.map((section) => (
              <li key={section}>
                <MenuItemButton
                  section={section}
                  clickToSection={clickToSection}
                />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

const CloseMenuButton = ({ togglemenu }: CloseMenuButtonProps) => {
  return (
    <button
      onClick={togglemenu}
      className="mr-3 xl:mr-0"
      aria-label="Close Menu"
    >
      <img src="nav/menuClose.svg" alt="Close Menu" />
    </button>
  );
};

const MenuItemButton = ({ section, clickToSection }: MenuItemProps) => {
  return (
    <button
      onClick={() => clickToSection(section)}
      className="w-full border-b-2 border-stone-800 bg-stone-800/80 py-8 pl-8 text-left text-2xl font-bold text-stone-200 transition-all duration-300 ease-in-out hover:border-stone-500 hover:bg-stone-700 hover:text-orange-500 active:scale-90"
    >
      {section}
    </button>
  );
};
