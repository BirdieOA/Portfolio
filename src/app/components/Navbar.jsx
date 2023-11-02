"use client";
import React, { useState } from "react";
import Navlink from "./Navlink";
import { BsTextRight, BsXLg } from "react-icons/bs";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navlinks = [
  {
    title: "Proyectos",
    path: "#proyectos",
  },
  {
    title: "Sobre Mi",
    path: "#sobremi",
  },
  {
    title: "Contacto",
    path: "#contacto",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed left-0 top-0 right-0 z-20 bg-[#121212]/100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
           <a href="/"><Image
              src="/images/logo.png"
              className="p-1 cursor-pointer"
              alt="logo de portfolio"
              height={100}
              width={50}
              href="/"
            />
</a>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center py-2 px-3 border rounded border-slate-200 text-slate-200 hover:border-white hover:text-white"
            >
              <BsTextRight className="h-5 w-5 " />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center py-2 px-3 border rounded border-slate-200 text-slate-200 hover:border-white hover:text-white"
            >
              <BsXLg className="h-5 w-5 " />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0">
            {navlinks.map((link, index) => (
              <li key={index} >
                <Navlink href={link.path} title={link.title}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navlinks}/> : null}
    </nav>
  );
};

export default Navbar;
