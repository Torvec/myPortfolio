import { motion } from "framer-motion";

export default function HeroSection() {
  const data = {
    intro: "Hi! I'm ",
    firstName: "Edward ",
    lastName: "Vonschondorf",
    tagline:
      "A Full Stack Web Developer with a technician's eye, and a passion for troubleshooting, creating, and collaborating.",
    techList: [
      "React",
      "Tailwind",
      "Node",
      "Express",
      "MySQL",
      "MongoDB",
      "GraphQL",
      "TypeScript",
    ],
    radarDisplayEffect: [
      "radar_screen.svg",
      "radar_grid.svg",
      "radar_dot.svg",
      "radar_scan_line.svg",
      "separator_line.svg",
    ],
  };

  const HeroHeader = () => {
    const { intro, firstName, lastName } = data;

    return (
      <h1 className="p-4 font-bold md:p-0">
        <span className="text-5xl text-stone-300 md:text-7xl">{intro}</span>
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
      <h2 className="mx-auto max-w-[45ch] text-stone-300 md:text-xl">
        {tagline}
      </h2>
    );
  };

  const RadarScreenEffect = () => {
    const { radarDisplayEffect } = data;

    return (
      <>
        <motion.div
          className="absolute bottom-0 h-full w-full translate-y-1/2 bg-[radial-gradient(circle,_#ea580c_0%,_transparent_60%)]"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
        <img
          src={radarDisplayEffect[1]}
          alt="Radar Grid"
          className="min-h-1/2 absolute bottom-0 w-auto translate-y-1/2 opacity-30"
        />
        <img
          src={radarDisplayEffect[0]}
          alt="Radar Screen"
          className="min-h-1/2 absolute bottom-0 w-auto translate-y-1/2"
        />
        <img
          src={radarDisplayEffect[2]}
          alt="Origin Point"
          className="min-h-1/2 absolute bottom-0 w-auto"
        />
        <motion.img
          src={radarDisplayEffect[3]}
          alt="Scan Line"
          className="absolute bottom-0 max-h-60 w-auto md:max-h-none"
          animate={{ rotate: [-95, 95], originY: "bottom" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "linear",
          }}
        />
        <img
          src={radarDisplayEffect[4]}
          alt="Separator"
          className="absolute bottom-0 w-full"
        />
      </>
    );
  };

  const HeroText = () => {
    return (
      <div className="relative flex min-h-[60vh] flex-col items-center justify-center bg-stone-950">
        <div className="text-center md:space-y-4">
          <HeroHeader />
          <Tagline />
        </div>
        <RadarScreenEffect />
      </div>
    );
  };

  return (
    <section className="overflow-hidden">
      <HeroText />
    </section>
  );
}
