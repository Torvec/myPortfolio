import { heroData } from "../data/heroData";
import { motion } from "framer-motion";

export default function HeroSection() {
  const glowVariants = {
    start: { opacity: 0.5 },
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

  // const RadarImage = () => {
  //   return (
  //     <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[432px] rounded-full shadow-[0_35px_100px_50px_rgba(12,10,9,0.5)]">
  //       <motion.img
  //         initial="start"
  //         animate="end"
  //         variants={glowVariants}
  //         src={"hero/radar_screen.svg"}
  //         alt=""
  //         className="min-h-[1000px] min-w-[1000px] object-cover"
  //       />
  //     </div>
  //   );
  // };

  // const TechTarget = ({
  //   posX,
  //   posY,
  //   delay,
  //   label,
  // }: {
  //   posX: number;
  //   posY: number;
  //   delay: number;
  //   label: string;
  // }) => {
  //   return (
  //     <motion.span
  //       className="text-xs font-bold uppercase text-orange-600"
  //       initial={{ x: posX, y: posY, opacity: 0 }}
  //       animate={{ opacity: [0, 1, 0] }}
  //       transition={{
  //         delay: delay,
  //         duration: 10,
  //         repeat: Infinity,
  //         repeatDelay: 5,
  //         ease: [0.1, 0.2, 0.3, 1],
  //       }}
  //       aria-hidden="true"
  //     >
  //       {label}
  //     </motion.span>
  //   );
  // };

  // const TechTargetList = () => {
  //   const { techList } = heroData;

  //   return (
  //     <div className="absolute left-1/2 h-[510px] w-[1000px] -translate-x-1/2 translate-y-[62px]">
  //       {techList.map(({ label, initPosX, initPosY, delay }, index) => {
  //         return (
  //           <TechTarget
  //             key={index}
  //             posX={initPosX}
  //             posY={initPosY}
  //             delay={delay}
  //             label={label}
  //           />
  //         );
  //       })}
  //     </div>
  //   );
  // };

  // const RadarSweep = () => {
  //   return (
  //     <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[432px]">
  //       <motion.div
  //         initial={{ rotate: 0 }}
  //         animate={{ rotate: -360 }}
  //         transition={{
  //           duration: 10,
  //           repeat: Infinity,
  //           ease: "linear",
  //         }}
  //         className="size-[1000px] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(249,115,22,1)_0%,_rgba(249,115,22,0)_13%)] opacity-50"
  //       />
  //     </div>
  //   );
  // };

  // const RadarScanner = () => {
  //   return (
  //     <>
  //       <div className="absolute inset-0 z-10 h-screen w-full">
  //         <RadarImage />
  //         <RadarSweep />
  //         <TechTargetList />
  //       </div>
  //       {/* Gradient */}
  //       {/* <motion.div
  //         className="absolute bottom-0 h-screen w-screen bg-[radial-gradient(circle,_#ea580c_0%,_transparent_60%)]"
  //         initial="start"
  //         animate="end"
  //         variants={glowVariants}
  //       /> */}
  //       {/* Grid */}
  //       {/* <img
  //         src={radarDisplayEffect[1]}
  //         alt=""
  //         className="absolute bottom-0 h-full w-full object-cover opacity-30 md:h-max md:w-max"
  //         aria-hidden="true"
  //       /> */}
  //       {/* Rings */}
  //       {/* <motion.img
  //         src={radarDisplayEffect[0]}
  //         alt=""
  //         className="absolute bottom-0 h-full w-full object-cover md:h-max md:w-max"
  //         initial="start"
  //         animate="end"
  //         variants={glowVariants}
  //         aria-hidden="true"
  //       /> */}
  //       {/* Dot */}
  //       {/* <img
  //         src={radarDisplayEffect[2]}
  //         alt=""
  //         className="absolute bottom-1/2"
  //         aria-hidden="true"
  //       /> */}
  //       {/* Scan Line */}
  //       {/* <motion.img
  //         src={radarDisplayEffect[3]}
  //         alt=""
  //         className="absolute bottom-1/2 h-full w-full opacity-50 md:h-max md:w-max"
  //         initial={{ rotate: -95, originY: "bottom" }}
  //         animate={{ rotate: 360, originY: "bottom" }}
  //         transition={{
  //           duration: 20,
  //           repeat: Infinity,
  //           ease: "linear",
  //         }}
  //         aria-hidden="true"
  //       /> */}
  //       {/* Separator */}
  //       {/* <motion.img
  //         src={radarDisplayEffect[4]}
  //         alt=""
  //         className="absolute bottom-1/2 w-full"
  //         initial={{ opacity: 1 }}
  //         animate={{ opacity: 0.5 }}
  //         transition={{
  //           duration: 2,
  //           repeat: Infinity,
  //           repeatType: "reverse",
  //           ease: "linear",
  //         }}
  //         aria-hidden="true"
  //       /> */}
  //     </>
  //   );
  // };

  const HeroHeader = () => {
    const { intro, firstName, lastName, tagline } = heroData;

    return (
      <div className="z-40 text-center md:space-y-4">
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
        <h2 className="mx-auto max-w-[45ch] text-stone-300 md:text-2xl">
          {tagline}
        </h2>
      </div>
    );
  };

  const Gradients = () => {
    return (
      <>
        {/* Transparent to orange radial gradient */}
        <motion.div
          initial="start"
          animate="end"
          variants={glowVariants}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(234,88,12,1)0%,rgba(12,10,9,1)70%,rgba(12,10,9,1)100%)]"
        />
        {/* Bottom Linear gradient */}
        <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-stone-950 to-20%" />
      </>
    );
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-[url(hero/bg_grid_orange_30x30.png)]"
    >
      <Gradients />
      <HeroHeader />
    </section>
  );
}
