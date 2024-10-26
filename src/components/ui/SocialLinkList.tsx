import { socialLinksData } from "../../data/socialLinksData";

export default function SocialLinkList() {
  return (
    <div className="flex gap-4">
      {socialLinksData.map(({ href, logo, label }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
          <img
            src={logo}
            alt={label}
            className="h-6 w-auto transition-all duration-300 ease-in-out hover:scale-125"
          />
        </a>
      ))}
    </div>
  );
}
