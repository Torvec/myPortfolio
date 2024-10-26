export default function Container({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section
      id={id}
      className="container mx-auto flex flex-col justify-center px-4 py-16 md:py-32 xl:px-0"
    >
      {children}
    </section>
  );
}
