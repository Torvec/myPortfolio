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
        className="group flex h-1/4 items-center justify-center gap-2 border-b border-black/25 transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-stone-900"
      >
        <span className="text-2xl uppercase">{children}</span>
        <span className="material-symbols-outlined text-xl transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
          north_east
        </span>
      </a>
    );
  }

  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="min-h-screen">
      <div className="flex h-[50vh] flex-col justify-evenly text-balance border-b border-black/25 p-10 text-4xl font-bold uppercase md:text-6xl">
        <p>Interested in collaborating, hiring me, or just saying hello?</p>
        <p>
          You can contact
          <br />
          <a
            href="mailto:me@edward-vonschondorf.dev"
            className="text-stone-900"
          >
            me@edward-vonschondorf.dev
          </a>
        </p>
      </div>
      <div className="flex h-[46vh] flex-col md:flex-row">
        <div className="flex h-1/2 flex-col justify-center gap-10 border-b border-r border-black/25 p-10 md:h-full md:w-1/2">
          <p className="text-balance text-3xl font-bold uppercase md:text-4xl">
            I am currently open to full time, part time, and contract
            opportunities
          </p>
        </div>
        <div className="h-1/2 md:h-full md:w-1/2">
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
      <footer className="relative h-[4vh] text-sm font-bold uppercase">
        <span className="absolute bottom-4 left-5">[C] {getCurrentYear()}</span>
        <div className="absolute bottom-3 right-5 flex w-max justify-center">
          <button onClick={handleClickToTop}>
            <span className="material-symbols-outlined rounded-full border border-white/50 transition-all duration-500 ease-in-out hover:border-black hover:bg-black hover:p-1">
              keyboard_arrow_up
            </span>
          </button>
        </div>
      </footer>
    </section>
  );
}
