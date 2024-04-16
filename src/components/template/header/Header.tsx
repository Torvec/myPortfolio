import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed inset-0 z-50 h-max px-2 pt-4 md:px-0">
      <nav className="container mx-auto rounded-lg border border-white/25 px-4 py-2 backdrop-blur-lg">
        <Logo />
        <Navigation />
      </nav>
    </header>
  );
}
