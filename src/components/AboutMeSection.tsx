import SectionHeader from "./template/SectionHeader";

export default function AboutMeSection() {
  const data = {
    sectionHeader: {
      title: "About Me",
      number: "01",
    },
    intro: {
      myPic: "me.png",
      header: "A Brief Intro",
      paragraph1:
        "With a foundation in robotics and radar systems, I've leveraged my 14+ years of technical experience to become a full-stack web developer.  After completing UC Berkeley's Full Stack Web Development Boot Camp, I'm now building modern, responsive web applications. I'm excited to bring my unique perspective and technical skills to your team/project!",
      paragraph2:
        "On a personal note, my hobbies include hiking, running, travel, gaming, home cooking, PC building, and movies/anime.",
    },
    goals: {
      header: "I Design and Develop",
      text: [
        "Visually captivating, responsive, and accessible designs.",
        "User Friendly and engaging interactive experiences.",
        "Secure, Robust, and scalable data-driven applications.",
        "Performance and SEO optimized websites.",
      ],
    },
    toolsList: {
      header: "My Toolkit",
      tools: [
        { logo: "", label: "React" },
        { logo: "", label: "Next" },
        { logo: "", label: "Astro" },
        { logo: "", label: "Tailwind" },
        { logo: "", label: "Material UI" },
        { logo: "", label: "Framer Motion" },
        { logo: "", label: "Node" },
        { logo: "", label: "Express" },
        { logo: "", label: "MySQL" },
        { logo: "", label: "Sequelize" },
        { logo: "", label: "MongoDB" },
        { logo: "", label: "Mongoose" },
        { logo: "", label: "GraphQL" },
        { logo: "", label: "TypeScript" },
        { logo: "", label: "Figma" },
        { logo: "", label: "VS Code" },
      ],
    },
  };

  const SubHeader = ({ text }: { text: string }) => {
    return (
      <h3 className="bg-stone-950 py-32 text-center text-3xl text-stone-300 md:text-5xl">
        {text}
      </h3>
    );
  };

  const Intro = () => {
    const { myPic, header, paragraph1, paragraph2 } = data.intro;

    return (
      <div className="flex min-h-screen flex-col justify-evenly border-b border-white/15">
        <div className="bg-[url(horiz_line_bg.png)] bg-center bg-repeat-x">
          <div className="flex flex-col border border-white/15 bg-stone-950 md:flex-row md:bg-[url(vert_line_bg.png)] md:bg-center md:bg-repeat-y lg:mx-auto lg:w-2/3">
            <div className="border-b border-white/15 p-8 md:w-1/2 md:border-b-0">
              <img
                src={myPic}
                alt="Me at the grand canyon"
                className="max-h-[1000px] border-2 border-dotted border-white/50"
              />
            </div>
            <div className="xl:text-2xl space-y-8 p-8 text-lg text-stone-300 md:w-1/2 md:text-xl">
              <h3 className="border border-white/15 p-4 text-3xl font-bold">
                {header}
              </h3>
              <p className="text-stone-400">{paragraph1}</p>
              <p className="text-stone-400">{paragraph2}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const GoalItem = ({ number, text }: { number: number; text: string }) => {
    return (
      <div className="flex h-[80vh] flex-col justify-center border-y border-white/15 bg-stone-950">
        <div className="flex h-3/4 flex-col justify-end gap-8 text-pretty border-y border-white/15 bg-gradient-to-tl from-stone-800 to-stone-950 p-8">
          <div className="text-base text-orange-600 md:text-lg">0{number}</div>
          <div className="text-xl text-stone-400">{text}</div>
        </div>
      </div>
    );
  };

  const GoalList = () => {
    const { header: goalHeaderText, text: goalsText } = data.goals;

    return (
      <div className="flex min-h-screen flex-col justify-center">
        <SubHeader text={goalHeaderText} />
        <div className="grid divide-x divide-white/15 md:grid-cols-4">
          {goalsText.map((goal, index) => (
            <GoalItem key={index} number={index + 1} text={goal} />
          ))}
        </div>
      </div>
    );
  };

  const ToolItem = ({ logo, label }: { logo: string; label: string }) => {
    return (
      <div className="flex aspect-square flex-col items-center justify-center gap-2">
        <span className="size-16 bg-orange-600">{logo}</span>
        <span className="text-sm uppercase text-stone-400">{label}</span>
      </div>
    );
  };

  const ToolGroup = ({
    groupData,
  }: {
    groupData: { logo: string; label: string }[];
  }) => {
    return (
      <div className="grid grid-cols-2 border border-white/15">
        {groupData.map(({ logo, label }, index) => (
          <ToolItem key={index} logo={logo} label={label} />
        ))}
      </div>
    );
  };

  const ToolList = () => {
    const { tools } = data.toolsList;

    // Group tools into groups of 4
    const groupedTools = [];
    const groupSize = 4;
    for (let i = 0; i < tools.length; i += groupSize) {
      groupedTools.push(tools.slice(i, i + groupSize));
    }

    return (
      <div className="grid gap-4 border border-white/15 bg-stone-950 p-4 md:grid-cols-2">
        {groupedTools.map((group, index) => (
          <ToolGroup key={index} groupData={group} />
        ))}
      </div>
    );
  };

  const ToolsSection = () => {
    const { header: toolHeaderText } = data.toolsList;

    return (
      <div className="container mx-auto flex flex-col justify-evenly pb-64">
        <SubHeader text={toolHeaderText} />
        <ToolList />
      </div>
    );
  };

  const { title, number } = data.sectionHeader;

  return (
    <section>
      <SectionHeader title={title} number={number} />
      <Intro />
      <GoalList />
      <ToolsSection />
    </section>
  );
}
