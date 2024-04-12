export default function HeroSection() {
  const data = {
    intro: "Hi! I'm ",
    firstName: "Edward ",
    lastName: "Vonschondorf",
    roles: ["Front-End ", "Back-End ", "Full Stack "],
    developerType: "Web Developer",
  };

  const HeroHeader = () => {
    const { intro, firstName, lastName } = data;

    return (
      <h1 className="p-4 md:p-0">
        <span className="block text-2xl text-stone-300 md:text-4xl">
          {intro}
        </span>
        <span className="block text-5xl uppercase text-orange-600 md:text-7xl">
          {firstName}
        </span>
        <span className="block text-5xl uppercase text-orange-600 md:text-7xl">
          {lastName}
        </span>
      </h1>
    );
  };

  const HeroSubHeader = () => {
    const { roles, developerType } = data;

    return (
      <h2 className="text-3xl text-stone-300 md:text-5xl">
        <span>{roles[2]}</span>
        <span className="text-stone-500">{developerType}</span>
      </h2>
    );
  };

  const HeroText = () => {
    return (
      <div className="flex min-h-[80vh] flex-col items-center justify-center font-bold">
        <HeroHeader />
        <HeroSubHeader />
      </div>
    );
  };

  return (
    <section className="border-b border-white/10 bg-stone-950 bg-[url(grid_pattern_bg.png)]">
      <HeroText />
    </section>
  );
}
