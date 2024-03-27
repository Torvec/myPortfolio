import { motion, MotionStyle } from "framer-motion";

type ProjectsSectionProps = {
  style: MotionStyle;
};

export default function ProjectsSection({ style }: ProjectsSectionProps) {
  const featuredProjects = [
    {
      id: 1,
      projectName: "Loot Vault",
      imageURL: "https://picsum.photos/800",
      repositoryURL: "https://github.com/Torvec/Loot-Vault",
      deploymentURL: "https://torvec.github.io/Loot-Vault/",
      description:
        "A video game deals site for gamers on a budget using third party API's.",
    },
    {
      id: 2,
      projectName: "Task Titan",
      imageURL: "https://picsum.photos/800",
      repositoryURL: "https://github.com/Torvec/Task-Titan",
      deploymentURL: "https://task-titan-bec51c55ebe5.herokuapp.com/",
      description:
        "A task completion and collaboration app for managing projects.",
    },
    {
      id: 3,
      projectName: "Wedloc",
      imageURL: "https://picsum.photos/800",
      repositoryURL: "https://github.com/Torvec/wedloc",
      deploymentURL: "https://wedloc-84c89e3ae29d.herokuapp.com/",
      description:
        "A social media app for wedding photographers to share their work and allow clients to interact with guests.",
    },
    {
      id: 4,
      projectName: "Bootcamp Challenges",
      imageURL: "https://picsum.photos/800",
      repositoryURL: "https://github.com/Torvec/bootcamp-challenges",
      deploymentURL: "https://torvec.github.io/bootcamp-challenges/",
      description:
        "All of the weekly projects from my UC Berkeley Full Stack Web Development Bootcamp",
    },
    {
      id: 5,
      projectName: "My Portfolio",
      imageURL: "https://picsum.photos/800",
      repositoryURL: "https://github.com/Torvec/myPortfolio",
      deploymentURL: "https://edward-vonschondorf.dev/",
      description: "This portfolio.",
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
        <img
          src={imageURL}
          alt={projectName}
          className="min-h-[50vh] w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black bg-opacity-50 text-lg uppercase text-white opacity-0 transition-opacity hover:opacity-100">
          <LinkButton text="View Deployment" href={deploymentURL} />
        </div>
      </motion.div>
    );
  }

  interface TextContainerProps {
    projectName: string;
    description: string;
    repositoryURL: string;
  }

  function TextContainer({
    projectName,
    description,
    repositoryURL,
  }: TextContainerProps) {
    return (
      <motion.div className="relative flex min-h-[50vh] flex-col justify-end gap-2 bg-stone-950 p-10 md:w-1/2">
        <p className="text-5xl font-bold">{projectName}</p>
        <p className="text-xl">{description}</p>
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
        <span className="material-symbols-outlined text-lg transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
          north_east
        </span>
      </a>
    );
  }

  return (
    <motion.section  className="min-h-screen" style={style}>
      <h2 className="grid min-h-screen place-content-center text-center text-5xl font-bold uppercase">
        Featured Projects
      </h2>
      <>
        {featuredProjects.map(
          ({
            id,
            projectName,
            imageURL,
            repositoryURL,
            deploymentURL,
            description,
          }) =>
            id % 2 === 0 ? (
              <div key={id} className="flex flex-col md:flex-row">
                <ImageContainer
                  imageURL={imageURL}
                  projectName={projectName}
                  deploymentURL={deploymentURL}
                />
                <TextContainer
                  projectName={projectName}
                  description={description}
                  repositoryURL={repositoryURL}
                />
              </div>
            ) : (
              <div key={id} className="flex flex-col-reverse md:flex-row">
                <TextContainer
                  projectName={projectName}
                  description={description}
                  repositoryURL={repositoryURL}
                />
                <ImageContainer
                  imageURL={imageURL}
                  projectName={projectName}
                  deploymentURL={deploymentURL}
                />
              </div>
            ),
        )}
      </>
      <div className="grid place-content-center py-96">
        <LinkButton
          text="More Projects"
          href="https://github.com/Torvec?tab=repositories"
        />
      </div>
    </motion.section>
  );
}
