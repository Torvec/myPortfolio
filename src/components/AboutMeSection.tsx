import SectionHeader from "./template/SectionHeader";

export default function AboutMeSection() {
  // Data Object
  const data = {
    sectionHeader: {
      title: "About Me",
      subtitle: "A Brief Intro",
      number: "01",
    },
    intro: {
      myPic: "me.png",
      paragraph:
        "From robotics and radar systems to full stack applications - I'm a San Francisco Bay Area based developer with 14+ years as a technician, and 5 years of freelance front-end web development experience. I recently transitioned to full stack web development after completing UC Berkeley's Full Stack Web Development Boot Camp.",
    },
    goals: {
      header: "I Create",
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

  // Section Components
  const SubHeader = ({ text }: { text: string }) => {
    return (
      <h3 className="border-b border-white/10 py-4 text-center text-3xl font-bold text-stone-300">
        {text}
      </h3>
    );
  };

  const Intro = () => {
    
    const { myPic, paragraph } = data.intro;
    
    return (
      <div className="mb-32 flex flex-col border border-white/10 md:flex-row md:items-center lg:mx-auto lg:w-2/3">
        <div className="border-b border-white/10 p-8 md:w-1/2 md:border-b-0 md:border-r">
          <img
            src={myPic}
            alt="Me at the grand canyon"
            className="max-h-[1000px]"
          />
        </div>
        <p className="xl:text-2xl p-8 text-lg text-stone-300 md:w-1/2 lg:text-xl">
          {paragraph}
        </p>
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
      <div className="flex h-[50vh] flex-col justify-end space-y-8 bg-gradient-to-b from-stone-800 p-8">
        <div className="text-base text-orange-600">0{number}</div>
        <div className="text-xl text-stone-400">{text}</div>
      </div>
    );
  };

  const GoalList = () => {
    
    const { header: goalHeaderText, text: goalsText } = data.goals;
    
    return (
      <div className="mb-32 border-y border-white/10">
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
      <div className="flex items-center gap-4">
        <span className="size-4 bg-orange-600">{logo}</span>
        <span className="text-sm font-bold uppercase text-stone-400 ">
          {label}
        </span>
      </div>
    );
  };

  const ToolList = () => {
    
    const { header: toolHeaderText, tools } = data.tools;
    
    return (
      <div className="border-y border-white/10">
        <SubHeader text={toolHeaderText} />
        <div className="grid grid-cols-2 gap-16 p-8 md:grid-cols-6 lg:grid-cols-12 lg:gap-4">
          {tools.map(({ logo, label }, index) => (
            <ToolContainer key={index} logo={logo} label={label} />
          ))}
        </div>
      </div>
    );
  };

  // Destructure sectionHeader data from data object
  const { title, subtitle, number } = data.sectionHeader;

  return (
    <section className="pb-64">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        number={number}
      />
      <Intro />
      <GoalList />
      <ToolList />
    </section>
  );
}
