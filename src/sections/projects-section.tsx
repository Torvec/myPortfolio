import Container from "../components/ui/container";
import SectionHeader from "../components/ui/section-header";
import ActionButton from "../components/ui/action-button";
import ActionHeader from "../components/ui/action-header";
import { projectsData } from "../data/projects-data";
import { ExternalLink, Github, SquareArrowOutUpRight } from "lucide-react";

type TechStackItemProps = {
  item: string;
};

type TechStackListProps = {
  list: string[];
};

type InfoContainerProps = {
  projectName: string;
  description: string;
  techStack: string[];
  repositoryURL: string;
  deploymentURL: string;
};

type ImageContainerProps = {
  translateImg: string;
  translateShadow: string;
  imgURL: string;
  projectName: string;
};

type ProjectCardProps = {
  columnOrderStyles: string;
  translateImg: string;
  translateShadow: string;
  imgURL: string;
  projectName: string;
  repositoryURL: string;
  deploymentURL: string;
  description: string;
  techStack: string[];
};

export default function ProjectsSection() {
  return (
    <Container id="projects">
      <SectionHeader
        section="Projects"
        title="Some Interesting Projects I've Made"
      />
      <ProjectCardList />
      <MoreProjects />
    </Container>
  );
}

const ProjectCardList = () => {
  return (
    <>
      {projectsData
        .slice()
        .reverse()
        .map(
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
                id % 2 !== 0 ? "lg:translate-x-16" : "lg:-translate-x-16"
              }
              translateShadow={
                id % 2 !== 0 ? "lg:-translate-x-8" : "lg:translate-x-8"
              }
              columnOrderStyles={
                id % 2 !== 0
                  ? "lg:flex-row lg:pl-8 lg:bg-gradient-to-tl"
                  : "lg:flex-row-reverse lg:pr-8 lg:bg-gradient-to-tr lg:translate-x-16"
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

const ProjectCard = ({
  columnOrderStyles,
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
        className={`flex flex-col-reverse rounded-lg border border-stone-800 from-stone-950 to-stone-800 lg:w-[calc(100%-64px)] lg:py-16 ${columnOrderStyles} mb-32`}
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

const InfoContainer = ({
  projectName,
  description,
  techStack,
  repositoryURL,
  deploymentURL,
}: InfoContainerProps) => {
  return (
    <div className="flex flex-col justify-center gap-16 px-4 py-8 lg:w-1/3 lg:p-0">
      <div>
        <h3 className="mb-4 text-2xl font-bold text-stone-200 md:text-4xl">
          {projectName}
        </h3>
        <div className="text-stone-400">
          <p className="mb-4 text-base">{description}</p>
          <TechStackList list={techStack} />
        </div>
      </div>
      <div className="flex flex-col gap-4 text-sm lg:flex-row lg:justify-center lg:gap-8">
        <ActionButton variant="outline" type="button" href={deploymentURL}>
          <span className="flex items-center gap-2">
            Deployment
            <ExternalLink size={20} />
          </span>
        </ActionButton>
        <ActionButton variant="outline" type="button" href={repositoryURL}>
          <span className="flex items-center gap-2">
            Repository
            <Github size={20} />
          </span>
        </ActionButton>
      </div>
    </div>
  );
};

const TechStackItem = ({ item }: TechStackItemProps) => {
  return (
    <li className="rounded-lg border border-stone-800 bg-gradient-to-b from-stone-950 px-4 py-1 text-xs font-light">
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

const ImageContainer = ({
  translateImg,
  translateShadow,
  imgURL,
  projectName,
}: ImageContainerProps) => {
  return (
    <div className={`lg:w-2/3 ${translateImg} relative mb-8 lg:mb-0`}>
      <div
        className={`absolute inset-0 z-0 max-h-96 min-h-96 rounded-3xl bg-black blur-lg md:max-h-[768px] ${translateShadow} translate-y-8`}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <img
          src={imgURL}
          alt={projectName}
          className="aspect-square h-auto max-h-96 min-h-96 w-full rounded-lg border border-stone-800 object-cover object-top md:aspect-auto md:max-h-[768px]"
        />
      </div>
    </div>
  );
};

const MoreProjects = () => {
  return (
    <div className="mx-auto flex flex-col justify-center border-b border-stone-800 pb-32">
      <ActionHeader>Check out my other projects on GitHub!</ActionHeader>
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
