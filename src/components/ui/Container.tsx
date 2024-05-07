import { type ContainerProps } from "../../types/allTypes";

export default function Container({ children, id }: ContainerProps) {
  return (
    <section
      id={id}
      className="container mx-auto flex flex-col justify-center py-16 md:py-32 px-4 md:px-0"
    >
      {children}
    </section>
  );
}
