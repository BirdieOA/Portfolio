"use client"
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 0,
    title: "Babushka Landing Page",
    description: "Landing Page with Next Js",
    image: "/images/c.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Calculator",
    description: "Calculator with HTML,CSS Y JS",
    image: "/projects/p2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Babushka Landing Page",
    description: "Landing Page with Next Js",
    image: "/projects/p1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Babushka Landing Page",
    description: "Landing Page with Next Js",
    image: "/projects/p2.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Babushka Landing Page",
    description: "Landing Page with Next Js",
    image: "/images/c.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All")
  const handleChangeTag = (newTag) => {
    setTag(newTag);
  }

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag));
  

  return (
    <>
      <h2 className="text-center text-4xl font-bold mb-8 md:mb-12 mt-56">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag onClick={handleChangeTag} name='All' isSelected={tag === "All"}/>
      <ProjectTag onClick={handleChangeTag} name='Web' isSelected={tag === "Web"}/>
      <ProjectTag onClick={handleChangeTag} name='Mobile' isSelected={tag === "Mobile"}/>
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </>
  );
};

export default ProjectsSection;
