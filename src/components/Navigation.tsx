export default function Navigation() {
  const toggleMenu = () => {
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
  function MenuItem({
    children,
    anchor,
  }: {
    children: string;
    anchor: string;
  }) {
    return (
      <li>
        <button
          className="px-3 py-2 uppercase"
          onClick={() => handleClickToSection(anchor)}
        >
          {children}
        </button>
      </li>
    );
  }
  return (
    <>
      <button onClick={toggleMenu}>
        <span className="material-symbols-outlined">menu</span>
      </button>
      {/* POP OUT MENU STARTS HERE */}
      <div
        id="menu"
        className="fixed right-0 top-0 z-10 hidden h-screen w-screen bg-stone-200/90 text-stone-600 lg:w-1/2"
      >
        <div className="flex justify-end border-b-2 border-stone-400 p-4">
          <button onClick={toggleMenu}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <ul className="grid h-full place-content-evenly text-5xl lg:text-8xl">
          <MenuItem anchor="about">About Me</MenuItem>
          <MenuItem anchor="projects">Projects</MenuItem>
          <MenuItem anchor="resume">Resume</MenuItem>
          <MenuItem anchor="contact">Contact</MenuItem>
        </ul>
      </div>
    </>
  );
}
