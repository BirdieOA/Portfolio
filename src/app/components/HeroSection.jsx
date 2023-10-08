'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

  


const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span class='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600'>Hola, soy </span>
            <br/>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Maité',
        800, // wait 1s before replacing "Mice" with "Hamsters"
        'Desarrolladora',
        800,
        'Diseñadora',
        800,
      ]}
      wrapper="span"
      speed={200}
      repeat={Infinity}
    />
            
            </h1>
          <p className="mb-6 text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex,
            voluptates itaque laudantium sapiente obcaecati?
          </p>
          <div className="">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-400 via-indigo-500 to-blue-500 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-blue-500 hover:bg-slate-800 mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 ease-in duration-150 rounded-full px-5 py-2">Download CV</span></button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/bird.svg"
              className="absolute transform -translate-x-1/2 -translate-y-1/4 top-1/2 left-1/2 "
              alt="ilustracion de birdie"
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;