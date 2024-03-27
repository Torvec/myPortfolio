import { motion, MotionStyle } from "framer-motion";

type HeroSectionProps = {
  style: MotionStyle;
};

export default function HeroSection({ style }: HeroSectionProps) {
  return (
    <motion.section
      className="flex min-h-screen flex-col items-center justify-center bg-stone-950 text-4xl font-bold md:text-5xl lg:text-7xl"
      style={style}
    >
      <h1>Edward Vonschondorf</h1>
      <h2>
        Full-Stack <br /> Web Developer
      </h2>
      <div className="absolute bottom-5 text-center text-sm font-bold uppercase">
        <span className="block">Would you like to know more?</span>
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
    </motion.section>
  );
}
