import { AnimatePresence, motion } from "framer-motion";

interface MenuItemButtonListProps {
  sectionNames: string[];
  clickToSection: (section: string) => void;
  menuOpen: boolean;
}

interface DropDownMenuProps extends MenuItemButtonListProps {
  toggleMenu: () => void;
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
      <MenuItemButtonList
        sectionNames={sectionNames}
        clickToSection={clickToSection}
        menuOpen={menuOpen}
      />
    </div>
  );
}

const MenuItemButtonList = ({
  sectionNames,
  clickToSection,
  menuOpen,
}: MenuItemButtonListProps) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.ul
          key="slideInMenu"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: "100%", originY: "top", opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute right-0 top-11 flex w-screen flex-col border-x border-t border-stone-800 md:w-96"
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
  );
};

const MenuItemButton = ({
  section,
  clickToSection,
}: {
  section: string;
  clickToSection: (section: string) => void;
}) => {
  return (
    <button
      onClick={() => clickToSection(section)}
      className="w-full border-b-2 border-stone-800 bg-stone-950 py-8 pl-8 text-left text-2xl font-bold text-orange-500 transition-all duration-300 ease-in-out hover:bg-orange-500 hover:text-stone-200 active:scale-90"
    >
      {section}
    </button>
  );
};

const CloseMenuButton = ({ togglemenu }: { togglemenu: () => void }) => {
  return (
    <button
      onClick={togglemenu}
      className="mr-3 xl:mr-0"
      aria-label="Close Menu"
    >
      <img src="nav/menu-close.svg" alt="Close Menu" />
    </button>
  );
};
