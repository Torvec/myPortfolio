export default function ProjectsSection() {
  const featuredProjects = [
    {
      id: 1,
      projectName: "Loot Vault",
      imgURL: "loot_vault.jpg",
      deploymentURL: "https://torvec.github.io/Loot-Vault/",
      description:
        "A video game deals site for gamers on a budget using third party API's.",
      techStack: ["HTML", "Bulma CSS", "JavaScript", "Fetch API"],
    },
    {
      id: 2,
      projectName: "Task Titan",
      imgURL: "task_titan.jpg",
      deploymentURL: "https://task-titan-bec51c55ebe5.herokuapp.com/",
      description:
        "A task completion and collaboration app for managing projects.",
      techStack: [
        "Handlebars",
        "Materialize CSS",
        "MySQL",
        "Node",
        "Express",
        "Sequelize",
      ],
    },
    {
      id: 3,
      projectName: "Wedloc",
      imgURL: "wedloc.jpg",
      deploymentURL: "https://wedloc-84c89e3ae29d.herokuapp.com/",
      description:
        "A social media app for wedding photographers to share their work and allow clients to interact with guests.",
      techStack: [
        "React",
        "Tailwind",
        "Material UI",
        "Node",
        "Express",
        "MongoDB",
        "Mongoose",
        "GraphQL",
        "Apollo Server",
      ],
    },
    {
      id: 4,
      projectName: "Bootcamp Challenges",
      imgURL: "bootcamp_challenges.jpg",
      deploymentURL: "https://torvec.github.io/bootcamp-challenges/",
      description:
        "All of the weekly projects from my UC Berkeley Full Stack Web Development Bootcamp",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "JQuery",
        "Bootstrap",
        "Node",
        "Express",
        "MySQL",
        "Handlebars",
        "MongoDB",
        "PWA",
        "React",
        "Redux",
      ],
    },
  ];

  const ProjectCard = ({
    imgURL,
    projectName,
    deploymentURL,
    description,
    techStack,
  }: {
    imgURL: string;
    projectName: string;
    deploymentURL: string;
    description: string;
    techStack: string[];
  }) => {
    return (
      <div className="relative overflow-hidden rounded-3xl border-2 border-white/20">
        <a href={deploymentURL}>
          <img
            src={imgURL}
            alt={projectName}
            className="max-h-[60vh] min-h-[60vh] w-full object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 flex h-full w-full flex-col justify-end bg-gradient-to-t from-stone-950 from-20% px-4 pb-4">
            <h3 className="mb-2 text-2xl font-bold text-stone-200">
              {projectName}
            </h3>
            <p className="mb-4 text-stone-300 text-base">{description}</p>
            <ul className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <li className="rounded-2xl bg-stone-800 px-4 py-1 text-sm text-stone-400">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </a>
      </div>
    );
  };

  const LinkButton = ({ text, href }: { text: string; href: string }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-2xl border-2 border-white/50 px-4 py-2 transition-all duration-300 ease-in-out hover:border-orange-600 hover:text-orange-600"
      >
        <span className="text-lg uppercase">{text}</span>
        <span className="material-symbols-outlined text-lg transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
          north_east
        </span>
      </a>
    );
  };

  return (
    <section className="container mx-auto">
      <div className="mx-4 mb-16 border-b-4 border-orange-600 md:mx-0">
        <h2 className="text-center text-4xl font-bold">Featured Projects</h2>
      </div>
      <div className="grid gap-4 px-4 md:grid-cols-2 md:gap-8 md:px-0 mb-16">
        {featuredProjects.map(
          ({
            id,
            imgURL,
            projectName,
            deploymentURL,
            description,
            techStack,
          }) => (
            <div key={id}>
              <ProjectCard
                imgURL={imgURL}
                projectName={projectName}
                deploymentURL={deploymentURL}
                description={description}
                techStack={techStack}
              />
            </div>
          ),
        )}
      </div>
      <div className="grid place-content-center pb-64">
        <LinkButton
          text="More Projects"
          href="https://github.com/Torvec?tab=repositories"
        />
      </div>
    </section>
  );
}
