export default function SectionHeader({
  section,
  title,
}: {
  section: string;
  title: string;
}) {
  return (
    <div className="mb-16 flex flex-col items-center justify-center gap-2 md:mb-32">
      <span className="rounded-full border-2 border-orange-700 px-4 py-1 text-xs uppercase text-orange-500">
        {section}
      </span>
      <h2 className="mx-auto text-balance bg-gradient-to-b from-stone-200 to-stone-600 bg-clip-text p-1 text-center text-3xl font-bold text-transparent md:w-1/2 md:text-4xl lg:w-2/3 lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}
