"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div 
        initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.2}}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB1F5F] to-[#982460]">
              Hola, soy{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Maité",
                800, // wait 1s before replacing "Mice" with "Hamsters"
                "Desarrolladora Web",
                800,
                "Diseñadora",
                800,
              ]}
              wrapper="span"
              speed={200}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-base sm:text-lg lg:text-xl">
          Me entusiasma tener la oportunidad de colaborar en proyectos de desarrollo web para brindar experiencias digitales intuitivas y accesibles para todos los usuarios, ofreciendo diseños atractivos y funcionales.
          </p>
          <div className="">
            <a href="#contacto">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#FB1F5F] via-[#982460] to-[#401D50] text-white">
              Contactame
            </button></a>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#FB1F5F]  via-[#982460] to-[#401D50] hover:bg-slate-800 mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 ease-in duration-150 rounded-full px-5 py-2">
                Descargar CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div 
        initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.2}} className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/bird.svg"
              className="absolute transform -translate-x-1/2 -translate-y-1/4 top-1/2 left-1/2 "
              alt="ilustracion de birdie"
              height={300}
              width={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
