import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FB1F5F] to-transparent rounded-full h-80 w-80 z-0 blur-2xl absolute top-3/4 -left-4 transform "></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Contactame</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem cumque
          provident delectus reprehenderit maxime! Exercitationem culpa enim hic
          vel ex?
        </p>
        <div className="Socials flex flex-row gap-2">
          <Link href="github.com">
            <BsGithub />
          </Link>
          <Link href="linkedin.com">
            <BsLinkedin />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4">
          <label htmlFor="email" className="text-white block text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-[#181818] border-2 border-[#FB1F5F] placeholder-[#9cada9] text-gray-100 
            text-md rounded-lg block w-full py-2.5 px-1"
            required
            placeholder="ejemplo@gmail.com"
          />
            <label htmlFor="asunto" className="text-white block text-lg font-medium">
            Asunto 
          </label>
          <input
            type="text"
            id="asunto"
            className="bg-[#181818] border-2 border-[#FB1F5F] placeholder-[#9cada9] text-gray-100 
            text-md rounded-lg block w-full py-2.5 px-1"
            required
            placeholder="Hola!"
          />
          <label htmlFor="mensaje" className="text-white block text-lg font-medium">Mensaje</label>
          <textarea name="mensaje" className="bg-[#181818] border-2 border-[#FB1F5F] placeholder-[#9cada9] text-gray-100 
            text-md rounded-lg block w-full py-2.5 px-1" id="Mensaje" cols="10" rows="4" placeholder="Deje su mensaje..."></textarea>

            <button type="submit" className="bg-[#FB1F5F] hover:bg-[#fe3e74] text-white font-medium py-2.5 rounded-lg mt-2">
                Enviar
            </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
