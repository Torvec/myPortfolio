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
        className="group flex h-full w-full items-center justify-center gap-2 border-b border-r border-black/25 text-stone-200 transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-stone-900"
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
    <section id="contact" className="min-h-screen text-stone-900">
      <div className="flex h-[50vh] flex-col justify-center gap-10 border-b border-black/25 p-10 text-4xl font-bold uppercase md:text-5xl">
        <p className="text-balanced md:w-3/4">
          Interested in collaborating, or just saying hello?
        </p>
        <div>
          <h2 className="mb-5 text-base">Please contact</h2>
          <a
            href="mailto:me@edward-vonschondorf.dev"
            className="text-stone-200 transition-all duration-500 ease-in-out hover:text-stone-900"
          >
            me@edward-vonschondorf.dev
          </a>
        </div>
      </div>
      <div className="flex h-[46vh] flex-col md:flex-row">
        <div className="flex h-1/2 flex-col justify-center gap-5 border-b border-r border-black/25 p-10 md:h-full md:w-1/2">
          <h2 className="text-base font-bold uppercase">
            Current Availability
          </h2>
          <p className="text-balance text-3xl font-bold uppercase md:text-4xl">
            I am open to full time, part time, and contract opportunities
          </p>
        </div>
        <div className="grid h-1/2 grid-cols-2 grid-rows-2 md:h-full md:w-1/2 md:grid-cols-1 md:grid-rows-4">
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
            <span className="material-symbols-outlined rounded-full border border-white/50 text-stone-200 transition-all duration-500 ease-in-out hover:border-orange-800 hover:bg-orange-600 hover:p-1 hover:text-orange-800">
              keyboard_arrow_up
            </span>
          </button>
        </div>
      </footer>
    </section>
  );
}
