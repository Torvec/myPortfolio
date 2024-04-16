export default function SectionHeader({
  title,
}: {
  title: string;
}) {
  return (
    <h2 className="mx-auto text-pretty text-center text-4xl font-bold text-stone-200 md:text-5xl pt-32 pb-16">
      {title}
    </h2>
  );
}
