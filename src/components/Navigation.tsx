export default function Navigation() {
  const showMenu = () => {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };
  return (
    <>
      <div className="fixed right-5 top-5">
        <button onClick={showMenu} className="text-lg font-bold uppercase">
          Menu
        </button>
      </div>
      <ul className="fixed right-5 top-12 hidden bg-stone-500" id="menu">
        <li className="p-3">
          <a href="#about">About Me</a>
        </li>
        <li className="p-3">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-3">
          <a href="#resume">Resume</a>
        </li>
        <li className="p-3">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </>
  );
}
