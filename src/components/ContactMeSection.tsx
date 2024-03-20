import UpArrowIcon from "../assets/upArrowIcon.svg?react";

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
        className="group flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-orange-500"
      >
        <UpArrowIcon className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-2" />
        <span>{children}</span>
      </a>
    );
  }

  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col justify-end bg-stone-950"
    >
      <div className="space-y-10 p-10 lg:p-20 text-3xl lg:text-6xl font-black uppercase">
        <p>Interested in collaborating, hiring me, or saying hello?</p>
        <p>Currently open to full time, part time, and contract work.</p>
        <p>
          Get in touch with
          <br />
          <a
            href="mailto:me@edward-vonschondorf.dev"
            className="uppercase text-orange-600"
          >
            me@edward-vonschondorf.dev
          </a>
        </p>
      </div>
      <footer className="flex gap-5 p-10 lg:p-20 text-stone-300 md:flex-row">
        <div className="w-2/3">
          <p>&copy; {getCurrentYear()}</p>
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
      <div className="pb-5 text-center text-lg">
        <button onClick={handleClickToTop}>Top</button>
      </div>
    </section>
  );
}
