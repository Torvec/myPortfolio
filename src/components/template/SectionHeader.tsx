export default function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="mx-auto text-balance pb-16 pt-64 text-center text-4xl font-medium text-stone-200 md:w-1/2 md:text-6xl">
      {title}
    </h2>
  );
}
