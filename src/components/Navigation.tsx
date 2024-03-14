export default function Navigation() {
  const showMenu = () => {
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
  return (
    <nav className="text-lg font-bold">
      <div className="fixed right-5 top-5">
        <button onClick={showMenu}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      <ul
        className="fixed right-5 top-14 hidden bg-white text-stone-500"
        id="menu"
      >
        <li>
          <button
            className="px-3 py-4 uppercase"
            onClick={() => handleClickToSection("about")}
          >
            About Me
          </button>
        </li>
        <li>
          <button
            className="px-3 py-4 uppercase"
            onClick={() => handleClickToSection("projects")}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className="px-3 py-4 uppercase"
            onClick={() => handleClickToSection("resume")}
          >
            Resume
          </button>
        </li>
        <li>
          <button
            className="px-3 py-4 uppercase"
            onClick={() => handleClickToSection("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
