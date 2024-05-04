export default function Logo() {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="relative z-50 text-lg font-bold uppercase text-stone-200"
    >
      EV
    </button>
  );
}
