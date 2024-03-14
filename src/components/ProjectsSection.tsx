import { motion } from "framer-motion";
import projectsData from "../data/projectsData.json";

const ProjectsList = () => {
  const reversedProjects = [...projectsData].reverse();

  return (
    <section className="grid grid-cols-1 gap-5 px-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
      {reversedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

interface Project {
  id: number;
  imageURL?: string | null;
  title: string;
  dateCompleted?: string | null;
  status?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const { id, imageURL, title, dateCompleted, status } = project;

  return (
    <motion.div
      initial={{}}
      whileInView={{
        transition: { duration: 0.3, ease: "easeInOut", stiffness: 260 },
      }}
      whileHover={{
        x: -8,
        y: -8,
        transition: { duration: 0.3, ease: "easeInOut", stiffness: 260 },
      }}
      className="border-1 flex max-w-full flex-col border-stone-950 bg-stone-200 hover:bg-stone-200"
    >
      <a href={`${id}`}>
        {imageURL ? (
          <img
            src={`/assets/img/${imageURL}`}
            alt={title}
            className="h-96 w-full border-b-2 border-stone-950 object-cover"
          />
        ) : (
          <p className="flex h-96 w-full items-center justify-center border-b-2 border-stone-950 bg-stone-300 font-bold">
            Image Not Available - Work In Progress
          </p>
        )}
        <div className="p-5">
          <h4 className="text-2xl">{title}</h4>
          <p className="text-lg">
            {dateCompleted ? (
              <>
                {status} {dateCompleted}
              </>
            ) : (
              <>Under Development</>
            )}
          </p>
        </div>
      </a>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return <ProjectsList />;
}
