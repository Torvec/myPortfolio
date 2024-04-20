import SectionHeader from "./template/SectionHeader";

export default function AboutMeSection() {
  const Intro = () => {
    const heading = "About Me";
    const p1 =
      "With a foundation in robotics and radar systems, I've leveraged my 14+ years of technician and 5+ years of front-end design and development experience to become a full-stack web developer.  ";
    const p2 =
      "After completing UC Berkeley's Full Stack Web Development Boot Camp, I'm now building modern, responsive web applications. I'm excited to bring my unique perspective and technical skills to your team/project!";

    return (
      <>
        <h3 className="mb-4 text-lg font-bold uppercase text-stone-200">
          {heading}
        </h3>
        <p className="mb-4 text-stone-300">{p1}</p>
        <p className="text-stone-300">{p2}</p>
      </>
    );
  };

  const ProfilePic = () => {
    const img = { src: "me.png", alt: "Me at the Grand Canyon" };

    return (
      <img
        src={img.src}
        alt={img.alt}
        className="h-full w-full rounded-lg object-cover "
      />
    );
  };

  // TODO: Replace emojis with svg icons
  const Hobbies = () => {
    const heading = "Hobbies & Interests";

    const hobbyList = [
      { hobby: "Hiking", icon: "🗻" },
      { hobby: "Running", icon: "🏃" },
      { hobby: "Traveling", icon: "✈️" },
      { hobby: "Video Games", icon: "🎮" },
      { hobby: "Home cooking", icon: "🍳" },
      { hobby: "PC Building", icon: "🖥️" },
      { hobby: "Movies", icon: "📽️" },
      { hobby: "Anime", icon: "🎌" },
      { hobby: "Memes", icon: "M" },
      { hobby: "Streaming Shows", icon: "📺" },
      { hobby: "Green Energy", icon: "G" },
    ];

    return (
      <>
        <h3 className="mb-4 text-lg font-bold uppercase text-stone-200">
          {heading}
        </h3>
        <ul className="flex flex-wrap gap-4 pt-4 text-stone-400">
          {hobbyList.map(({ hobby, icon }, index) => (
            <li
              key={index}
              className="flex items-center rounded-lg border-4 border-stone-900 bg-gradient-to-t from-stone-800 text-xs uppercase"
            >
              <span className="px-2 py-1">{icon}</span>
              <span className="px-2 py-1">{hobby}</span>
            </li>
          ))}
        </ul>
      </>
    );
  };

  // TODO: Find a more procedural way to list everything, code is temporary
  const Availability = () => {
    const header = "Current Availability";

    const employment = [
      { type: "Full Time", icon: "🧑‍💻" },
      { type: "Part Time", icon: "🕔" },
      { type: "Contract", icon: "📝" },
      { type: "Freelance", icon: "💻" },
    ];

    return (
      <>
        <h3 className="text-center text-lg font-bold uppercase text-stone-200">
          {header}
        </h3>
        <div className="flex h-full flex-col justify-center gap-4">
          {employment.map(({ type, icon }, index) => (
            <div className="flex items-center justify-between rounded-lg border-4 border-stone-900 bg-gradient-to-tr from-stone-800 p-1 text-stone-400">
              <div key={index} className="flex items-center gap-2">
                <span>{icon}</span>
                <span className="text-xs uppercase">{type}</span>
              </div>
              <span>✅</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  // TODO: Social Link logos are temporary, need to change them to svg
  const SocialLinkList = () => {
    const header = "My Socials";

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
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-square rounded-xl border border-white/10 p-2"
        >
          <div className="flex h-full flex-col items-center justify-center rounded-lg border border-white/20 bg-gradient-to-tr from-stone-800">
            <img src={logo} alt={label} />
            <span className="text-orange-500 transition-all duration-300 ease-in-out hover:text-orange-600">
              {label}
            </span>
          </div>
        </a>
      );
    };

    return (
      <>
        <h3 className="text-center text-lg font-bold uppercase text-stone-200">
          {header}
        </h3>
        <div className="grid h-full grid-cols-2 place-content-center gap-8 md:grid-cols-4">
          {socialLinks.map(({ href, logo, label }, index) => (
            <SocialLink key={index} href={href} logo={logo} label={label} />
          ))}
        </div>
      </>
    );
  };

  // TODO: Icons are temporary, need to come up with a unique design and save as svg
  const GoalList = () => {
    const header = "I Design and Develop";

    const goalContent = [
      {
        text: "Captivating, Responsive, Accessible designs.",
        icon: "responsive.png",
      },
      {
        text: "User-Friendly, Engaging Interactive Experiences.",
        icon: "interactive.png",
      },
      {
        text: "Secure, Robust, Scalable Data-driven Applications.",
        icon: "secure.png",
      },
      {
        text: "SEO and Performance Optimized Websites.",
        icon: "performance.png",
      },
    ];

    const GoalItem = ({
      number,
      text,
      icon,
    }: {
      number: number;
      text: string;
      icon: string;
    }) => {
      return (
        <div className="flex aspect-square flex-col items-center justify-between rounded-lg border border-white/10 bg-gradient-to-tr from-stone-900 p-8 text-stone-300 md:col-span-2 md:row-span-2">
          <span>0{number}</span>
          <img src={icon} alt="" className="size-32" />
          <p className="text-pretty text-lg">{text}</p>
        </div>
      );
    };

    return (
      <>
        <div className="row-span-1 place-content-center md:col-span-4">
          <h3 className="text-center text-3xl text-stone-300 md:text-5xl">
            {header}
          </h3>
        </div>
        {goalContent.map(({ text, icon }, index) => (
          <GoalItem key={index} number={index + 1} text={text} icon={icon} />
        ))}
      </>
    );
  };

  return (
    <section className="container mx-auto border-b border-white/20 bg-gradient-to-t from-stone-900 to-[2%]">
      <div className="mb-8 grid gap-8 px-4 md:grid-cols-3 md:grid-rows-2 md:px-0">
        <div className="md:col-span-3 md:row-span-1">
          <SectionHeader title="A Brief Introduction" />
        </div>
        <div className="rounded-lg border border-white/10 bg-gradient-to-br from-stone-900 p-8">
          <Intro />
        </div>
        <div className="rounded-lg border border-white/10">
          <ProfilePic />
        </div>
        <div className="rounded-lg border border-white/10 bg-gradient-to-bl from-stone-900 p-8">
          <Hobbies />
        </div>
      </div>
      <div className="mb-8 grid gap-8 px-4 md:grid-cols-3 md:px-0">
        <div className="rounded-lg border border-white/10 bg-gradient-to-tr from-stone-900 p-8 md:col-span-1 md:aspect-square">
          <Availability />
        </div>
        <div className="rounded-lg border border-white/10 bg-gradient-to-tl from-stone-900 p-8 md:col-span-2">
          <SocialLinkList />
        </div>
      </div>
      <div className="mb-64 grid gap-8 px-4 md:grid-cols-4 md:grid-rows-3 md:px-0">
        <GoalList />
      </div>
    </section>
  );
}
