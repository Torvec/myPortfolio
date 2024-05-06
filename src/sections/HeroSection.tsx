import { heroData } from "../data/heroData";
import { motion } from "framer-motion";

export default function HeroSection() {
  const HeroHeader = () => {
    const { intro, firstName, lastName, tagline } = heroData;

    return (
      <div className="z-30 text-center md:space-y-4">
        <h1 className="p-4 font-black md:p-0">
          <span className="bg-gradient-to-br from-stone-200 to-stone-500 bg-clip-text text-4xl text-transparent md:text-8xl">
            {intro}
          </span>
          <span className="bg-gradient-to-br from-orange-500 to-orange-700 bg-clip-text text-4xl uppercase text-transparent md:text-8xl">
            {firstName}
          </span>
          <span className="block bg-gradient-to-br from-orange-500 to-orange-700 bg-clip-text text-4xl uppercase text-transparent md:text-8xl">
            {lastName}
          </span>
        </h1>
        <h2 className="mx-auto max-w-[45ch] text-stone-300 md:text-2xl px-2 md:px-0">
          {tagline}
        </h2>
      </div>
    );
  };

  const RadarScanner = () => {
    return (
      <>
        <motion.div
          initial={{ rotate: 0, opacity: 0.3 }}
          animate={{ rotate: -360, opacity: 0.9 }}
          transition={{
            rotate: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            },
          }}
          className="absolute z-0 h-[1200px] w-[1200px] rounded-full bg-[conic-gradient(from_90deg_at_center_center,_var(--tw-gradient-stops))] from-orange-950 from-10% via-orange-400 to-orange-600"
        />
        <div className="absolute inset-0 z-10 bg-hero-pattern" />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center_center,_var(--tw-gradient-stops))] from-transparent to-stone-950 to-50%" />
      </>
    );
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen md:min-h-[70vh] items-center justify-center overflow-hidden border-b border-stone-900"
    >
      <RadarScanner />
      <HeroHeader />
    </section>
  );
}
