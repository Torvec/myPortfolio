import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-stone-950 to-60% font-bold">
      <div className="space-y-5 text-center">
        <h1 className="text-5xl text-stone-300 md:text-6xl lg:text-8xl">
          / Hi! I'm{" "}
          <span className="uppercase text-orange-600">
            Edward <br />
            Vonschondorf /
          </span>
        </h1>
        <p className="text-balance text-base text-stone-400 md:text-2xl">
          An experienced, agile, creative full stack web developer, <br />
          with a desire and work ethic to make great things happen.
        </p>
      </div>
      <div className="absolute bottom-1 text-center text-sm font-bold uppercase text-stone-400">
        <span className="block">Would you like to know more?</span>
        <motion.span
          className="material-symbols-outlined"
          whileInView={{ y: 5 }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            ease: "anticipate",
            repeatType: "reverse",
            repeatDelay: 0.1,
          }}
        >
          keyboard_arrow_down
        </motion.span>
      </div>
    </motion.section>
  );
}
