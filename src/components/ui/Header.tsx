import Navigation from "./Navigation";
import Logo from "./Logo";

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
