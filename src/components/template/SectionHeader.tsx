export default function SectionHeader({
  title,
  number,
}: {
  title: string;
  number: string;
}) {
  return (
    <div className="mx-auto flex items-center justify-between border border-white/15 bg-stone-950 p-8">
      <h2 className="text-5xl text-stone-200">{title}</h2>
      <span className="text-white/50 text-lg">{number}</span>
    </div>
  );
}
