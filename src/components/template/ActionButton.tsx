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
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className="group flex items-center gap-2 border border-white/50 bg-stone-950 text-2xl uppercase text-stone-200 transition-all duration-300 ease-in-out hover:border-orange-600 ">
        <span className="pl-4 pr-2 text-2xl uppercase transition-all duration-300 ease-in-out group-hover:text-orange-600">
          {text}
        </span>
        <span className="bg-orange-600 p-4">
          <span className="material-symbols-outlined text-2xl transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:text-white">
            {icon}
          </span>
        </span>
      </button>
    </a>
  );
}
