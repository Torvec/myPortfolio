export default function ActionButton({
  text,
  icon,
  href,
}: {
  text: string;
  icon: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-white/10 bg-stone-900 p-2 transition-all duration-300 ease-in-out hover:bg-stone-800"
    >
      <button className="group flex items-center gap-2 overflow-hidden rounded-lg border border-white/20 bg-gradient-to-b from-stone-950 text-2xl text-stone-200 transition-all duration-300 ease-in-out hover:border-orange-600 hover:bg-gradient-to-t">
        <span className="px-4 text-2xl font-bold transition-all duration-300 ease-in-out group-hover:text-orange-600">
          {text}
        </span>
        <span className="bg-gradient-to-t from-orange-500 to-orange-700 p-2">
          <span className="material-symbols-sharp text-2xl transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:text-white">
            {icon}
          </span>
        </span>
      </button>
    </a>
  );
}
