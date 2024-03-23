import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed inset-0 z-50 h-max">
      <nav className="flex w-full justify-between px-4 py-2 text-lg font-bold text-stone-200 backdrop-blur-lg border-b border-stone-700">
        <Logo />
        <Navigation />
      </nav>
    </header>
  );
}
