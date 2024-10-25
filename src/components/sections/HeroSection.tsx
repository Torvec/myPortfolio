import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden border-b border-stone-900"
    >
      <RadarScanner />
      <HeroHeader />
    </section>
  );
}

const HeroHeader = () => {
  return (
    <div className="z-30 text-center md:space-y-4">
      <h1 className="p-4 font-black md:p-0">
        <span className="bg-gradient-to-br from-stone-200 to-stone-500 bg-clip-text text-3xl text-transparent md:text-7xl lg:text-8xl">
          Hey! I'm{" "}
        </span>
        <span className="bg-gradient-to-br from-orange-500 to-orange-700 bg-clip-text text-3xl uppercase text-transparent md:text-7xl lg:text-8xl">
          Edward
        </span>
        <span className="block bg-gradient-to-br from-orange-500 to-orange-700 bg-clip-text text-3xl uppercase text-transparent md:text-7xl lg:text-8xl">
          Vonschondorf
        </span>
      </h1>
      <h2 className="mx-auto max-w-[45ch] text-pretty px-2 text-sm text-stone-300 md:px-0 md:text-2xl">
        A Full Stack Web Developer with a technician's eye, and a passion for
        troubleshooting, creating, and collaborating.
      </h2>
    </div>
  );
};

const RadarScanner = () => {
  return (
    <>
      <motion.div
        initial={{ rotate: 0, opacity: 0.25 }}
        animate={{ rotate: -360, opacity: 1 }}
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
        className="absolute z-0 h-[1000px] w-[1000px] bg-[conic-gradient(from_90deg_at_center_center,_var(--tw-gradient-stops))] from-orange-950 from-10% via-orange-400 to-orange-600"
      />
      <div className="absolute inset-0 z-10 bg-hero-pattern" />
      <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center_center,_var(--tw-gradient-stops))] from-transparent to-stone-950 to-50%" />
    </>
  );
};
