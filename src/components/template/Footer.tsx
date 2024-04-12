export default function Footer() {
  const Copyright = () => {
    const getCurrentYear = () => {
      return new Date().getFullYear();
    };
    return <span>[C] {getCurrentYear()}</span>;
  };

  const UpArrow = () => {
    const handleClickToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <button
        onClick={handleClickToTop}
        className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
      >
        <span className="material-symbols-outlined transition-all duration-500 ease-in-out hover:text-stone-800">
          keyboard_arrow_up
        </span>
      </button>
    );
  };

  const ContactMe = () => {
    return (
      <a
        href="mailto:me@edward-vonschondorf.dev?subject=Let's Connect!"
        className="flex items-center gap-2"
      >
        <span className="material-symbols-outlined">mail</span>{" "}
        <span>Contact Me</span>
      </a>
    );
  };

  return (
    <footer className="border-t-2 border-white/50 bg-orange-500 text-sm font-bold uppercase text-stone-200">
      <div className="container relative mx-auto flex items-center justify-between px-2 py-4">
        <Copyright />
        <UpArrow />
        <ContactMe />
      </div>
    </footer>
  );
}
