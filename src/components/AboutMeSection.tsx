import SectionHeader from "./template/SectionHeader";

export default function AboutMeSection() {
  
  const goalsText = [
    "Visually captivating, responsive, and accessible designs.",
    "User Friendly and engaging interactive experiences.",
    "Secure, Robust, and scalable data-driven applications.",
  ];

  const toolsList = [
    { logo: "", label: "React" },
    { logo: "", label: "Next" },
    { logo: "", label: "Tailwind" },
    { logo: "", label: "Framer Motion" },
    { logo: "", label: "Node" },
    { logo: "", label: "Express" },
    { logo: "", label: "TypeScript" },
    { logo: "", label: "MySQL" },
    { logo: "", label: "MongoDB" },
    { logo: "", label: "GraphQL" },
    { logo: "", label: "Figma" },
  ];

  const Intro = () => {
    return (
      <p className="text-balance text-base px-5">
        From robotics and radar systems to full stack applications - I'm a{" "}
        <span className="font-bold">San Francisco Bay Area</span> based
        developer with 14+ years as a technician, and 5 years of freelance
        front-end web development experience. I recently transitioned to full
        stack web development after completing{" "}
        <span className="font-bold">
          UC Berkeley's Full Stack Web Development Boot Camp
        </span>
        .
      </p>
    );
  };

  const GoalsHeader = () => {
    return (
      <div className="flex justify-center">
        <h3 className="my-20 text-balance text-3xl font-bold w-1/2 text-stone-300">
          I'm Passionate about Creating:
        </h3>
      </div>
    );
  };

  const Goals = () => {
    const GoalsContainer = ({
      number,
      text,
    }: {
      number: number;
      text: string;
    }) => {
      return (
        <div className="flex border border-white/25 text-sm font-bold min-h-14 text-balanced">
          <div className="flex items-center justify-center bg-stone-800 text-orange-600 w-1/6 border-r border-white/10">
            <div className="border-2 border-orange-600 rounded-full size-10 flex justify-center items-center">
              0{number}
            </div>
          </div>
          <div className="bg-stone-900 text-stone-300 py-2 px-3 w-5/6">{text}</div>
        </div>
      );
    };

    return (
      <div className="space-y-5 ml-5">
        {goalsText.map((goal, index) => (
          <GoalsContainer number={index + 1} text={goal} />
        ))}
      </div>
    );
  };

  const ToolkitHeader = () => {
    return (
      <h3 className="text-balance text-center text-2xl font-bold my-20 text-stone-300">
        My Toolkit Includes:
      </h3>
    );
  };

  const Toolkit = () => {
    return (
      <div className="border-t border-b border-orange-500 p-10">
        <div className="grid grid-cols-3 gap-4">
          {toolsList.map(({ logo, label }, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <span className="size-12 bg-stone-200">{logo}</span>
              <span className="text-sm font-bold uppercase text-stone-500 ">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="pb-20">
      <SectionHeader
        title="About Me"
        subtitle="A Brief Intro"
        number={"01"}
      />
      <Intro />
      <GoalsHeader />
      <Goals />
      <ToolkitHeader />
      <Toolkit />
    </section>
  );
}
