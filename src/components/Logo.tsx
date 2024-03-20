export default function Logo() {
  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button onClick={handleClickToTop} className="text-lg font-bold uppercase">
      Edward Vonschondorf
    </button>
  );
}
