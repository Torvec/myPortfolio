export default function Footer() {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/edward-von/", logo: "LI" },
    { href: "https://github.com/Torvec", logo: "GH" },
    { href: "https://dev.to/torvec", logo: "DT" },
    {
      href: "https://www.youtube.com/channel/UCdhU_w39u0BIgNfsRXs8taQ",
      logo: "YT",
    },
  ];

  const Copyright = () => {
    const getCurrentYear = () => {
      return new Date().getFullYear();
    };
    return <span>[C] {getCurrentYear()}</span>;
  };

  const UpArrow = () => {
    const handleClickToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <button
        onClick={handleClickToTop}
        className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
      >
        <span className="material-symbols-outlined transition-all duration-500 ease-in-out hover:text-stone-800">
          keyboard_arrow_up
        </span>
      </button>
    );
  };

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
        className="text-stone-200 transition-all duration-300 ease-in-out hover:text-stone-900"
      >
        {children}
      </a>
    );
  };

  const SocialLinkList = () => {
    return (
      <div className="flex justify-evenly gap-2">
        {socialLinks.map(({ href, logo }, index) => (
          <SocialLink key={index} href={href}>
            {logo}
          </SocialLink>
        ))}
      </div>
    );
  };

  return (
    <footer className="border-t-2 border-white/50 bg-orange-500 text-sm font-bold uppercase text-stone-200">
      <div className="container relative mx-auto flex items-center justify-between px-2 py-4">
        <Copyright />
        <UpArrow />
        <SocialLinkList />
      </div>
    </footer>
  );
}