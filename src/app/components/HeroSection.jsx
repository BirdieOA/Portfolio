import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="grid-cols-7 place-self-center">
          <h1 className="mb-4 text-6xl font-extrabold">Hello im Birdie</h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex,
            voluptates itaque laudantium sapiente obcaecati?
          </p>
          <div className="">
            <button className="px-6 py-3 rounded-full mr-4 bg-rose-300">
              Hire me
            </button>
            <button className="px-6 py-3 rounded-full">Download CV</button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full bg-[#181818] w-[300px] h-[100px] lg:width-[400px] lg:h-[400px] relative">
            <Image
              src="/images/d.svg"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              alt="ilustracion de birdie"
              height={100}
              width={300}
            ></Image>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
