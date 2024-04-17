export default function SectionHeader({
  title,
}: {
  title: string;
}) {
  return (
    <h2 className="mx-auto text-pretty text-center text-4xl font-bold text-stone-200 md:text-6xl pt-64 pb-16 w-1/3">
      {title}
    </h2>
  );
}
