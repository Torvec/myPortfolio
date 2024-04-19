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
      { hobby: "Streaming Shows", icon: "📺" },
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
              className="flex items-center rounded-lg bg-stone-900"
            >
              <span className="border-r border-black p-2">{icon}</span>
              <span className="p-2">{hobby}</span>
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

    const locations = [
      { type: "On-Site", available: "✅" },
      { type: "Remote", available: "✅" },
      { type: "Hybrid", available: "✅" },
    ];

    // ✅ = available, ❌ = not

    return (
      <>
        <h3 className="mb-4 text-center text-lg font-bold uppercase text-stone-200">
          {header}
        </h3>
        <ul className="flex justify-end gap-2 text-stone-400">
          {locations.map(({ type }, index) => (
            <li key={index} className="flex gap-2 p-1 text-sm">
              <span>{type}</span>
            </li>
          ))}
        </ul>
        <ul className="space-y-8 text-stone-300">
          {employment.map(({ type, icon }, index) => (
            <li key={index} className="flex justify-between bg-stone-900 py-1">
              <div>
                <span className="bg-stone-700 p-1">{icon}</span>
                <span className="bg-stone-900 px-2 font-bold">{type}</span>
              </div>
              <div className="flex gap-12">
                <span>✅</span>
                <span>✅</span>
                <span>✅</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="grid place-content-center pt-8">
          <button className="rounded-lg bg-orange-600 p-2 text-white/75 font-bold">
            Contact Me
          </button>
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
          className="col-span-1 row-span-3 place-content-center rounded-lg bg-stone-900"
        >
          <div className="flex flex-col items-center gap-4">
            {/* <span className="size-8 rounded-full bg-orange-600">{logo}</span> */}
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
        <h3 className="col-span-4 row-span-1 place-content-center text-center text-lg font-bold uppercase text-stone-200">
          {header}
        </h3>
        {socialLinks.map(({ href, logo, label }, index) => (
          <SocialLink key={index} href={href} logo={logo} label={label} />
        ))}
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
        <div className="row-span-3 flex flex-col justify-between rounded-lg border border-orange-900 bg-stone-900/25 p-8 text-stone-300">
          <span className="text-center">0{number}</span>
          {/* <span className="size-32 bg-orange-900 rounded-3xl mx-auto">{icon}</span> */}
          <img src={icon} alt="" className="mx-auto size-32" />
          <p className="text-pretty text-lg">{text}</p>
        </div>
      );
    };

    return (
      <>
        <div className="col-span-4 row-span-1 place-content-end">
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
    <section>
      <div className="container mx-auto grid grid-cols-12 grid-rows-5 gap-8">
        {/* Row 1 */}
        <div className="col-span-12 row-span-1">
          <SectionHeader title="A Brief Introduction" />
        </div>
        {/* Row 2 */}
        <div className="col-span-4 row-span-1 rounded-lg border border-orange-900 bg-stone-900/25 p-8">
          <Intro />
        </div>
        <div className="col-span-4 row-span-1  rounded-lg border border-white/50 bg-stone-900/25">
          <ProfilePic />
        </div>
        <div className="col-span-4 row-span-1  rounded-lg border border-orange-900 bg-stone-900/25 p-8">
          <Hobbies />
        </div>
        {/* Row 3 */}
        <div className="col-span-4 row-span-1  rounded-lg border border-orange-900 bg-stone-900/25 p-8">
          <Availability />
        </div>
        <div className="col-span-8 row-span-1 grid grid-cols-4 grid-rows-4 place-content-center gap-4 rounded-lg border border-orange-900 bg-stone-900/25 p-4">
          <SocialLinkList />
        </div>
        {/* Row 4 and 5 */}
        <div className="col-span-12 row-span-2 grid grid-cols-4 grid-rows-4 gap-8">
          <GoalList />
        </div>
      </div>
    </section>
  );
}
