"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
        <li>NEXT JS</li>
        <li>TAILWINDCSS</li>
        <li>NODE.JS</li>
        <li>ASTRO</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>FreeCodeCamp</li>
        <li>Youtube</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>FreeCodeCamp</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white py-16" id="sobremi">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/c.jpg"
          alt="Ilustracion de escritorio"
          width={550}
          height={550}
        />
        <div>
          <div className="flex flex-col text-left mt-4 md:mt-0 h-full">
            <h2 className="text-4xl font-bold text-white mb-4">Sobre Mi</h2>
            <p className="text-base lg:text-lg ">
              Soy una desarrolladora autodidacta con un enfoque equilibrado
              entre el diseño y la programación. Aunque carezco de una formación
              formal, invierto mi tiempo y esfuerzo en aprender y aplicar
              habilidades de desarrollo web por mi cuenta. Mi interés se
              extiende al diseño y la ilustración, lo que me permite crear
              experiencias digitales atractivas y funcionales. Me mantengo
              actualizada con las últimas tecnologías y aspiro a convertirme en
              una desarrolladora Full Stack para abordar proyectos de manera
              integral, desde el diseño hasta la implementación y gestión de
              bases de datos.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Habilidades
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Educación
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certificaciones
              </TabButton>
            </div>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
