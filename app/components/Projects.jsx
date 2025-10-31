"use client";
import { useState } from "react";
import takenote from '../../public/images/takenote.PNG';
import athlend from '../../public/images/athlend.PNG';
import esign from '../../public/images/esign.PNG'
import portfolio from '../../public/images/portfolio.PNG'
import codeArena from '../../public/images/codeArena.PNG'
import productagent from '../../public/images/productagent.JPG'
import Image from "next/image";


const projects = [
  
  {
    title: "Product AI Agent",
    desc: "Analyzes products to give instant market sentiment and competitor insights from real time web data.",
    tech: ["Python", "FastAPI", "LangGraph","Nextjs"],
    site: "https://product-analysis-agent.vercel.app/",
    source: "https://github.com/balwinder18/Product-Analysis-Agent",
    img: productagent,
  },

  {
    title: "CodeArena",
    desc: "A real-time 1v1 competitive coding platform, where users can battle by solving DSA problems in private rooms.",
    tech: ["Next.js", "Javascript", "Node.js","Socket.IO","TailwindCSS","WebSockets"],
    site: "https://code-arena-omega.vercel.app/",
    source: "https://github.com/balwinder18/CodeArena",
    img: codeArena,
  },
  {
    title: "Athlend",
    desc: "A Local Sports Ground Renting website with AI enabled chatbot for user Queries",
    tech: ["Next.js", "Typescript", "Langchain","TailwindCSS", "Next Auth"],
    site: "https://sportle-chi.vercel.app/",
    source: "https://github.com/balwinder18/Sportle",
    img: athlend,
  },

   

  {
    title: "Take Notes",
    desc: "A Chrome Extension for Taking notes while working without switching tabs,your notes remains even when tab is closed,supports download and upload notes option  ",
    tech: ["Next.js", "Typescript", "TailwindCSS"],
    site: "https://drive.google.com/file/d/16BjaC6Rz6k-UbodzcMpgljZw6MAPVpb9/view?usp=drive_link",
    source: "https://github.com/balwinder18/TakeNotes",
    img: takenote,
  },
  {
    title: "Portfolio",
    desc: "Portfolio Website with animations and responsive UI.",
    tech: ["Next.js", "TailwindCSS", "Gsap", "javascript"],
    site: "https://nextjs-portfolio-omega-lac-57.vercel.app/",
    source: "https://github.com/balwinder18/portfolioupdated",
    img: portfolio,
  },

  {
    title: "Digital Sign",
    desc: "Hassle free online Signatures ,supports upload and download of a document",
    tech: ["Next.js", "tailwind css", "Javascript"],
    site: "https://e-signature-ashy.vercel.app/",
    source: "https://github.com/balwinder18/esign",
    img: esign,
  },


];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section className="mt-4">
      <h2 className="text-white text-xl font-bold text-center mb-4">
        Check out my latest work
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {visibleProjects.map((proj, i) => (
          <div
            key={i}
            className="bg-[#111] rounded-xl overflow-hidden shadow-lg border border-[#222]"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <a
                href={proj.site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline text-sm hover:text-white transition"
              >

                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  className="object-cover opacity-60 hover:opacity-80 transition duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    {proj.title}
                  </span>
                </div>
              </a>
            </div>
            <div className="p-4">
              <p className="text-white font-bold">{proj.title}</p>
              <p className="text-sm text-gray-400 mt-1">{proj.desc}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-black text-xs px-2 py-1 rounded-md font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={proj.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline text-sm hover:text-white transition"
                >
                  Website
                </a>
                <a
                  href={proj.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline text-sm hover:text-white transition"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      {projects.length > 3 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#14fca9] font-semibold underline hover:text-white transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
