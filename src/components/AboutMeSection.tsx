export default function AboutMeSection() {
  const introduction = `From robotics and radar systems to full stack applications - I'm a San
          Francisco Bay Area based developer with 14+ years as a technician, and
          5 years of freelance front-end web development experience. I recently
          transitioned to full stack web development after completing UC
          Berkeley's Full Stack Web Development Boot Camp.`;

  const goalsText = [
    "Visually captivating, responsive, and have accessible designs.",
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
    { logo: "", label: "MySQL" },
    { logo: "", label: "MongoDB" },
    { logo: "", label: "GraphQL" },
    { logo: "", label: "TypeScript" },
    { logo: "", label: "Figma" },
    { logo: "", label: "VS Code" },
  ];

  const SubHeader = ({ text }: { text: string }) => {
    return (
      <h3 className="text-center text-lg font-bold uppercase text-stone-200">
        {text}
      </h3>
    );
  };

  const GoalsContainer = ({
    number,
    text,
  }: {
    number: number;
    text: string;
  }) => {
    return (
      <div className="flex text-base font-bold">
        <div className="flex w-1/6 items-center justify-center border-r-2 border-dotted border-white/25 text-orange-700">
          <div className="flex size-10 items-center justify-center rounded-full border-2 border-orange-700">
            0{number}
          </div>
        </div>
        <div className="w-5/6 px-4 py-2 text-stone-400">{text}</div>
      </div>
    );
  };

  const Toolkit = () => {
    return (
      <div className="grid grid-cols-2 gap-4">
        {toolsList.map(({ logo, label }, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="size-6 bg-orange-700">{logo}</span>
            <span className="text-sm font-bold uppercase text-stone-400 ">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="container mx-auto grid gap-4 p-4 pb-64 md:grid-cols-2 md:gap-8">
      {/* Pic of Me */}
      <div className="overflow-hidden rounded-3xl border-2 border-white/50">
        <img
          src="me.png"
          alt="Me at the grand canyon"
          className="object-cover object-center"
        />
      </div>
      {/* Intro Paragraph */}
      <div className="space-y-4 rounded-2xl border-2 border-white/20 p-4 md:space-y-8 md:p-8">
        <h2 className="text-center text-4xl font-bold text-stone-200">
          About Me
        </h2>
        <p className="text-lg text-stone-300 md:text-xl">{introduction}</p>
      </div>
      {/* Developer Goals */}
      <div className="space-y-4 rounded-3xl border-2 border-white/20 p-4 md:space-y-8 md:p-8">
        <SubHeader text="I develop websites that are..." />
        <div className="space-y-4">
          {goalsText.map((goal, index) => (
            <GoalsContainer number={index + 1} text={goal} />
          ))}
        </div>
      </div>
      {/* My Toolkit */}
      <div className="space-y-4 rounded-3xl border-2 border-white/20 p-4 md:space-y-8 md:p-8">
        <SubHeader text="My Toolkit:" />
        <Toolkit />
      </div>
    </section>
  );
}
