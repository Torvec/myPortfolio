import Navigation from "./Navigation";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed inset-0 z-50 h-max">
      <nav className="container mx-auto flex justify-between px-4 py-4">
        <Logo />
        <Navigation />
      </nav>
    </header>
  );
}
