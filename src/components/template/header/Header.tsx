import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed inset-0 z-50 h-max border-b border-white/25 backdrop-blur-lg">
      <nav className="container mx-auto px-4 py-2 md:px-0">
        <Logo />
        <Navigation />
      </nav>
    </header>
  );
}
