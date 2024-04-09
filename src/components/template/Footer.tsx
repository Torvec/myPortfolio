export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      //   ref={contactRef}
      className="relative flex items-center justify-between px-2 py-4 text-sm font-bold uppercase border-t-2 border-white/50 text-stone-200 md:px-0"
    >
      <span>[C] {getCurrentYear()}</span>
      <button
        onClick={handleClickToTop}
        className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
      >
        <span className="material-symbols-outlined transition-all duration-500 ease-in-out hover:text-stone-800">
          keyboard_arrow_up
        </span>
      </button>
      <a href="mailto:me@edward-vonschondorf.dev">[ ] Contact Me</a>
    </footer>
  );
}
