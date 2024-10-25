export default function Logo() {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="relative z-50 size-7"
    >
      <img
        src="nav/logo.png"
        alt="EV Logo"
        className="ml-3 size-full transition-all duration-300 ease-in-out active:scale-75 xl:ml-0"
      />
    </button>
  );
}
