export default function Logo() {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="relative z-50 size-8"
    >
      <img
        src="nav/logo.png"
        alt=""
        className="m-auto size-full transition-all duration-300 ease-in-out active:scale-75"
      />
    </button>
  );
}
