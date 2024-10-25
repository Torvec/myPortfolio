type ContainerProps = {
  children: React.ReactNode;
  id: string;
};

export default function Container({ children, id }: ContainerProps) {
  return (
    <section
      id={id}
      className="container mx-auto flex flex-col justify-center px-4 py-16 xl:px-0 xl:py-32"
    >
      {children}
    </section>
  );
}
