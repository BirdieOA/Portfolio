"use client";
import Link from "next/link";
import React from "react";
import { BsFillEyeFill, BsCodeSlash } from "react-icons/bs";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group mt-10"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-3 relative border border-[#adb7be] rounded-full hover:border-white group/link"
          >
            <BsCodeSlash className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#adb7be]  cursor-pointer group-hover/link:text-white " />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 relative border border-[#adb7be] rounded-full hover:border-white group/link"
          >
            <BsFillEyeFill className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#adb7be]  cursor-pointer group-hover/link:text-white " />
          </Link>
        </div>
        </div>
      <div className="text-white rounded-b-xl py-6 px-4 bg-[#181818]">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#adb7be]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
