import UpArrowIcon from "../assets/upArrowIcon.svg?react";
import { motion } from "framer-motion";

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
    {
      id: 5,
      projectName: "My Portfolio",
      imageURL: "https://picsum.photos/800",
      repositoryURL: "https://github.com/Torvec/myPortfolio",
      deploymentURL: "https://edward-vonschondorf.dev/",
      dateCompleted: "N/A",
    },
  ];

  interface ImageContainerProps {
    imageURL: string;
    projectName: string;
    deploymentURL: string;
  }

  function ImageContainer({
    imageURL,
    projectName,
    deploymentURL,
  }: ImageContainerProps) {
    return (
      <motion.div className="relative md:w-1/2">
        <img src={imageURL} alt={projectName} className="w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black bg-opacity-50 text-lg uppercase text-white opacity-0 transition-opacity hover:opacity-100">
          <LinkButton text="View Deployment" href={deploymentURL} />
        </div>
      </motion.div>
    );
  }

  interface TextContainerProps {
    projectName: string;
    dateCompleted: string;
    repositoryURL: string;
  }

  function TextContainer({
    projectName,
    dateCompleted,
    repositoryURL,
  }: TextContainerProps) {
    return (
      <motion.div className="relative flex flex-col justify-end gap-5 bg-stone-950 p-10 md:w-1/2">
        <p className="text-5xl font-bold">{projectName}</p>
        <p className="text-xl uppercase">Completed {dateCompleted}</p>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black bg-opacity-50 text-lg uppercase text-white opacity-0 transition-opacity hover:opacity-100">
          <LinkButton text="View Repository" href={repositoryURL} />
        </div>
      </motion.div>
    );
  }

  interface LinkButtonProps {
    text: string;
    href: string;
  }

  function LinkButton({ text, href }: LinkButtonProps) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-lg border border-stone-200 p-2 transition-all duration-300 ease-in-out hover:border-orange-600 hover:text-orange-600"
      >
        <span className="text-lg uppercase">{text}</span>
        <UpArrowIcon className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-2" />
      </a>
    );
  }

  return (
    <section id="projects" className="min-h-screen">
      <h2 className="grid min-h-screen place-content-center text-center text-5xl font-bold uppercase">
        Featured Projects
      </h2>
      <>
        {featuredProjects.map((project) =>
          project.id % 2 === 0 ? (
            <div key={project.id} className="flex flex-col md:flex-row">
              <ImageContainer
                imageURL={project.imageURL}
                projectName={project.projectName}
                deploymentURL={project.deploymentURL}
              />
              <TextContainer
                projectName={project.projectName}
                dateCompleted={project.dateCompleted}
                repositoryURL={project.repositoryURL}
              />
            </div>
          ) : (
            <div key={project.id} className="flex flex-col-reverse md:flex-row">
              <TextContainer
                projectName={project.projectName}
                dateCompleted={project.dateCompleted}
                repositoryURL={project.repositoryURL}
              />
              <ImageContainer
                imageURL={project.imageURL}
                projectName={project.projectName}
                deploymentURL={project.deploymentURL}
              />
            </div>
          ),
        )}
      </>
      <div className="grid min-h-screen place-content-center">
        <LinkButton
          text="More Projects"
          href="https://github.com/Torvec?tab=repositories"
        />
      </div>
    </section>
  );
}
