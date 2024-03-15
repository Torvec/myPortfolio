import projectsData from "../data/projectsData.json";

const ProjectsList = () => {
  const reversedProjects = [...projectsData].reverse();

  return (
    <div className="grid grid-cols-1 gap-5 px-5 md:grid-cols-2 md:gap-10 md:px-10 lg:grid-cols-3 lg:gap-20 lg:px-20">
      {reversedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

interface Project {
  id: number;
  projectName: string;
  imageURL?: string;
  repositoryURL?: string;
  deploymentURL?: string | null;
  status?: string;
  dateCompleted?: string | null;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const {
    projectName,
    imageURL,
    repositoryURL,
    deploymentURL,
    status,
    dateCompleted,
  } = project;

  return (
    <div className="border-2 border-stone-700 bg-stone-500">
      {/* TODO: Image Area  */}
      <div>
        <img
          src={imageURL}
          alt={projectName}
          className="h-full w-full object-contain"
        />
      </div>
      {/* TODO: Name, Status, Date Area */}
      <div className="bg-stone-200 p-5 text-stone-900">
        <p className="text-xl">{projectName}</p>
        <p className="text-lg">
          {status} {dateCompleted}
        </p>
      </div>
      <div className="flex divide-x-2 divide-stone-900 border-t-2 border-stone-900 bg-stone-300 text-center text-lg text-stone-500">
        <a
          href={repositoryURL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 p-2 text-orange-600 hover:bg-stone-400 hover:text-stone-100"
        >
          Repository
        </a>
        {deploymentURL ? (
          <a
            href={deploymentURL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 p-2 text-orange-600 hover:bg-stone-400 hover:text-stone-100"
          >
            Deployment
          </a>
        ) : (
          <span className="w-1/2 p-2">Deployment</span>
        )}
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  return <ProjectsList />;
}
