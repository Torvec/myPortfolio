import SectionHeader from "./template/SectionHeader";

export default function AboutMeSection() {
  const data = {
    sectionHeader: {
      title: "A Brief Introduction",
    },
    intro: {
      myPic: "me.png",
      paragraph1:
        "With a foundation in robotics and radar systems, I've leveraged my 14+ years of technician and 5+ years of front-end design and development experience to become a full-stack web developer.  After completing UC Berkeley's Full Stack Web Development Boot Camp, I'm now building modern, responsive web applications. I'm excited to bring my unique perspective and technical skills to your team/project!",
      paragraph2:
        "On a personal note, my hobbies include hiking, running, traveling, gaming, home cooking, PC building, and watching movies/anime.",
    },
    goals: {
      header: "I Design and Develop",
      text: [
        "Captivating, Responsive, Accessible designs.",
        "User-Friendly, Engaging Interactive Experiences.",
        "Secure, Robust, Scalable Data-driven Applications.",
        "SEO and Performance Optimized Websites.",
      ],
    },
  };

  const SubHeader = ({ text }: { text: string }) => {
    return (
      <h3 className="text-center text-3xl text-stone-300 md:text-5xl">
        {text}
      </h3>
    );
  };

  const GoalItem = ({ number, text }: { number: number; text: string }) => {
    return (
      <div className="row-span-3 flex flex-col justify-between rounded-lg border border-orange-900 bg-stone-900/25 p-8 text-stone-300">
        <span className="text-center">0{number}</span>
        <p className="text-lg text-pretty">{text}</p>
      </div>
    );
  };

  const GoalList = () => {
    const { header: goalHeaderText, text: goalsText } = data.goals;

    return (
      <>
        <div className="col-span-4 row-span-1 place-content-center border">
          <SubHeader text={goalHeaderText} />
        </div>
        {goalsText.map((goal, index) => (
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

  const { paragraph1, paragraph2 } = data.intro;
  const { title } = data.sectionHeader;

  return (
    <section className="flex flex-col justify-evenly">
      <SectionHeader title={title} />
      <div className="container mx-auto grid grid-cols-6 grid-rows-4 gap-8">
        <div className="col-span-2 row-span-2 rounded-lg border border-orange-900 bg-stone-900/25">
          <p className="p-4 text-stone-400">{paragraph1}</p>
        </div>
        <div className="col-span-2 row-span-1 rounded-lg border border-orange-900 bg-stone-900/25 p-8">
          <img src="me.png" alt="Me at the Grand Canyon" />
        </div>
        <div className="col-span-2 row-span-1 rounded-lg border border-orange-900 bg-stone-900/25 p-4">
          <p className="text-stone-400">{paragraph2}</p>
        </div>
        <div className="col-span-4 row-span-1 rounded-lg border border-orange-900 bg-stone-900/25 p-4"></div>
        <div className="col-span-6 row-span-2 grid grid-cols-4 grid-rows-4 gap-8">
          <GoalList />
        </div>
      </div>
    </section>
  );
}
