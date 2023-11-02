"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 0,
    title: "Babushka Landing Page",
    description: "Landing Page creada con Next Js",
    image: "/projects/02.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BirdieOA/BabushkaPage",
    previewUrl: "https://babushka.conceptohexagono.com/",
  },
  {
    id: 2,
    title: "Calculadora",
    description: "Calculadora creada con HTML,CSS Y JS",
    image: "/projects/04.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BirdieOA/Calculadora",
    previewUrl: "https://calculatorbirdie.netlify.app/",
  },
  {
    id: 3,
    title: "Concepto Hexágono",
    description: "Sitio web dinámico creado con React",
    image: "/projects/01.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BirdieOA/Primer-Hexagono", 
    previewUrl: "http://conceptohexagono.com",
  },
  {
    id: 4,
    title: "El Método",
    description: "Sitio web dinámico creado con React",
    image: "/projects/03.png",
    tag: ["All", "Web",],
    gitUrl: "/",
    previewUrl: "https://elmetodoadulma.com/",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleChangeTag = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="proyectos" className="mt-56">
      <h2 className="text-center text-4xl font-bold mb-8 md:mb-12 ">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleChangeTag}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleChangeTag}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleChangeTag}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
