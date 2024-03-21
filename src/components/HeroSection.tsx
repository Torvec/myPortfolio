import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center text-4xl font-black md:text-5xl lg:text-7xl"
    >
      <h1 className="text-right leading-tight">
        <span className="opacity-10">Hey! </span>
        <span className="opacity-10">Hi! </span>
        <span className="opacity-10">
          Hello There!
          <br />
        </span>
        <span>
          I'm Edward Vonschondorf
          <br />
        </span>
        <span>
          and I am a <br />
        </span>
        <span className="opacity-10">Front-End, </span>
        <span className="opacity-10">Back-End, </span>
        <span>
          Full-Stack
          <br />
        </span>
        <span>Web Developer</span>
      </h1>
      <div className="absolute bottom-5 text-center text-sm font-bold uppercase">
        <h2>Would you like to know more?</h2>
        <motion.span
          className="material-symbols-outlined"
          whileInView={{ y: 10 }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            ease: "easeInOut",
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
        >
          keyboard_arrow_down
        </motion.span>
      </div>
    </section>
  );
}
