import SectionHeader from "./template/SectionHeader";
import ActionButton from "./template/ActionButton";
import { projectsData } from "../data/projectsData";

export default function ProjectsSection() {
  const ProjectCard = ({
    colOrderStyles,
    translateImg,
    imgURL,
    projectName,
    repositoryURL,
    deploymentURL,
    description,
    techStack,
  }: {
    colOrderStyles: string;
    translateImg: string;
    imgURL: string;
    projectName: string;
    repositoryURL: string;
    deploymentURL: string;
    description: string;
    techStack: string[];
  }) => {
    const TechStackList = ({ list }: { list: string[] }) => {
      return (
        <ul className="flex flex-wrap gap-2">
          {list.map((item, index) => (
            <li
              key={index}
              className="rounded-lg border border-white/10 bg-gradient-to-b from-stone-800 px-4 py-1 text-xs font-light uppercase text-stone-400"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    };

    const ViewButton = ({ text, href }: { text: string; href: string }) => {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <button className="rounded-lg border border-white/50 px-4 py-2">
            {text}
          </button>
        </a>
      );
    };

    const InfoContainer = ({
      projectName,
      description,
      techStack,
      repositoryURL,
      deploymentURL,
    }: {
      projectName: string;
      repositoryURL: string;
      deploymentURL: string;
      description: string;
      techStack: string[];
    }) => {
      return (
        <div className="flex flex-col justify-center gap-8 p-4 md:w-1/3 md:gap-16 md:p-0">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-stone-300 md:text-4xl">
              {projectName}
            </h3>
            <div>
              <p className="mb-4 text-base text-stone-300">{description}</p>
              <TechStackList list={techStack} />
            </div>
          </div>
          <div className="flex justify-between text-sm text-stone-300">
            <ViewButton text="View Repository" href={repositoryURL} />
            <ViewButton text="View Deployment" href={deploymentURL} />
          </div>
        </div>
      );
    };

    const ImageContainer = ({
      translateImg,
      deploymentURL,
      imgURL,
      projectName,
    }: {
      translateImg: string;
      deploymentURL: string;
      imgURL: string;
      projectName: string;
    }) => {
      return (
        <div className={`md:w-2/3 ${translateImg} md:px-0`}>
          <a href={deploymentURL} target="_blank" rel="noopener noreferrer">
            <img
              src={imgURL}
              alt={projectName}
              className="h-[30vh] w-full rounded-lg border-white/30 object-cover object-top md:h-[50vh] md:border"
            />
          </a>
        </div>
      );
    };

    return (
      <div>
        <div
          className={`flex flex-col-reverse gap-8 rounded-lg border border-white/15 bg-gradient-to-b from-stone-800 md:w-[calc(100%-64px)] md:gap-0 md:py-16 ${colOrderStyles}`}
        >
          <InfoContainer
            projectName={projectName}
            description={description}
            techStack={techStack}
            repositoryURL={repositoryURL}
            deploymentURL={deploymentURL}
          />
          <ImageContainer
            translateImg={translateImg}
            deploymentURL={deploymentURL}
            imgURL={imgURL}
            projectName={projectName}
          />
        </div>
      </div>
    );
  };

  const ProjectCardList = () => {
    return (
      <div className="container mx-auto mb-32 flex flex-col gap-32 px-4 md:px-0">
        {projectsData.map(
          ({
            id,
            imgURL,
            projectName,
            repositoryURL,
            deploymentURL,
            description,
            techStack,
          }) => (
            <ProjectCard
              key={id}
              translateImg={
                id % 2 !== 0 ? "md:translate-x-16" : "md:-translate-x-16"
              }
              colOrderStyles={
                id % 2 !== 0
                  ? "md:flex-row md:pl-8 md:bg-gradient-to-tl"
                  : "md:flex-row-reverse md:pr-8 md:bg-gradient-to-tr md:translate-x-16"
              }
              imgURL={imgURL}
              projectName={projectName}
              repositoryURL={repositoryURL}
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
        "Explore my other projects, both in-development and experimental, on my GItHub.",
      text: "Let's Go!",
      href: "https://github.com/Torvec?tab=repositories",
    };

    const { header, text, href } = buttonData;

    return (
      <div className="mx-auto flex flex-col items-center justify-center border-y border-white/25 bg-gradient-to-t from-stone-900 to-10% py-64">
        <h4 className="mb-8 max-w-[30ch] text-balance text-center text-2xl font-medium text-stone-300 md:w-1/2 md:text-4xl">
          {header}
        </h4>
        <ActionButton text={text} icon="north_east" href={href} />
      </div>
    );
  };

  return (
    <section id="projects">
      <SectionHeader section="Projects" title="Featured Full-Stack Projects" />
      <ProjectCardList />
      <MoreProjects />
    </section>
  );
}
