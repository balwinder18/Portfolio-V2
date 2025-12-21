"use client";
import C from '../../public/images/C.png'
import react from '../../public/images/react.png'
import next from '../../public/images/Next.png'
import JavaScript from '../../public/images/JavaScript.png'
import TypeScript from '../../public/images/TypeScript.png'
import Node from '../../public/images/Node.png'
import Express from '../../public/images/Express.png'
import Redux from '../../public/images/Redux.png'
import Tailwind from '../../public/images/Tailwind.png'
import shadcn from '../../public/images/shadcn.png'
import NPM from '../../public/images/NPM.png'
import Python from '../../public/images/Python.png'
import MongoDB from '../../public/images/MongoDB.png'
import Java from '../../public/images/Java.png'
import GitHub from '../../public/images/GitHub.png'
import Postman from '../../public/images/Postman.png'
import Vercel from '../../public/images/Vercel.png'
import datastructure from '../../public/images/datastructure.png'
import algorithms from '../../public/images/algorithms.png'
import Redis from '../../public/images/redis.png'
import Langchain from '../../public/images/langchain.png'
import Image from "next/image";
import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react'; 


export const allSkills = [
  { label: "JavaScript", icon: JavaScript },
  { label: "TypeScript", icon: TypeScript },
  { label: "Node.js", icon: Node },
  { label: "React.js", icon: react },
  { label: "Next.js", icon: next },
  { label: "Express.js", icon: Express },
   { label: "Python", icon: Python },
   { label: "PostgreSQL", icon: datastructure },
  { label: "Tailwind", icon: Tailwind },
  { label: "MongoDB", icon: MongoDB },
  { label: "Redis", icon: Redis },
  { label: "ShadCN", icon: shadcn },
  { label: "Java", icon: Java },
 
  { label: "C", icon: C },
  { label: "Redux", icon: Redux },
   
  { label: "GitHub", icon: GitHub },
  { label: "Postman", icon: Postman },
  { label: "Vercel", icon: Vercel },
  { label: "DSA", icon: algorithms },
  { label: "LangChain", icon: Langchain },
  { label: "NPM", icon: NPM },
];

export default function Skills() {
  const [showAll, setShowAll] = useState(false);
  
  const INITIAL_COUNT = 8;
  
  const displayedSkills = showAll ? allSkills : allSkills.slice(0, INITIAL_COUNT);

  return (
    <section className="w-full mt-10 text-gray-900 dark:text-white relative transition-all duration-300">
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-7 bg-black dark:bg-white rounded-full transition-colors duration-300"></div>
        <h2 className="lg:text-2xl text-lg font-bold tracking-tight">Skills</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 transition-all duration-500 ease-in-out">
        {displayedSkills.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-3 py-3 px-4 bg-gray-100 dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group animate-in fade-in zoom-in"
          >
            <div className="w-5 h-5 relative shrink-0">
                <Image
                src={tech.icon}
                alt={tech.label}
                fill
                className="object-contain"
                />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white truncate transition-colors duration-300">
              {tech.label}
            </span>
          </div>
        ))}
      </div>

      {allSkills.length > INITIAL_COUNT && (
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-5 py-2 text-emerald-700 dark:text-[#14cf93] hover:text-[#0eab73] dark:hover:text-[#14cfca9] text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            {showAll ? (
                <>Show Less <ArrowUp size={16} /></>
            ) : (
                <>See more <ArrowDown size={16} /></>
            )}
          </button>
        </div>
      )}

    </section>
  );
}
