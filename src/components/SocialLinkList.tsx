import { socialLinksData } from "../data/commonData";
import { type SocialLinkItemProps } from "../types/allTypes";

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
