"use client";
import { useState } from "react";
import Image from "next/image";
import { Link2, Github, ArrowRight } from "lucide-react"; 

import takenote from '../../public/images/takenote.PNG';
import athlend from '../../public/images/athlend.PNG';
import esign from '../../public/images/esign.PNG'
import portfolio from '../../public/images/portfolio.PNG'
import codeArena from '../../public/images/codeArena.PNG'
import productagent from '../../public/images/productagent.JPG'

const projects = [
  {
    title: "Product AI Agent",
    desc: "Analyzes products to give instant market sentiment and competitor insights from real time web data.",
    tech: ["Python", "FastAPI", "LangGraph","Nextjs"],
    tag: "#ai-agent",
    site: "https://product-analysis-agent.vercel.app/",
    source: "https://github.com/balwinder18/Product-Analysis-Agent",
    img: productagent,
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    title: "CodeArena",
    desc: "A real-time 1v1 competitive coding platform, where users can battle by solving DSA problems in private rooms.",
    tech: ["Next.js", "Socket.IO", "Tailwind"],
    tag: "#platform",
    site: "https://code-arena-omega.vercel.app/",
    source: "https://github.com/balwinder18/CodeArena",
    img: codeArena,
    gradient: "from-blue-400 to-cyan-300"
  },
  {
    title: "Athlend",
    desc: "A Local Sports Ground Renting website with AI enabled chatbot for user Queries",
    tech: ["Next.js", "Typescript", "Langchain"],
    tag: "#marketplace",
    site: "https://sportle-chi.vercel.app/",
    source: "https://github.com/balwinder18/Sportle",
    img: athlend,
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    title: "Take Notes",
    desc: "A Chrome Extension for Taking notes while working without switching tabs, your notes remain even when tab is closed.",
    tech: ["React", "Chrome API"],
    tag: "#extension",
    site: "https://drive.google.com/file/d/16BjaC6Rz6k-UbodzcMpgljZw6MAPVpb9/view?usp=drive_link",
    source: "https://github.com/balwinder18/TakeNotes",
    img: takenote,
    gradient: "from-orange-400 to-red-400"
  },
  {
    title: "Portfolio",
    desc: "Portfolio Website with animations and responsive UI.",
    tech: ["Next.js", "GSAP"],
    tag: "#portfolio",
    site: "https://nextjs-portfolio-omega-lac-57.vercel.app/",
    source: "https://github.com/balwinder18/portfolioupdated",
    img: portfolio,
    gradient: "from-pink-500 to-rose-400"
  },
  {
    title: "Digital Sign",
    desc: "Hassle free online Signatures, supports upload and download of a document",
    tech: ["Next.js", "Canvas API"],
    tag: "#utility",
    site: "https://e-signature-ashy.vercel.app/",
    source: "https://github.com/balwinder18/esign",
    img: esign,
    gradient: "from-gray-600 to-gray-400"
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2); 

  return (
    <section className="w-full mt-10 mb-20 transition-colors duration-300">
      
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-7 bg-black dark:bg-white rounded-full transition-colors duration-300"></div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">Projects</h2>
      </div>

       <div className="grid md:grid-cols-2 gap-6">
        {visibleProjects.map((proj, i) => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-[#111] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-[#222] transition-colors duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <a
                href={proj.site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white underline text-sm hover:text-black dark:hover:text-white transition"
              >

                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  className="object-cover opacity-90 dark:opacity-60 hover:opacity-100 dark:hover:opacity-80 transition duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 dark:bg-transparent">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    {proj.title}
                  </span>
                </div>
              </a>
            </div>
            <div className="p-4">
              <p className="text-gray-900 dark:text-white font-bold transition-colors duration-300">{proj.title}</p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-300">{proj.desc}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-black text-xs px-2 py-1 rounded-md font-medium border border-gray-300 dark:border-transparent"
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
                  className="text-gray-900 dark:text-white underline text-sm hover:text-black dark:hover:text-white transition"
                >
                  Website
                </a>
                <a
                  href={proj.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-white underline text-sm hover:text-black dark:hover:text-white transition"
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
            className="text-[#14fca9] font-semibold underline hover:text-green-600 dark:hover:text-white transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
