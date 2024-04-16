export default function HeroSection() {
  const data = {
    intro: "Hi! I'm ",
    firstName: "Edward ",
    lastName: "Vonschondorf",
    tagline: "A Full Stack Web Developer with a technician's eye, and a passion for troubleshooting, creating, and collaborating."
  };

  const HeroHeader = () => {
    const { intro, firstName, lastName } = data;

    return (
      <h1 className="p-4 md:p-0 font-bold">
        <span className="text-5xl text-stone-300 md:text-7xl">
          {intro}
        </span>
        <span className="text-5xl uppercase text-orange-600 md:text-7xl">
          {firstName}
        </span>
        <span className="block text-5xl uppercase text-orange-600 md:text-7xl">
          {lastName}
        </span>
      </h1>
    );
  };

  const Tagline = () => {
    const { tagline } = data;

    return (
      <h2 className="md:text-xl text-stone-300 max-w-[45ch] mx-auto">
        {tagline}
      </h2>
    );
  };

  const HeroText = () => {
    return (
      <div className="flex min-h-[80vh] flex-col items-center justify-center">
        <div className="text-center md:space-y-4">
          <HeroHeader />
          <Tagline />
        </div>
      </div>
    );
  };

  return (
    <section className="border-b-2 border-orange-600 bg-stone-950 bg-[url(bg_grid_orange.png)] bg-opacity-10">
      <HeroText />
    </section>
  );
}
