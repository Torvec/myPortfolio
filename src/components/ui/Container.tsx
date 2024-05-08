import { type ContainerProps } from "../../types/allTypes";

export default function Container({ children, id }: ContainerProps) {
  return (
    <section
      id={id}
      className="container mx-auto flex flex-col justify-center px-4 py-16 md:px-0 md:py-32"
    >
      {children}
    </section>
  );
}
