import SectionHeader from "./template/SectionHeader";

export default function AboutMeSection() {
  const data = {
    sectionHeader: {
      title: "About Me",
      subtitle: "A Brief Intro",
      number: "01",
    },
    intro: {
      myPic: "me.png",
      paragraph1:
        "With a foundation in robotics and radar systems, I've leveraged my 14+ years of technical experience to become a full-stack web developer.  After completing UC Berkeley's Full Stack Web Development Boot Camp, I'm now building modern, responsive web applications",
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
    tools: {
      header: "My Toolkit",
      tools: [
        { logo: "", label: "React" },
        { logo: "", label: "Next" },
        { logo: "", label: "Tailwind" },
        { logo: "", label: "Framer Motion" },
        { logo: "", label: "Node" },
        { logo: "", label: "Express" },
        { logo: "", label: "MySQL" },
        { logo: "", label: "MongoDB" },
        { logo: "", label: "GraphQL" },
        { logo: "", label: "TypeScript" },
        { logo: "", label: "Figma" },
        { logo: "", label: "VS Code" },
      ],
    },
  };

  const SubHeader = ({ text }: { text: string }) => {
    return (
      <h3 className="border-b border-white/10 py-32 text-center text-3xl font-bold text-stone-300 md:text-5xl bg-stone-900">
        {text}
      </h3>
    );
  };

  const Intro = () => {
    const { myPic, paragraph1, paragraph2 } = data.intro;

    return (
      <div className="flex flex-col border border-white/10 md:flex-row md:items-center lg:mx-auto lg:w-2/3 bg-stone-950">
        <div className="border-b border-white/10 p-8 md:w-1/2 md:border-b-0 md:border-r">
          <img
            src={myPic}
            alt="Me at the grand canyon"
            className="max-h-[1000px]"
          />
        </div>
        <div className="xl:text-2xl space-y-8 p-8 text-lg text-stone-300 md:w-1/2 md:text-xl">
          <p className="">{paragraph1}</p>
          <p className="">{paragraph2}</p>
        </div>
      </div>
    );
  };

  const GoalContainer = ({
    number,
    text,
  }: {
    number: number;
    text: string;
  }) => {
    return (
      <div className="flex h-[80vh] flex-col justify-center border-b border-white/10">
        <div className="flex h-3/4 flex-col justify-end gap-8 text-pretty border-y border-white/10 bg-gradient-to-tl from-stone-800 p-8 lg:p-16">
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
        <div className="grid divide-x divide-white/10 md:grid-cols-4">
          {goalsText.map((goal, index) => (
            <GoalContainer key={index} number={index + 1} text={goal} />
          ))}
        </div>
      </div>
    );
  };

  const ToolContainer = ({ logo, label }: { logo: string; label: string }) => {
    return (
      <div className="flex items-center gap-4 md:flex-col">
        <span className="size-4 bg-orange-600 md:size-16">{logo}</span>
        <span className="text-sm font-bold uppercase text-stone-400">
          {label}
        </span>
      </div>
    );
  };

  const ToolList = () => {
    const { header: toolHeaderText, tools } = data.tools;

    return (
      <div className="flex min-h-[50vh] flex-col justify-evenly border-y border-white/10 pb-16">
        <SubHeader text={toolHeaderText} />
        <div className="grid grid-cols-2 gap-16 border-y border-white/10 bg-[url(grid_pattern_bg.png)] p-8 md:grid-cols-6 md:px-0 md:py-32 lg:grid-cols-12 lg:gap-4">
          {tools.map(({ logo, label }, index) => (
            <ToolContainer key={index} logo={logo} label={label} />
          ))}
        </div>
      </div>
    );
  };

  const { title, subtitle, number } = data.sectionHeader;

  return (
    <section>
      <div
        className="flex min-h-screen flex-col justify-center border-y border-white/15 bg-[url(line_bg.png)] bg-repeat-y bg-center"
      >
        <SectionHeader title={title} subtitle={subtitle} number={number} />
        <Intro />
      </div>
      <GoalList />
      <ToolList />
    </section>
  );
}
