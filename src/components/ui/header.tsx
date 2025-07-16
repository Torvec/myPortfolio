import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="fixed inset-0 z-50 h-max w-screen">
      <div className="border-b border-stone-800 py-2 backdrop-blur-lg">
        <nav className="container mx-auto flex justify-between">
          <Logo />
          <Navigation />
        </nav>
      </div>
    </header>
  );
}

const Logo = () => {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="relative z-50 size-7"
    >
      <img
        src="nav/logo-bo.png"
        alt="EV Logo"
        className="ml-3 size-full transition-all duration-300 ease-in-out active:scale-75 xl:ml-0"
      />
    </button>
  );
};
