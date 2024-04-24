import { heroData } from "../data/heroData";
import { motion } from "framer-motion";

export default function HeroSection() {
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

  const RadarScanner = () => {
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
        <img
          src={"radar_screen.png"}
          alt=""
          className="absolute left-1/2 top-4 h-auto min-w-[1348px] -translate-x-1/2 object-cover"
        />
        <motion.div className="absolute -top-1/2 left-1/2 size-[1200px] -translate-x-1/2 translate-y-[172px] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(249,115,22,1)_0%,_rgba(249,115,22,0)_13%)] opacity-50" />
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

  const HeroHeader = () => {
    const { intro, firstName, lastName } = heroData;

    return (
      <h1 className="p-4 font-black md:p-0">
        <span className="bg-gradient-to-br from-stone-200 to-stone-500 bg-clip-text text-5xl text-transparent md:text-8xl">
          {intro}
        </span>
        <span className="bg-gradient-to-br from-orange-500 to-orange-700 bg-clip-text text-5xl uppercase text-transparent md:text-8xl">
          {firstName}
        </span>
        <span className="block bg-gradient-to-br from-orange-500 to-orange-700 bg-clip-text text-5xl uppercase text-transparent md:text-8xl">
          {lastName}
        </span>
      </h1>
    );
  };

  const Tagline = () => {
    const { tagline } = heroData;

    return (
      <h2 className="mx-auto max-w-[45ch] text-stone-300 md:text-2xl">
        {tagline}
      </h2>
    );
  };

  const HeroText = () => {
    return (
      <div className="z-40 translate-y-28 text-center md:space-y-4">
        <HeroHeader />
        <Tagline />
      </div>
    );
  };

  const Gradients = () => {
    return (
      <>
        <div className="absolute inset-0 -top-full bg-[radial-gradient(circle,_rgba(249,115,22,0)_0%,_rgba(234,88,12,0.5)_60%,_rgba(249,115,22,0)_100%)] opacity-50" />
        <div className="absolute inset-0 -top-[200%] bg-[radial-gradient(circle,_rgba(12,10,9,0)_50%,_rgba(12,10,9,1)_100%)]" />
        <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-stone-950 to-10%" />
      </>
    );
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-[url(bg_grid_orange_30x30.png)]"
    >
      <RadarScanner />
      <Gradients />
      <HeroText />
    </section>
  );
}
