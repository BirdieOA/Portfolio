"use client"
import React, {useState} from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject : e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send"

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options);
    const resData = await response.json();
  
  

    if (response.status === 200 ) {
      console.log('Mensaje enviado')
      setEmailSubmitted(true);  
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contacto">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FB1F5F]/70 to-transparent rounded-full h-80 w-80 z-0 blur-2xl absolute top-1/4 -left-4 transform -translate-x-1/2 -traslate-y-1/2 hidden sm:block"></div>
      <div className="z-10">
        
        <h5 className="text-xl font-bold text-white my-2">¡Hablemos!</h5>
        <p className="text-white mb-4 max-w-md">
        Convirtamos tus ideas en una experiencia digital efectiva y funcional. Tanto si se trata de un rediseño o de una nueva creación, estoy lista para abordar el desafío.  Si tenés alguna propuesta en mente, no dudes en contactarme.
        </p>
        <div className="Socials flex flex-row gap-2">
          <Link href="https://github.com/BirdieOA" target="_blank">
            <BsGithub size={30} className="hover:text-slate-200"/>
          </Link>
          <Link href="https://www.linkedin.com/in/mait%C3%A9-de-le%C3%B3n-57914a194/?locale=es_ES" target="_blank">
            <BsLinkedin  size={30} className="hover:text-slate-200"/>
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (<p className="text-green-500 text-sm mt-2">Envio exitoso</p>) : ( 
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-white block text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-[#181818] border-2 border-[#FB1F5F] placeholder-[#9cada9] text-gray-100 
            text-md rounded-lg block w-full py-2.5 px-1"
            required
            placeholder="ejemplo@gmail.com"
          />
            <label htmlFor="subject" className="text-white block text-lg font-medium">
            Asunto 
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="bg-[#181818] border-2 border-[#FB1F5F] placeholder-[#9cada9] text-gray-100 
            text-md rounded-lg block w-full py-2.5 px-1"
            required
            placeholder="Hola!"
          />
          <label htmlFor="message" className="text-white block text-lg font-medium">Mensaje</label>
          <textarea name="message"  className="bg-[#181818] border-2 border-[#FB1F5F] placeholder-[#9cada9] text-gray-100 
            text-md rounded-lg block w-full py-2.5 px-1" id="message" cols="10" rows="4" placeholder="Deje su mensaje..."></textarea>

            <button type="submit" className="bg-[#FB1F5F] hover:bg-[#fe3e74] text-white font-medium py-2.5 rounded-lg mt-2">
                Enviar
            </button>
        </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
