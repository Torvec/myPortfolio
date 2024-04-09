// import { useRef } from "react";
import { motion /*, useInView*/ } from "framer-motion";
import Footer from "./template/Footer";

export default function ContactMeSection() {
  // const contactRef = useRef(null);
  // const contactInView = useInView(contactRef, { once: false });

  const socialLinkInfo = [
    { href: "https://www.linkedin.com/in/edward-von/", logo: "LI" },
    { href: "https://github.com/Torvec", logo: "GH" },
    { href: "https://dev.to/torvec", logo: "DT" },
    {
      href: "https://www.youtube.com/channel/UCdhU_w39u0BIgNfsRXs8taQ",
      logo: "YT",
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
        className="text-stone-200 transition-all duration-300 ease-in-out hover:text-stone-900 bg-stone-200 size-16"
        // style={{
        //   color: contactInView ? "#e7e5e4" : "#f97316",
        //   transition: "all 0.5s",
        // }}
      >
        {children}
      </a>
    );
  };

  return (
    <motion.section
      // style={{
      //   backgroundColor: contactInView ? "#ea580c" : "#1c1917",
      //   color: contactInView ? "#292524" : "#e7e5e4",
      //   transition: "all 0.5s",
      // }}
      className="bg-orange-600"
      id="contact"
    >
      <div className="container mx-auto bg-orange-600">
        <h2 className="py-32 mx-auto w-max">
          <span className="block text-lg text-white/50 md:text-2xl">
            If you're interested,
          </span>
          <a
            href="mailto:me@edward-vonschondorf.dev"
            className="border-b-4 border-white/50 text-4xl uppercase text-stone-200 md:text-7xl"
          >
            Let's Collaborate
          </a>
        </h2>
        <div className="flex justify-evenly border-t-2 border-white/50 py-16">
          {socialLinkInfo.map(({ href, logo }, index) => (
            <SocialLink key={index} href={href}>
              {logo}
            </SocialLink>
          ))}
        </div>
        <Footer />
      </div>
    </motion.section>
  );
}
