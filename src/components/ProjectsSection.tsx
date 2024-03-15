import projectsData from "../data/projectsData.json";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const reversedProjects = [...projectsData].reverse();

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 gap-5 px-5 md:grid-cols-2 md:gap-10 md:px-10 lg:grid-cols-3 lg:gap-20 lg:px-20"
      animate={isInView ? "inView" : "initial"}
      variants={cardVariants}
    >
      {reversedProjects.map((project) => (
        <motion.div className="border-2 border-stone-700 bg-stone-500">
          <div>
            <img
              src={project.imageURL}
              alt={project.projectName}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="bg-stone-200 p-5 text-stone-900">
            <p className="text-xl">{project.projectName}</p>
            <p className="text-lg">
              {project.status} {project.dateCompleted}
            </p>
          </div>
          <div className="flex divide-x-2 divide-stone-900 border-t-2 border-stone-900 bg-stone-300 text-center text-lg text-stone-500">
            <a
              href={project.repositoryURL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 p-2 text-orange-600 hover:bg-stone-400 hover:text-stone-100"
            >
              Repository
            </a>
            {project.deploymentURL ? (
              <a
                href={project.deploymentURL}
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
        </motion.div>
      ))}
    </motion.div>
  );
}
