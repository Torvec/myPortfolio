import Navigation from "./Navigation";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed inset-0 z-50 h-max w-screen">
      <nav className="container mx-auto flex justify-between border-b border-stone-900 py-2 backdrop-blur-lg">
        <Logo />
        <Navigation />
      </nav>
    </header>
  );
}
