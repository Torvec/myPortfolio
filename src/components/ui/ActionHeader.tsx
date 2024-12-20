export default function ActionHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h4 className="mx-auto mb-8 text-pretty bg-gradient-to-t from-stone-200 to-stone-600 bg-clip-text text-center text-xl font-bold text-transparent md:text-2xl lg:w-1/2 lg:text-4xl">
      {children}
    </h4>
  );
}
