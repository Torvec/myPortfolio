export default function ActionHeader({ header }: { header: string }) {
  return (
    <h4 className="mb-8 max-w-[30ch] text-balance bg-gradient-to-t from-stone-100 to-stone-400 bg-clip-text text-center text-3xl font-bold text-transparent md:w-1/2 md:text-4xl">
      {header}
    </h4>
  );
}