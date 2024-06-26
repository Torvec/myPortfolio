import Container from "../components/ui/Container";
import SectionHeader from "../components/SectionHeader";
import ActionButton from "../components/ui/ActionButton";
import ActionHeader from "../components/ActionHeader";
import {
  type TechStackItemProps,
  type TechStackListProps,
  type InfoContainerProps,
  type ImageContainerProps,
  type ProjectCardProps,
} from "../types/allTypes";
import { projectsData } from "../data/projectsData";
import { ExternalLink, Github, SquareArrowOutUpRight } from "lucide-react";

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
        <div className="flex flex-col gap-4 text-sm text-stone-300 md:flex-row md:justify-center md:gap-8">
          <ActionButton
            variant="outline"
            type="button"
            href={deploymentURL}
          >
            <span className="flex items-center gap-2">
              Deployment
              <ExternalLink size={20} />
            </span>
          </ActionButton>
          <ActionButton
            variant="outline"
            type="button"
            href={repositoryURL}
          >
            <span className="flex items-center gap-2">
              Repository
              <Github size={20} />
            </span>
          </ActionButton>
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
            className="h-[50vh] w-full rounded-lg border border-stone-700 object-cover object-top"
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
          className={`flex flex-col-reverse rounded-lg border border-stone-800 bg-gradient-to-b from-stone-800 to-95% md:w-[calc(100%-64px)] md:py-16 ${colOrderStyles} mb-32`}
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
      <>
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
      </>
    );
  };

  const MoreProjects = () => {
    return (
      <div className="mx-auto flex flex-col justify-center border-b border-stone-900 pb-32">
        <ActionHeader header="Explore my other projects on GitHub and see what I've been working on!" />
        <ActionButton
          variant="primary"
          type="button"
          href="https://github.com/Torvec?tab=repositories"
        >
          <span className="flex items-center gap-2">
            Let's Go! <SquareArrowOutUpRight size={20} />
          </span>
        </ActionButton>
      </div>
    );
  };

  return (
    <Container id="projects">
      <SectionHeader
        section="Projects"
        title="Some Interesting Things I've Created"
      />
      <ProjectCardList />
      <MoreProjects />
    </Container>
  );
}
