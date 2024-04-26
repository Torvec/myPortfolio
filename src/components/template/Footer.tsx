import { socialLinksData } from "../../data/commonData";

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

  const SocialLinkList = () => {
    return (
      <>
        <div className="flex gap-4">
          {socialLinksData.map(({ href, logo, label }, index) => (
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
