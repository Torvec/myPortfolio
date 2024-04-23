import { heroData } from "../data/heroData";
// import { motion } from "framer-motion";

export default function HeroSection() {
  const HeroHeader = () => {
    const { intro, firstName, lastName } = heroData;

    return (
      <h1 className="p-4 font-black md:p-0">
        <span className="bg-gradient-to-l from-stone-200 to-stone-500 bg-clip-text text-6xl text-transparent md:text-8xl">
          {intro}
        </span>
        <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-6xl text-transparent md:text-8xl">
          {firstName}
        </span>
        <span className="block bg-gradient-to-l from-orange-500 to-orange-700 bg-clip-text text-6xl text-transparent md:text-8xl">
          {lastName}
        </span>
      </h1>
    );
  };

  const Tagline = () => {
    const { tagline } = heroData;

    return (
      <h2 className="mx-auto max-w-[45ch] text-stone-400 md:text-2xl">
        {tagline}
      </h2>
    );
  };

  // const TechListTargets = () => {
  //   const { techList } = heroData;

  //   return (
  //     <>
  //       {techList.map(({ label, initPosX, initPosY, delay }, index) => {
  //         return (
  //           <motion.span
  //             key={index}
  //             className="absolute bottom-0 z-40 text-xs font-bold uppercase text-orange-600"
  //             initial={{ x: initPosX, y: initPosY, opacity: 0 }}
  //             animate={{ opacity: [0, 1, 0] }}
  //             transition={{
  //               delay: delay,
  //               duration: 10,
  //               repeat: Infinity,
  //               repeatDelay: 5,
  //               ease: [0.1, 0.2, 0.3, 1],
  //             }}
  //             aria-hidden="true"
  //           >
  //             {label}
  //           </motion.span>
  //         );
  //       })}
  //     </>
  //   );
  // };

  const RadarScreenEffect = () => {
    // const { radarDisplayEffect } = heroData;

    // const glowVariants = {
    //   start: { opacity: 0.4 },
    //   end: {
    //     opacity: 0.2,
    //     transition: {
    //       duration: 2,
    //       repeat: Infinity,
    //       repeatType: "reverse" as const, // Throws an error if I don't use 'as const', ugh TypeScript
    //       ease: "linear",
    //     },
    //   },
    // };

    return (
      <>
        {/* <TechListTargets /> */}
        {/* Gradient */}
        {/* <motion.div
          className="absolute bottom-0 h-screen w-screen bg-[radial-gradient(circle,_#ea580c_0%,_transparent_60%)]"
          initial="start"
          animate="end"
          variants={glowVariants}
        /> */}
        {/* Grid */}
        {/* <img
          src={radarDisplayEffect[1]}
          alt=""
          className="absolute bottom-0 h-full w-full object-cover opacity-30 md:h-max md:w-max"
          aria-hidden="true"
        /> */}
        {/* Rings */}
        {/* <motion.img
          src={radarDisplayEffect[0]}
          alt=""
          className="absolute bottom-0 h-full w-full object-cover md:h-max md:w-max"
          initial="start"
          animate="end"
          variants={glowVariants}
          aria-hidden="true"
        /> */}

        {/* Dot */}
        {/* <img
          src={radarDisplayEffect[2]}
          alt=""
          className="absolute bottom-1/2"
          aria-hidden="true"
        /> */}
        {/* Scan Line */}
        {/* <motion.img
          src={radarDisplayEffect[3]}
          alt=""
          className="absolute bottom-1/2 h-full w-full opacity-50 md:h-max md:w-max"
          initial={{ rotate: -95, originY: "bottom" }}
          animate={{ rotate: 360, originY: "bottom" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          aria-hidden="true"
        /> */}
        {/* Separator */}
        {/* <motion.img
          src={radarDisplayEffect[4]}
          alt=""
          className="absolute bottom-1/2 w-full"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.5 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          aria-hidden="true"
        /> */}
      </>
    );
  };

  const HeroText = () => {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-stone-950">
        <div className="z-40 text-center md:space-y-4">
          <HeroHeader />
          <Tagline />
        </div>
        <RadarScreenEffect />
      </div>
    );
  };

  return (
    <section id="hero">
      <HeroText />
    </section>
  );
}
