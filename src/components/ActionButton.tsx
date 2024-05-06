import { type ActionButtonProps } from "../types/allTypes";

export default function ActionButton({ text, icon, href }: ActionButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-white/10 bg-stone-900 p-2 transition-all duration-300 ease-in-out hover:rounded-2xl hover:bg-orange-900/50 hover:p-1"
    >
      <button className="group flex items-center gap-2 overflow-hidden rounded-lg border border-white/20 bg-gradient-to-t from-orange-500 to-orange-700 px-4 py-1 text-2xl text-stone-200 transition-all duration-300 ease-in-out hover:rounded-2xl group-hover:border-orange-600 group-hover:bg-gradient-to-b group-hover:px-5 group-hover:py-2">
        <span className="text-base font-bold transition-all duration-300 ease-in-out group-hover:text-white">
          {text}
        </span>
        <span className="material-symbols-sharp text-xl transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:text-white">
          {icon}
        </span>
      </button>
    </a>
  );
}
