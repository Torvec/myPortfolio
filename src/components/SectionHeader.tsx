import { type SectionHeaderProps } from "../types/allTypes";

export default function SectionHeader({ section, title }: SectionHeaderProps) {
  return (
    <div className="mb-32 mt-64 flex flex-col items-center justify-center gap-2 px-4 md:px-0">
      <span className="rounded-full border border-orange-500/50 px-4 py-1 text-xs uppercase text-orange-600">
        {section}
      </span>
      <h2 className="mx-auto text-balance bg-gradient-to-b from-stone-100 to-stone-500 bg-clip-text p-1 text-center text-4xl font-bold text-transparent md:w-1/2 md:text-6xl">
        {title}
      </h2>
    </div>
  );
}
