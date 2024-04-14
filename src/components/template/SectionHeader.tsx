export default function SectionHeader({
  title,
  number,
}: {
  title: string;
  number: string;
}) {
  return (
    <div className="bg-[url(horiz_line_bg.png)] bg-center bg-repeat-x px-4">
      <div className="container mx-auto flex items-center justify-between border border-white/15 bg-stone-950 p-4 md:p-8">
        <h2 className="text-3xl text-stone-200 md:text-5xl">{title}</h2>
        <span className="text-sm text-white/50 md:text-lg">{number}</span>
      </div>
    </div>
  );
}
