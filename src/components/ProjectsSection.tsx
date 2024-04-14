import SectionHeader from "./template/SectionHeader";
import ActionButton from "./template/ActionButton";

export default function ProjectsSection() {
  const data = {
    sectionHeader: {
      title: "Projects",
      number: "02",
    },
    projects: [
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
    ],
    moreProjects: {
      text: "More Projects",
      href: "https://github.com/Torvec?tab=repositories",
    },
  };

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
      <div className="border-b border-white/15 p-4 md:p-8">
        <div className="relative">
          <a href={deploymentURL}>
            <img
              src={imgURL}
              alt={projectName}
              className="max-h-[80vh] min-h-[80vh] w-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 flex h-full w-full flex-col justify-end bg-gradient-to-t from-stone-950 from-20% px-4 pb-4">
              <h3 className="mb-2 text-2xl font-bold text-stone-200">
                {projectName}
              </h3>
              <p className="mb-4 text-base text-stone-300">{description}</p>
              <ul className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <li className="bg-stone-800 px-4 py-1 text-sm text-stone-400">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        </div>
      </div>
    );
  };

  const ProjectCardList = () => {
    const { projects } = data;

    return (
      <div className="grid bg-stone-950 py-64 md:grid-cols-2 md:bg-transparent">
        {projects.map(
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
    const { text, href } = data.moreProjects;

    return (
      <div className="mx-auto flex w-5/6 items-center justify-center bg-stone-950 pb-64 md:w-1/2">
        <ActionButton text={text} icon="north_east" href={href} />
      </div>
    );
  };

  const { title, number } = data.sectionHeader;

  return (
    <section>
      <SectionHeader title={title} number={number} />
      <ProjectCardList />
      <MoreProjects />
    </section>
  );
}
