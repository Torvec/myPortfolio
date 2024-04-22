export default function Footer() {
  const Copyright = () => {
    const getCurrentYear = () => {
      return new Date().getFullYear();
    };
    return (
      <div className="space-y-2 text-pretty text-sm text-stone-400">
        <p>&copy; {getCurrentYear()} Edward Vonschondorf</p>
        <p>Designed and Developed by Edward Vonschondorf</p>
      </div>
    );
  };

  const SocialLinkList = () => {
    const socialLinks = [
      {
        href: "https://www.linkedin.com/in/edward-von/",
        logo: "linkedin_logo.png",
        label: "LinkedIn",
      },
      {
        href: "https://github.com/Torvec",
        logo: "github_logo.png",
        label: "GitHub",
      },
      {
        href: "https://dev.to/torvec",
        logo: "devto_logo.png",
        label: "Dev.to",
      },
      {
        href: "https://www.youtube.com/channel/UCdhU_w39u0BIgNfsRXs8taQ",
        logo: "youtube_logo.png",
        label: "YouTube",
      },
    ];

    const SocialLink = ({
      href,
      logo,
      label,
    }: {
      href: string;
      logo: string;
      label: string;
    }) => {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={logo} alt={label} className="h-6 w-auto" />
        </a>
      );
    };

    return (
      <>
        <div className="flex gap-4">
          {socialLinks.map(({ href, logo, label }, index) => (
            <SocialLink key={index} href={href} logo={logo} label={label} />
          ))}
        </div>
      </>
    );
  };

  return (
    <footer className="border-t border-white/20 bg-gradient-to-b from-stone-900 to-stone-950 to-50%">
      <div className="container relative mx-auto flex items-start justify-between px-4 pb-32 pt-8 md:px-0">
        <Copyright />
        <SocialLinkList />
      </div>
    </footer>
  );
}
