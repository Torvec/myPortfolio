import SectionHeader from "./template/SectionHeader";
import ActionButton from "./template/ActionButton";

export default function ProjectsSection() {
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
      <div className="overflow-hidden rounded-lg border border-stone-800 bg-gradient-to-tl from-stone-900">
        <h3 className="p-8 text-4xl font-bold text-stone-300">{projectName}</h3>
        <div className="flex">
          <div className="w-1/3 px-8">
            <p className="mb-4 text-base text-stone-400">{description}</p>
            <ul className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <li className="rounded-lg border border-white/10 bg-gradient-to-b from-stone-800 px-4 py-1 text-xs uppercase text-stone-400">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-2/3 overflow-hidden rounded-tl-lg border-l border-t border-stone-800">
            <a href={deploymentURL} target="_blank" rel="noopener noreferrer">
              <img
                src={imgURL}
                alt={projectName}
                className="h-[50vh] w-full object-cover object-top opacity-80"
              />
            </a>
          </div>
        </div>
      </div>
    );
  };

  const ProjectCardList = () => {
    const projectData = [
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

    return (
      <div className="grid gap-32">
        {projectData.map(
          ({
            id,
            imgURL,
            projectName,
            deploymentURL,
            description,
            techStack,
          }) => (
            <ProjectCard
              key={id}
              imgURL={imgURL}
              projectName={projectName}
              deploymentURL={deploymentURL}
              description={description}
              techStack={techStack}
            />
          ),
        )}
      </div>
    );
  };

  const MoreProjects = () => {
    const buttonData = {
      header:
        "See more projects, including in-development and experimental ones, on my GitHub.",
      text: "To GitHub!",
      href: "https://github.com/Torvec?tab=repositories",
    };

    const { header, text, href } = buttonData;

    return (
      <div className="mx-auto flex flex-col items-center justify-center py-64 md:w-1/2">
        <h4 className="mb-8 text-pretty text-center text-4xl font-bold text-stone-200">
          {header}
        </h4>
        <ActionButton text={text} icon="north_east" href={href} />
      </div>
    );
  };

  return (
    <section className="container mx-auto border-b border-white/25 bg-gradient-to-t from-stone-800 to-[2%]">
      <SectionHeader title="Featured Full-Stack Projects" />
      <ProjectCardList />
      <MoreProjects />
    </section>
  );
}
