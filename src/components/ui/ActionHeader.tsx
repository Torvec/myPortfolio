export default function ActionHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h4 className="mx-auto mb-8 text-balance bg-gradient-to-t from-stone-100 to-stone-400 bg-clip-text text-center text-xl font-bold text-transparent md:text-2xl lg:w-1/2 lg:text-4xl">
      {children}
    </h4>
  );
}
