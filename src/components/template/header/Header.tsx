import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      latest > previous && latest > 256 ? setHidden(true) : setHidden(false);
    }
  });

  return (
    <motion.header
      className="fixed inset-0 z-50 h-max border-b border-white/25 backdrop-blur-lg"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <nav className="container relative mx-auto px-4 py-2">
        <Logo />
        <Navigation />
      </nav>
    </motion.header>
  );
}
