export default function SectionHeader({
  title,
}: {
  title: string;
}) {
  return (
    <div className="px-4">
      <div className="container mx-auto bg-stone-950 p-4 md:p-8">
        <h2 className="text-4xl text-stone-200 md:text-5xl text-center font-bold">{title}</h2>
      </div>
    </div>
  );
}
