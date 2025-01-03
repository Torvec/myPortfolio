const socialLinks = [
  {
    href: "https://www.linkedin.com/in/edward-vonschondorf/",
    logo: "about/linkedin.png",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Torvec",
    logo: "about/github.png",
    label: "GitHub",
  },
  {
    href: "https://bsky.app/profile/edward-vonschondorf.dev",
    logo: "about/bluesky.png",
    label: "BlueSky",
  },
  {
    href: "https://mastodon.social/@edvonschondorf",
    logo: "about/mastodon.png",
    label: "Mastodon",
  },
  {
    href: "https://www.youtube.com/@edward-vonschondorf-dev",
    logo: "about/youtube.png",
    label: "YouTube",
  },
];

export default function SocialLinkList() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ href, logo, label }) => (
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
