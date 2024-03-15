import UpArrowIcon from "../assets/upArrowIcon.svg?react";

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
        className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-orange-500"
      >
        {children}
      </a>
    );
  }

  return (
    <footer className="flex gap-5 bg-black px-5 py-10 font-sans text-stone-200 md:flex-row md:items-baseline md:justify-between md:text-lg lg:p-10">
      <div className="w-2/3">
        <p className="mb-2 text-xl font-bold">&copy; {getCurrentYear()} Edward Vonschondorf</p>
        <p className="">Made with Vite, React, Typescript, and Framer Motion</p>
      </div>
      <div className="flex w-1/3 flex-col gap-2 text-xl">
        <p className="font-bold">Socials:</p>
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-12">
          <SocialLink href="https://www.linkedin.com/in/edward-von/">
            <span>LinkedIn</span>
            <UpArrowIcon className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="https://github.com/Torvec">
            <span>GitHub</span>
            <UpArrowIcon className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="https://dev.to/torvec">
            <span>Dev.to</span>
            <UpArrowIcon className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="https://www.youtube.com/channel/UCdhU_w39u0BIgNfsRXs8taQ">
            <span>Youtube</span>
            <UpArrowIcon className="h-5 w-5" />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}
