export default function Logo() {
  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed left-5 top-5">
      <button
        onClick={handleClickToTop}
        className="text-lg font-bold uppercase"
      >
        Edward Vonschondorf<span className="lowercase text-sm">.dev</span>
      </button>
    </div>
  );
}
