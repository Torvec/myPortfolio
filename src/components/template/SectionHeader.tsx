export default function SectionHeader({
  title,
  subtitle,
  number,
}: {
  title: string;
  subtitle: string;
  number: string;
}) {
  return (
    <div className="mb-16 flex flex-col-reverse border-b-4 border-orange-600 px-4 md:mx-auto md:w-1/2 md:px-0">
      <div className="flex items-baseline justify-between font-bold">
        <h2 className="text-4xl text-stone-300 md:text-5xl">{title}</h2>
        <span className="text-sm text-white/25 md:text-base">{number}</span>
      </div>
      <p className="text-sm font-bold uppercase text-white/25 md:text-base">
        {subtitle}
      </p>
    </div>
  );
}
