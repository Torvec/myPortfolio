export default function ContactMeSection() {
  // Data Object
  const data = {
    connectCTA: {
      text: "Let's Connect",
      email: "me@edward-vonschondorf.dev",
      mailto: "mailto:me@edward-vonschondorf.dev?subject=Let's Connect!",
    },
    socialLinks: [
      { href: "https://www.linkedin.com/in/edward-von/", logo: "LI" },
      { href: "https://github.com/Torvec", logo: "GH" },
      { href: "https://dev.to/torvec", logo: "DT" },
      {
        href: "https://www.youtube.com/channel/UCdhU_w39u0BIgNfsRXs8taQ",
        logo: "YT",
      },
    ],
  };

  // Section Components
  const ConnectCTA = () => {
    const { text, email, mailto } = data.connectCTA;

    return (
      <div className="container mx-auto bg-orange-600">
        <h2 className="mx-auto w-max py-32">
          <span className="block text-lg text-white/75 md:text-2xl">
            {text}
          </span>
          <a
            href={mailto}
            className="border-b-2 border-white/50 text-2xl uppercase text-stone-200 md:border-b-4 md:text-5xl"
          >
            {email}
          </a>
        </h2>
      </div>
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
        className="size-16 bg-stone-200 text-stone-200 transition-all duration-300 ease-in-out hover:text-stone-900"
      >
        {children}
      </a>
    );
  };

  const SocialLinkList = () => {
    const { socialLinks } = data;

    return (
      <div className="flex justify-evenly border-t-2 border-white/50 py-16">
        {socialLinks.map(({ href, logo }, index) => (
          <SocialLink key={index} href={href}>
            {logo}
          </SocialLink>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-orange-600" id="contact">
      <ConnectCTA />
      <SocialLinkList />
    </section>
  );
}
