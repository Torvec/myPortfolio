import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactMeSection() {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: false });

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const socialLinkInfo = [
    { href: "https://www.linkedin.com/in/edward-von/", text: "LinkedIn" },
    { href: "https://github.com/Torvec", text: "GitHub" },
    { href: "https://dev.to/torvec", text: "Dev.to" },
    {
      href: "https://www.youtube.com/channel/UCdhU_w39u0BIgNfsRXs8taQ",
      text: "Youtube",
    },
  ];

  const SocialLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full w-full items-center justify-center gap-2 border-b border-r border-black/25 text-stone-200 transition-all duration-300 ease-in-out hover:bg-orange-600 hover:text-stone-900"
        style={{
          color: contactInView ? "#e7e5e4" : "#f97316",
          transition: "all 0.5s",
        }}
      >
        <span className="text-xl uppercase">{children}</span>
        <span className="material-symbols-outlined text-xl transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
          north_east
        </span>
      </a>
    );
  };

  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      style={{
        backgroundColor: contactInView ? "#f97316" : "#1c1917",
        color: contactInView ? "#292524" : "#e7e5e4",
        transition: "all 0.5s",
      }}
      id="contact"
    >
      {/* <div className="flex h-[33vh] flex-col justify-center gap-5 border-b border-black/25 px-4 text-4xl font-bold uppercase md:h-[50vh] md:px-10 md:text-5xl">
        <p className="text-balanced md:w-3/4">
          Interested in collaborating, or getting in touch with me?
        </p>
        <div>
          <h2 className="mb-2 text-xl">Please contact</h2>
          <a
            href="mailto:me@edward-vonschondorf.dev"
            className="text-stone-200 transition-all duration-500 ease-in-out hover:text-stone-900"
          >
            me@edward-vonschondorf.dev
          </a>
        </div>
      </div> */}
      <div className="flex h-[45vh] flex-col md:flex-row">
        <div className="flex h-[31vh] flex-col justify-center gap-5 text-balance border-b border-black/25 px-4 uppercase md:h-full md:w-1/2 md:border-r md:px-10">
          <p className="text-balanced font-bold md:text-5xl">
            Interested in collaborating, or getting in touch with me?
          </p>
          <div>
            <h2 className="mb-2 font-bold">Please contact</h2>
            <a
              href="mailto:me@edward-vonschondorf.dev"
              className="text-stone-200 transition-all duration-500 ease-in-out hover:text-stone-900 text-4xl md:text-5xl font-bold"
              style={{
                color: contactInView ? "#e7e5e4" : "#f97316",
                transition: "all 0.5s",
              }}
            >
              me@edward-vonschondorf.dev
            </a>
          </div>
          {/* <h2 className="font-bold ">Current Availability</h2>
          <p className=" text-3xl font-bold">
            Open to full time, part time, and contract opportunities.
          </p>
          <p className="text-xl font-bold text-stone-700">
            Also, flexible with remote, on-site, or hybrid work.
          </p> */}
        </div>
        <div className="h-[31vh] md:h-full md:w-1/2">
          <div className="grid size-full grid-cols-2 grid-rows-2">
            {socialLinkInfo.map(({ href, text }, index) => (
              <SocialLink key={index} href={href}>
                {text}
              </SocialLink>
            ))}
          </div>
        </div>
      </div>
      <footer
        ref={contactRef}
        className="flex h-[5vh] items-center justify-between px-4 text-sm font-bold uppercase"
      >
        <span>[C] {getCurrentYear()} Edward Vonschondorf</span>
        <button onClick={handleClickToTop}>
          <span className="material-symbols-outlined rounded-full border border-white/50 text-stone-200 transition-all duration-500 ease-in-out hover:border-orange-800 hover:bg-orange-600 hover:p-0.5 hover:text-orange-800">
            keyboard_arrow_up
          </span>
        </button>
      </footer>
    </motion.section>
  );
}
