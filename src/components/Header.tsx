import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed inset-0">
      <nav className="flex w-full justify-between text-lg font-bold text-stone-300 backdrop-blur-xl p-4">
        <Logo />
        <Navigation />
      </nav>
    </header>
  );
}
