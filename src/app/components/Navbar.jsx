'use client'
import React from "react";
import Link from "next/link";
import Navlink from "./Navlink";

const navlinks = [
    {
        title: "About",
        path: '#about', 
    },
    {
        title: "Projects",
        path: '#projects',
    },
    {
        title: "Contact",
        path: '#contact',
    },
]

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link className="text-5xl text-white font-semibold" href={'/'}>LOGO</Link>
        <div className="menu block md:w-auto  "id='navbar'>
            <ul>
                {
                    navlinks.map((link, index) => (
                        <li key={index}>
                            <Navlink href={link.path} title={link.title} />
                        </li>
                    ))
                }
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
