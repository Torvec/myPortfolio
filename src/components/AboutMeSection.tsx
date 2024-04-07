
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

  const GoalsContainer = ({
    number,
    text,
  }: {
    number: number;
    text: string;
  }) => {
    return (
      <div className="text-balanced flex min-h-14 border border-white/25 text-sm font-bold md:text-xl">
        <div className="flex w-1/6 items-center justify-center border-r border-white/10 bg-stone-800 text-orange-600">
          <div className="flex size-10 items-center justify-center rounded-full border-2 border-orange-600">
            0{number}
          </div>
        </div>
        <div className="w-5/6 bg-stone-900 px-3 py-2 text-stone-300">
          {text}
        </div>
      </div>
    );
  };

  const Toolkit = () => {
    return (
      <div className="border-b border-t border-orange-500 bg-[url(grid_pattern_bg.png)] p-10">
        <div className="grid grid-cols-3 gap-4">
          {toolsList.map(({ logo, label }, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <span className="size-12 md:size-24 bg-stone-200">{logo}</span>
              <span className="text-sm md:text-xl font-bold uppercase text-stone-500">
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
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="md:w-1/3">
            <img
              src="me.png"
              alt="Me at the grand canyon"
              className="mx-auto max-h-96 border border-white/50"
            />
          </div>
          <div className="md:w-1/3">
            <h2 className="my-20 text-3xl font-bold text-stone-300 md:mb-10 md:mt-0 text-center md:text-left">
              About Me
            </h2>
            <p className="text-balance px-5 text-base md:my-0 md:px-0 md:text-2xl">
              From robotics and radar systems to full stack applications - I'm a{" "}
              <span className="font-bold">San Francisco Bay Area</span> based
              developer with 14+ years as a technician, and 5 years of freelance
              front-end web development experience. I recently transitioned to
              full stack web development after completing{" "}
              <span className="font-bold">
                UC Berkeley's Full Stack Web Development Boot Camp
              </span>
              .
            </p>
          </div>
          <div className="flex flex-col md:w-1/3">
            <div className="flex justify-center">
              <h3 className="my-20 text-3xl font-bold text-stone-300 md:mb-10 md:mt-0">
                I'm Passionate about Creating:
              </h3>
            </div>
            <div className="ml-5 flex flex-col gap-5 md:ml-0">
              {goalsText.map((goal, index) => (
                <GoalsContainer number={index + 1} text={goal} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <h3 className="my-20 text-balance text-center text-2xl font-bold text-stone-300 md:text-4xl">
        My Toolkit Includes:
      </h3>
      <Toolkit />
    </section>
  );
}
