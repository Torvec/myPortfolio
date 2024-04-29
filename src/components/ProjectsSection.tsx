import SectionHeader from "./template/SectionHeader";
import ActionButton from "./template/ActionButton";
import ActionHeader from "./template/ActionHeader";
import { projectsData, moreProjects } from "../data/projectsData";

export default function ProjectsSection() {
  const TechStackItem = ({ item }: { item: string }) => {
    return (
      <li className="rounded-lg border border-white/10 bg-gradient-to-b from-stone-800 px-4 py-1 text-xs font-light uppercase text-stone-400">
        {item}
      </li>
    );
  };

  const TechStackList = ({ list }: { list: string[] }) => {
    return (
      <ul className="flex flex-wrap gap-2">
        {list.map((list, index) => (
          <TechStackItem key={index} item={list} />
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
    description: string;
    techStack: string[];
    repositoryURL: string;
    deploymentURL: string;
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
    imgURL,
    projectName,
  }: {
    translateImg: string;
    imgURL: string;
    projectName: string;
  }) => {
    return (
      <div
        className={`md:w-2/3 ${translateImg} overflow-hidden rounded-lg border border-white/10 bg-stone-800 shadow-2xl`}
      >
        <header className="flex gap-2 border-b border-white/50 p-4">
          <div className="size-3 rounded-full bg-stone-700" />
          <div className="size-3 rounded-full bg-stone-700" />
          <div className="size-3 rounded-full bg-stone-700" />
        </header>
        <main className="relative">
          {/* <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50" /> */}
          <img
            src={imgURL}
            alt={projectName}
            className="h-[30vh] w-full object-cover object-top md:h-[50vh]"
          />
        </main>
        <footer className="border-top border-white/50 p-4"></footer>
      </div>
    );
  };

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
    const { header, text, href } = moreProjects;

    return (
      <div className="mx-auto flex flex-col items-center justify-center border-b border-white/25 bg-gradient-to-t from-stone-900 to-10% pb-32">
        <ActionHeader header={header} />
        <ActionButton text={text} icon="north_east" href={href} />
      </div>
    );
  };

  return (
    <section id="projects">
      <SectionHeader
        section="Projects"
        title="Some Interesting Things I've Created"
      />
      <ProjectCardList />
      <MoreProjects />
    </section>
  );
}
