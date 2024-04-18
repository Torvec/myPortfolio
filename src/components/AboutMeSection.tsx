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

    return <img src={img.src} alt={img.alt} />;
  };

  const Hobbies = () => {
    const heading = "Hobbies & Interests";

    const p1 = "During my free time I enjoy:";

    const hobbyList = [
      "Hiking",
      "Running",
      "Traveling",
      "Playing Video Games",
      "Home cooking",
      "PC Building",
      "Watching Movies, Anime, Shows",
    ];

    return (
      <>
        <h3 className="mb-4 text-lg font-bold uppercase text-stone-200">
          {heading}
        </h3>
        <p className="text-stone-300">{p1}</p>
        <ul className="space-y-1 pl-4 pt-2 text-stone-400">
          {hobbyList.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </>
    );
  };

  const Availability = () => {
    const header = "Current Availability";

    const positions = ["Full Time", "Part Time", "Contract"];

    const locations = ["Local", "Remote", "Hybrid"];

    const buttonText = "Let's Connect!";

    return (
      <>
        <h3 className="mb-4 text-lg font-bold uppercase text-stone-200">
          {header}
        </h3>
        <ul className="text-stone-300">
          {positions.map((position, index) => (
            <li key={index} className="">{position}</li>
          ))}
        </ul>
        <ul className="text-stone-300 flex justify-between py-4">
          {locations.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
        <div className="flex flex-col gap-8">
          <button className="rounded-2xl border border-orange-600 px-8 py-4 text-white">
            {buttonText}
          </button>
        </div>
      </>
    );
  };

  const SocialLinkList = () => {
    const header = "Socials";

    const socialLinks = [
      {
        href: "https://www.linkedin.com/in/edward-von/",
        logo: "",
        label: "LinkedIn",
      },
      { href: "https://github.com/Torvec", logo: "", label: "GitHub" },
      { href: "https://dev.to/torvec", logo: "", label: "Dev.to" },
      {
        href: "https://www.youtube.com/channel/UCdhU_w39u0BIgNfsRXs8taQ",
        logo: "",
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
          <div className="flex flex-col gap-4">
            <span className="size-8 rounded-full bg-orange-600">{logo}</span>
            <span className="text-orange-500 transition-all duration-300 ease-in-out hover:text-orange-600">
              {label}
            </span>
          </div>
        </a>
      );
    };

    return (
      <>
        <h3 className="mb-4 text-lg font-bold uppercase text-stone-200">
          {header}
        </h3>
        <div className="flex justify-between">
          {socialLinks.map(({ href, logo, label }, index) => (
            <SocialLink key={index} href={href} logo={logo} label={label} />
          ))}
        </div>
      </>
    );
  };

  const GoalList = () => {
    const header = "I Design and Develop";

    const goalText = [
      "Captivating, Responsive, Accessible designs.",
      "User-Friendly, Engaging Interactive Experiences.",
      "Secure, Robust, Scalable Data-driven Applications.",
      "SEO and Performance Optimized Websites.",
    ];

    const GoalItem = ({ number, text }: { number: number; text: string }) => {
      return (
        <div className="row-span-3 flex flex-col justify-between rounded-lg border border-orange-900 bg-stone-900/25 p-8 text-stone-300">
          <span className="text-center">0{number}</span>
          <p className="text-pretty text-lg">{text}</p>
        </div>
      );
    };

    return (
      <>
        <div className="col-span-4 row-span-1 place-content-center border">
          <h3 className="text-center text-3xl text-stone-300 md:text-5xl">
            {header}
          </h3>
        </div>
        {goalText.map((goal, index) => (
          <GoalItem key={index} number={index + 1} text={goal} />
        ))}
      </>
    );
  };

  // const ToolItem = ({ logo, label }: { logo: string; label: string }) => {
  //   return (
  //     <div className="flex aspect-square flex-col items-center justify-center gap-2">
  //       <span className="size-16 bg-orange-600">{logo}</span>
  //       <span className="text-sm uppercase text-stone-400">{label}</span>
  //     </div>
  //   );
  // };

  // const ToolGroup = ({
  //   groupData,
  // }: {
  //   groupData: { logo: string; label: string }[];
  // }) => {
  //   return (
  //     <div className="grid grid-cols-2 border border-white/15">
  //       {groupData.map(({ logo, label }, index) => (
  //         <ToolItem key={index} logo={logo} label={label} />
  //       ))}
  //     </div>
  //   );
  // };

  // const ToolList = () => {
  //   const { tools } = data.toolsList;

  //   // Group tools into groups of 4
  //   const groupedTools = [];
  //   const groupSize = 4;
  //   for (let i = 0; i < tools.length; i += groupSize) {
  //     groupedTools.push(tools.slice(i, i + groupSize));
  //   }

  //   return (
  //     <div className="grid gap-4 border border-white/15 bg-stone-950 p-4 md:grid-cols-2">
  //       {groupedTools.map((group, index) => (
  //         <ToolGroup key={index} groupData={group} />
  //       ))}
  //     </div>
  //   );
  // };

  // const ToolsSection = () => {
  //   const { header: toolHeaderText } = data.toolsList;

  //   return (
  //     <div className="container mx-auto flex flex-col justify-evenly">
  //       <SubHeader text={toolHeaderText} />
  //       <ToolList />
  //     </div>
  //   );
  // };

  return (
    <section className="flex flex-col justify-evenly">
      <SectionHeader title="A Brief Introduction" />
      <div className="container mx-auto grid grid-cols-6 grid-rows-4 gap-8">
        <div className="col-span-2 row-span-1 rounded-lg border border-orange-900 bg-stone-900/25 p-8">
          <Intro />
        </div>
        <div className="col-span-2 row-span-1 rounded-lg border border-orange-900 bg-stone-900/25 p-8">
          <ProfilePic />
        </div>
        <div className="col-span-2 row-span-1 rounded-lg border border-orange-900 bg-stone-900/25 p-8">
          <Hobbies />
        </div>
        <div className="col-span-2 row-span-1 rounded-lg border border-orange-900 bg-stone-900/25 p-8">
          <Availability />
        </div>
        <div className="col-span-4 row-span-1 rounded-lg border border-orange-900 bg-stone-900/25 p-8">
          <SocialLinkList />
        </div>
        <div className="col-span-6 row-span-2 grid grid-cols-4 grid-rows-4 gap-8">
          <GoalList />
        </div>
      </div>
    </section>
  );
}
