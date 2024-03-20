import UpArrowIcon from "../assets/upArrowIcon.svg?react";
import { motion } from "framer-motion";

export default function Footer() {
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
        className="group flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-orange-500"
      >
        <UpArrowIcon className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-2" />
        <span>{children}</span>
      </a>
    );
  }

  return (
    <footer className="flex gap-5 bg-black px-5 py-10 font-sans text-stone-300 md:flex-row lg:p-10">
      <div className="w-2/3">
        <p className="text-5xl">
          &copy; {getCurrentYear()}
        </p>
      </div>
      <div className="flex w-1/3 flex-col gap-2">
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-12">
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
    </footer>
  );
}
