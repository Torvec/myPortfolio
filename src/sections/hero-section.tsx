import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[512px] items-center justify-center overflow-hidden border-b border-stone-800 md:min-h-[768px]"
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
        <span className="bg-gradient-to-br from-stone-200 to-stone-600 bg-clip-text text-4xl text-transparent md:text-7xl">
          Hey! I'm{" "}
        </span>
        <span className="bg-gradient-to-br from-orange-500 to-orange-700 bg-clip-text text-4xl uppercase text-transparent md:text-7xl">
          Edward
        </span>
        <span className="block bg-gradient-to-br from-orange-500 to-orange-700 bg-clip-text text-3xl uppercase text-transparent md:text-7xl">
          Vonschondorf
        </span>
      </h1>
      <h2 className="text-balanced mx-auto max-w-xl px-2 text-base text-stone-300 md:px-0 md:text-xl">
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
        className="absolute z-0 size-[1280px] bg-[conic-gradient(from_90deg_at_center_center,_var(--tw-gradient-stops))] from-orange-950 from-10% via-orange-500 to-orange-700"
      />
      <div className="absolute inset-0 z-10 bg-hero-pattern" />
      <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center_center,_var(--tw-gradient-stops))] from-transparent to-stone-950 to-50%" />
    </>
  );
};
