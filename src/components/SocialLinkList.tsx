import { type SocialLinkItemProps } from "../types/allTypes";

const socialLinksData = [
  {
    href: "https://www.linkedin.com/in/edward-vonschondorf/",
    logo: "about/linkedin_logo.png",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Torvec",
    logo: "about/github_logo.png",
    label: "GitHub",
  },
  {
    href: "https://dev.to/torvec",
    logo: "about/devto_logo.png",
    label: "Dev.to",
  },
  {
    href: "https://www.youtube.com/channel/UCdhU_w39u0BIgNfsRXs8taQ",
    logo: "about/youtube_logo.png",
    label: "YouTube",
  },
];

const SocialLinkItem = ({ href, logo, label }: SocialLinkItemProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        src={logo}
        alt={label}
        className="h-6 w-auto transition-all duration-300 ease-in-out hover:scale-125"
      />
    </a>
  );
};

export default function SocialLinkList() {
  return (
    <>
      <div className="flex gap-4">
        {socialLinksData.map(({ href, logo, label }, index) => (
          <SocialLinkItem key={index} href={href} logo={logo} label={label} />
        ))}
      </div>
    </>
  );
}
