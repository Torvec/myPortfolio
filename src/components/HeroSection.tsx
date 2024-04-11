export default function HeroSection() {
  // Data Object
  const data = {
    intro: "Hi! I am ",
    firstName: "Edward ",
    lastName: "Vonschondorf",
    roles: ["Front-End ", "Back-End ", "Full Stack "],
    developerType: "Web Developer",
  };

  // Section Components
  const HeroHeader = () => {
    const { intro, firstName, lastName } = data;

    return (
      <h1 className="p-4 md:p-0">
        <span className="text-2xl md:text-4xl text-stone-300">{intro}</span>
        <br />
        <span className="text-5xl uppercase text-orange-600 md:text-7xl">
          {firstName}
        </span>
        <span className="text-5xl uppercase text-orange-600 md:text-7xl">
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
      <div className="flex min-h-[70vh] flex-col items-center justify-center font-bold">
        <HeroHeader />
        <HeroSubHeader />
      </div>
    );
  };

  return (
    <section className="mb-32 border-b border-white/10 bg-[url(grid_pattern_bg.png)]">
      <HeroText />
    </section>
  );
}
