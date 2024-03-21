import UpArrowIcon from "../assets/upArrowIcon.svg?react";
import { motion } from "framer-motion";

export default function ContactMeSection() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  interface SocialLinkProps {
    href: string;
    children: React.ReactNode;
  }

  function SocialLink({ href, children }: SocialLinkProps) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-stone-900"
      >
        <span className="text-lg">{children}</span>
        <UpArrowIcon className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-2" />
      </a>
    );
  }

  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center px-5"
    >
      <div className="space-y-10 md:w-3/4">
        <p className="text-balance text-right text-4xl font-black uppercase md:text-6xl">
          Interested in collaborating, hiring me, or just saying hello? You can
          contact{" "}
          <a
            href="mailto:me@edward-vonschondorf.dev"
            className="text-stone-900"
          >
            me@edward-vonschondorf.dev
          </a>
        </p>
        <p className="text-balance text-right text-2xl font-black uppercase md:text-4xl">
          Currently open to full time, part time, or contract opportunities
        </p>
        <p className="text-right text-lg font-black md:text-2xl">
          Thanks for stopping by!
        </p>
        <div className="flex flex-col items-end gap-2">
          <SocialLink href="https://www.linkedin.com/in/edward-von/">
            LinkedIn
          </SocialLink>
          <SocialLink href="https://github.com/Torvec">GitHub</SocialLink>
          <SocialLink href="https://dev.to/torvec">Dev.to</SocialLink>
          <SocialLink href="https://www.youtube.com/channel/UCdhU_w39u0BIgNfsRXs8taQ">
            Youtube
          </SocialLink>
        </div>
      </div>
      <span className="absolute bottom-5 left-5 font-bold text-sm">&copy; {getCurrentYear()}</span>
      <div className="absolute bottom-5 flex w-full justify-center">
        <button
          onClick={handleClickToTop}
          className="flex flex-col items-center gap-1 text-sm font-bold uppercase"
        >
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
            keyboard_arrow_up
          </motion.span>
          <span>Back to top</span>
        </button>
      </div>
    </section>
  );
}
