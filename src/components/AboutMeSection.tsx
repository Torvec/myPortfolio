import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutMeSection() {
  const pVariants = {
    initial: {
      opacity: 0.5,
      y: 200,
      scale: 0.9,
    },
    inView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });

  return (
    <section id="about" className="relative p-10 bg-stone-700">
      <motion.img
        src="/imgna.png"
        alt="Placeholder"
        className="absolute left-10 top-10 h-96 w-96"
      />
      <motion.div
        ref={ref1}
        className="mb-96 flex justify-end"
        animate={isInView1 ? "inView" : "initial"}
        variants={pVariants}
      >
        <p className="w-2/5 text-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo atque
          dolorum corrupti, pariatur expedita inventore, laudantium consequatur
          sunt, maxime nesciunt hic cumque quisquam. Autem, provident animi
          ducimus maxime aspernatur aliquid?
        </p>
      </motion.div>
      <motion.div
        ref={ref2}
        className="mb-96"
        animate={isInView2 ? "inView" : "initial"}
        variants={pVariants}
      >
        <p className="w-2/5 text-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo atque
          dolorum corrupti, pariatur expedita inventore, laudantium consequatur
          sunt, maxime nesciunt hic cumque quisquam. Autem, provident animi
          ducimus maxime aspernatur aliquid?
        </p>
      </motion.div>
      <motion.div
        ref={ref3}
        className="mb-96 flex justify-end"
        animate={isInView3 ? "inView" : "initial"}
        variants={pVariants}
      >
        <p className="w-2/5 text-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo atque
          dolorum corrupti, pariatur expedita inventore, laudantium consequatur
          sunt, maxime nesciunt hic cumque quisquam. Autem, provident animi
          ducimus maxime aspernatur aliquid?
        </p>
      </motion.div>
      <motion.div
        ref={ref4}
        className="mb-96"
        animate={isInView4 ? "inView" : "initial"}
        variants={pVariants}
      >
        <p className="w-2/5 text-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo atque
          dolorum corrupti, pariatur expedita inventore, laudantium consequatur
          sunt, maxime nesciunt hic cumque quisquam. Autem, provident animi
          ducimus maxime aspernatur aliquid?
        </p>
      </motion.div>
    </section>
  );
}
