import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed inset-0 z-50 h-max">
      <nav className="flex w-full justify-between p-4 text-lg font-bold text-stone-300 backdrop-blur-lg">
        <Logo />
        <Navigation />
      </nav>
    </header>
  );
}
