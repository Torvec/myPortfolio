import Navigation from "./Navigation";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed inset-0 z-50 h-max md:pt-4">
      <nav className="container mx-auto rounded-lg border-b md:border border-stone-800 px-4 py-2 backdrop-blur-lg">
        <Logo />
        <Navigation />
      </nav>
    </header>
  );
}
