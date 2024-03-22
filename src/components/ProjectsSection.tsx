import UpArrowIcon from "../assets/upArrowIcon.svg?react";

export default function ProjectsSection() {
  const featuredProjects = [
    {
      id: 1,
      projectName: "Loot Vault",
      imageURL: "https://picsum.photos/800",
      repositoryURL: "https://github.com/Torvec/Loot-Vault",
      deploymentURL: "https://torvec.github.io/Loot-Vault/",
      dateCompleted: "June 2023",
    },
    {
      id: 2,
      projectName: "Task Titan",
      imageURL: "https://picsum.photos/800",
      repositoryURL: "https://github.com/Torvec/Task-Titan",
      deploymentURL: "https://task-titan-bec51c55ebe5.herokuapp.com/",
      dateCompleted: "August 2023",
    },
    {
      id: 3,
      projectName: "Wedloc",
      imageURL: "https://picsum.photos/800",
      repositoryURL: "https://github.com/Torvec/wedloc",
      deploymentURL: "https://wedloc-84c89e3ae29d.herokuapp.com/",
      dateCompleted: "October 2023",
    },
    {
      id: 4,
      projectName: "Bootcamp Challenges",
      imageURL: "https://picsum.photos/800",
      repositoryURL: "https://github.com/Torvec/bootcamp-challenges",
      deploymentURL: "https://torvec.github.io/bootcamp-challenges/",
      dateCompleted: "October 2023",
    },
  ];

  interface ImageContainerProps {
    imageURL: string;
    projectName: string;
    repositoryURL: string;
    deploymentURL: string;
  }

  function ImageContainer({
    imageURL,
    projectName,
    repositoryURL,
    deploymentURL,
  }: ImageContainerProps) {
    return (
      <div className="relative w-1/2">
        <img src={imageURL} alt={projectName} className="w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black bg-opacity-50 text-lg uppercase text-white opacity-0 transition-opacity hover:opacity-100">
          <a
            href={repositoryURL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border p-2"
          >
            View Repository
          </a>
          <a
            href={deploymentURL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border p-2"
          >
            View Deployment
          </a>
        </div>
      </div>
    );
  }

  interface TextContainerProps {
    projectName: string;
    dateCompleted: string;
  }

  function TextContainer({ projectName, dateCompleted }: TextContainerProps) {
    return (
      <div className="flex w-1/2 flex-col justify-end gap-5 bg-stone-950 p-5">
        <p className="text-5xl font-bold">{projectName}</p>
        <p className="text-xl uppercase">Completed {dateCompleted}</p>
      </div>
    );
  }

  return (
    <section id="projects" className="min-h-screen">
      <h2 className="py-96 text-center text-5xl font-bold uppercase">
        Featured Projects
      </h2>
      <div>
        {featuredProjects.map((project) => (
          <>
            {project.id % 2 === 0 ? (
              <div className="flex">
                <ImageContainer
                  imageURL={project.imageURL}
                  projectName={project.projectName}
                  repositoryURL={project.repositoryURL}
                  deploymentURL={project.deploymentURL}
                />
                <TextContainer
                  projectName={project.projectName}
                  dateCompleted={project.dateCompleted}
                />
              </div>
            ) : (
              <div className="flex">
                <TextContainer
                  projectName={project.projectName}
                  dateCompleted={project.dateCompleted}
                />
                <ImageContainer
                  imageURL={project.imageURL}
                  projectName={project.projectName}
                  repositoryURL={project.repositoryURL}
                  deploymentURL={project.deploymentURL}
                />
              </div>
            )}
          </>
        ))}
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <a
          href="https://github.com/Torvec?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-lg border border-stone-200 p-2 transition-all duration-300 ease-in-out hover:border-orange-600 hover:text-orange-600"
        >
          <span className="text-lg uppercase">More Projects</span>
          <UpArrowIcon className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-2" />
        </a>
      </div>
    </section>
  );
}
