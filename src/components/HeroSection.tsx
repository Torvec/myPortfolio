export default function HeroSection() {
  
  const Title = () => {
    return (
      <h1 className="text-5xl text-stone-300 md:text-6xl lg:text-8xl">
        Hi! I'm{" "}
        <span className="uppercase text-orange-600">
          Edward <br /> Vonschondorf
        </span>
      </h1>
    );
  };
  
  const Subtitle = () => {
    return (
      <p className="text-balance text-base text-stone-400 md:text-2xl">
        Full Stack Web Developer
      </p>
    );
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center  font-bold">
      <div className="space-y-5 text-center">
        <Title />
        <Subtitle />
      </div>
    </section>
  );
}
