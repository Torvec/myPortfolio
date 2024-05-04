import SectionHeader from "../components/SectionHeader";
import ActionButton from "../components/ActionButton";
import ActionHeader from "../components/ActionHeader";
import {
  type TechStackItemProps,
  type TechStackListProps,
  type ViewButtonProps,
  type InfoContainerProps,
  type ImageContainerProps,
  type ProjectCardProps,
} from "../types/allTypes";
import { projectsData, moreProjects } from "../data/projectsData";

export default function ProjectsSection() {
  const TechStackItem = ({ item }: TechStackItemProps) => {
    return (
      <li className="rounded-lg border border-stone-800 bg-gradient-to-b from-stone-800 px-4 py-1 text-xs font-light text-stone-400">
        {item}
      </li>
    );
  };

  const TechStackList = ({ list }: TechStackListProps) => {
    return (
      <ul className="flex flex-wrap gap-2">
        {list.map((list, index) => (
          <TechStackItem key={index} item={list} />
        ))}
      </ul>
    );
  };

  const ViewButton = ({ text, href }: ViewButtonProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full md:inline-block md:w-max"
      >
        <button className="w-full rounded-lg border border-white/50 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-orange-500 hover:text-orange-500 md:hover:scale-110">
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
  }: InfoContainerProps) => {
    return (
      <div className="flex flex-col justify-center gap-16 px-4 py-8 md:w-1/3 md:p-0">
        <div>
          <h3 className="mb-4 text-2xl font-bold text-stone-300 md:text-4xl">
            {projectName}
          </h3>
          <div>
            <p className="mb-4 text-base text-stone-400">{description}</p>
            <TechStackList list={techStack} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 text-sm text-stone-300 md:flex-row md:justify-center md:gap-8">
          <ViewButton text="Repository" href={repositoryURL} />
          <ViewButton text="Deployment" href={deploymentURL} />
        </div>
      </div>
    );
  };

  const ImageContainer = ({
    translateImg,
    translateShadow,
    imgURL,
    projectName,
  }: ImageContainerProps) => {
    return (
      <div className={`md:w-2/3 ${translateImg} relative mb-8 md:mb-0`}>
        <div
          className={`absolute inset-0 z-0 rounded-3xl bg-black blur-lg ${translateShadow} translate-y-8`}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <img
            src={imgURL}
            alt={projectName}
            className="h-[30vh] w-full rounded-lg border border-stone-700 object-cover object-top md:h-[50vh]"
          />
        </div>
      </div>
    );
  };

  const ProjectCard = ({
    colOrderStyles,
    translateImg,
    translateShadow,
    imgURL,
    projectName,
    repositoryURL,
    deploymentURL,
    description,
    techStack,
  }: ProjectCardProps) => {
    return (
      <div>
        <div
          className={`flex flex-col-reverse rounded-lg border border-stone-800 bg-gradient-to-b from-stone-800 to-95% md:w-[calc(100%-64px)] md:py-16 ${colOrderStyles}`}
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
            translateShadow={translateShadow}
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
              translateShadow={
                id % 2 !== 0 ? "md:-translate-x-8" : "md:translate-x-8"
              }
              colOrderStyles={
                id % 2 !== 0
                  ? "md:flex-row md:pl-8 md:bg-gradient-to-l"
                  : "md:flex-row-reverse md:pr-8 md:bg-gradient-to-r md:translate-x-16"
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
      <div className="mx-auto flex flex-col items-center justify-center border-b border-stone-900 py-32">
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
