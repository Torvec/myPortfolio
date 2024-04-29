import { socialLinksData } from "../data/commonData";

export const SocialLinkList = () => {
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
        {socialLinksData.map(({ href, logo, label }, index) => (
          <SocialLink key={index} href={href} logo={logo} label={label} />
        ))}
      </div>
    </>
  );
};
