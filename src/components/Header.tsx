
export default function Header() {
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
  
  interface Event {
    type: string;
    stopPropagation(): void;
  }

  const toggleMenu = (e:Event) => {
    e.stopPropagation();
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  const handleClickToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (sectionId === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
    if (element) {
      const rect = element.getBoundingClientRect();
      window.scrollTo({ top: rect.top + window.scrollY, behavior: "smooth" });
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
      <li className="flex h-1/4 w-full justify-center">
        <button
          className="uppercase w-full"
          onClick={() => handleClickToSection(sectionId)}
        >
          {children}
        </button>
      </li>
    );
  };

  return (
    <>
      <button onClick={toggleMenu}>
        <span className="material-symbols-outlined">menu</span>
      </button>
      {/* POP OUT MENU STARTS HERE */}
      <div
        id="menu"
        className="fixed inset-0 z-10 hidden h-screen w-screen bg-black/25 text-stone-200"
        onClick={toggleMenu}
      >
        <div className="fixed right-0 h-screen w-screen bg-orange-500 md:w-1/2 lg:w-1/3">
          <div className="flex justify-end border-b border-black/25 px-4 py-2">
            <button onClick={toggleMenu}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <ul className="h-full divide-y divide-black/25 text-4xl md:text-5xl">
            <MenuItem sectionId="about">About Me</MenuItem>
            <MenuItem sectionId="projects">Projects</MenuItem>
            <MenuItem sectionId="resume">Resume</MenuItem>
            <MenuItem sectionId="contact">Contact</MenuItem>
          </ul>
        </div>
      </div>
    </>
  );
};

  return (
    <header
      className="fixed inset-0 z-50 h-max"
    >
      <nav className="flex w-full justify-between border-b border-white/25 px-4 py-2 text-lg font-bold text-stone-200 backdrop-blur-lg">
        <Logo />
        <Navigation />
      </nav>
    </header>
  );
}
