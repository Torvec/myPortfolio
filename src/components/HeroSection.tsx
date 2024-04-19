import { motion } from "framer-motion";

export default function HeroSection() {
  const data = {
    intro: "Hi! I'm ",
    firstName: "Edward ",
    lastName: "Vonschondorf",
    tagline:
      "A Full Stack Web Developer with a technician's eye, and a passion for troubleshooting, creating, and collaborating.",
    techList: [
      { label: "React", initPosX: -450, initPosY: -200, delay: 1 },
      { label: "Node", initPosX: -240, initPosY: -100, delay: 1 },
      { label: "Express", initPosX: -270, initPosY: -470, delay: 3 },
      { label: "MongoDB", initPosX: 120, initPosY: -80, delay: 7.5 },
      { label: "GraphQL", initPosX: 150, initPosY: -500, delay: 5.5 },
      { label: "TypeScript", initPosX: 300, initPosY: -50, delay: 8.75 },
      { label: "Tailwind", initPosX: 320, initPosY: -220, delay: 7.5 },
      { label: "MySQL", initPosX: 450, initPosY: -300, delay: 7.5 },
      { label: "JavaScript", initPosX: 0, initPosY: -140, delay: 4.75 },
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
      <h1 className="p-4 font-black text-stone-300 md:p-0">
        <span className="text-5xl md:text-7xl">{intro}</span>
        <span className="text-5xl md:text-7xl text-orange-700">{firstName}</span>
        <span className="block text-5xl md:text-7xl text-orange-700">{lastName}</span>
      </h1>
    );
  };

  const Tagline = () => {
    const { tagline } = data;

    return (
      <h2 className="mx-auto max-w-[45ch] text-stone-400 md:text-xl">
        {tagline}
      </h2>
    );
  };

  const TechListTargets = () => {
    const { techList } = data;

    return (
      <>
        {techList.map(({ label, initPosX, initPosY, delay }, index) => {
          return (
            <motion.span
              key={index}
              className="absolute bottom-0 text-xs font-bold uppercase text-orange-600 z-40"
              initial={{ x: initPosX, y: initPosY, opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: delay,
                duration: 10,
                repeat: Infinity,
                repeatDelay: 5,
                ease: [0.1, 0.2, 0.3, 1],
              }}
              aria-hidden="true"
            >
              {label}
            </motion.span>
          );
        })}
      </>
    );
  };

  const RadarScreenEffect = () => {
    const { radarDisplayEffect } = data;

    const glowVariants = {
      start: { opacity: 0.4 },
      end: {
        opacity: 0.2,
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse" as const, // Throws an error if I don't use 'as const', ugh TypeScript
          ease: "linear",
        },
      },
    };

    return (
      <>
        <TechListTargets />
        {/* Gradient */}
        <motion.div
          className="absolute bottom-0 h-screen w-screen translate-y-1/2 bg-[radial-gradient(circle,_#ea580c_0%,_transparent_60%)]"
          initial="start"
          animate="end"
          variants={glowVariants}
        />
        {/* Grid */}
        <img
          src={radarDisplayEffect[1]}
          alt=""
          className="absolute bottom-0 h-full w-full translate-y-1/2 object-cover opacity-30 md:h-max md:w-max"
          aria-hidden="true"
        />
        {/* Rings */}
        <motion.img
          src={radarDisplayEffect[0]}
          alt=""
          className="absolute bottom-0 h-full w-full translate-y-1/2 object-cover md:h-max md:w-max"
          initial="start"
          animate="end"
          variants={glowVariants}
          aria-hidden="true"
        />

        {/* Dot */}
        <img
          src={radarDisplayEffect[2]}
          alt=""
          className="absolute bottom-0 translate-y-1/2"
          aria-hidden="true"
        />
        {/* Scan Line */}
        <motion.img
          src={radarDisplayEffect[3]}
          alt=""
          className="absolute bottom-0 h-full w-full opacity-50 md:h-max md:w-max"
          initial={{ rotate: -95, originY: "bottom" }}
          animate={{ rotate: [-95, 95], originY: "bottom" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "linear",
          }}
          aria-hidden="true"
        />
        {/* Separator */}
        <motion.img
          src={radarDisplayEffect[4]}
          alt=""
          className="absolute bottom-0 w-full"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.5 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          aria-hidden="true"
        />
      </>
    );
  };

  const HeroText = () => {
    return (
      <div className="relative flex min-h-[55vh] flex-col items-center justify-end md:justify-center bg-stone-950">
        <div className="z-40 text-center md:space-y-4 pb-32 md:pb-0 md:pt-32">
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
