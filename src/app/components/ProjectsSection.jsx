import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Babushka Landing Page",
    description: "Landing Page with Next Js",
    image: "/projects/p1.png",
    tag: ["all, web"],
  },
  {
    id: 2,
    title: "Calculator",
    description: "Calculator with HTML,CSS Y JS",
    image: "/projects/p2.png",
    tag: ["all, web"],
  },
  {
    id: 3,
    title: "Babushka Landing Page",
    description: "Landing Page with Next Js",
    image: "/projects/p1.png",
    tag: ["all, web"],
  },
  {
    id: 4,
    title: "Babushka Landing Page",
    description: "Landing Page with Next Js",
    image: "/projects/p2.png",
    tag: ["all, web"],
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-2xl font-semibold mb-10">My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
