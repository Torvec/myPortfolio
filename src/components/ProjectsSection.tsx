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
        <h3 className="p-8 text-2xl font-bold text-stone-300 md:text-4xl">
          {projectName}
        </h3>
        <div className="flex flex-col gap-8 md:flex-row md:gap-0">
          <div className="px-8 md:w-1/3">
            <p className="mb-4 text-base text-stone-400">{description}</p>
            <ul className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <li
                  key={index}
                  className="rounded-lg border border-white/10 bg-gradient-to-b from-stone-800 px-4 py-1 text-xs uppercase text-stone-400"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-tl-lg border-stone-800 px-4 md:w-2/3 md:border-l md:border-t md:px-0">
            <a href={deploymentURL} target="_blank" rel="noopener noreferrer">
              <img
                src={imgURL}
                alt={projectName}
                className="h-[25vh] w-full rounded-t-lg object-cover object-top opacity-80 md:h-[50vh]"
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
      <div className="container mx-auto mb-32 grid gap-32 px-4 md:px-0">
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
      <div className="mx-auto flex flex-col items-center justify-center border-y border-white/25 bg-gradient-to-t from-stone-900 to-10% py-64">
        <h4 className="mb-8 text-balance text-center text-2xl font-bold text-stone-200 md:w-1/2 md:text-4xl">
          {header}
        </h4>
        <ActionButton text={text} icon="north_east" href={href} />
      </div>
    );
  };

  return (
    <section id="projects">
      <SectionHeader title="Featured Full-Stack Projects" />
      <ProjectCardList />
      <MoreProjects />
    </section>
  );
}
