export default function ContactMeSection() {
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
        className="size-16 bg-stone-200 text-stone-200 transition-all duration-300 ease-in-out hover:text-stone-900"
      >
        {children}
      </a>
    );
  };

  return (
    <section className="bg-orange-600" id="contact">
      <div className="container mx-auto bg-orange-600">
        <h2 className="mx-auto w-max py-32">
          <span className="block text-lg text-white/75 md:text-2xl">
            Let's Connect
          </span>
          <a
            href="mailto:me@edward-vonschondorf.dev?subject=Let's Connect!"
            className="border-b-2 border-white/50 text-2xl uppercase text-stone-200 md:border-b-4 md:text-5xl"
          >
            me@edward-vonschondorf.dev
          </a>
        </h2>
        <div className="flex justify-evenly border-t-2 border-white/50 py-16">
          {socialLinkInfo.map(({ href, logo }, index) => (
            <SocialLink key={index} href={href}>
              {logo}
            </SocialLink>
          ))}
        </div>
      </div>
    </section>
  );
}
