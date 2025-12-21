'use client'

import Image from 'next/image';
import banao from '../../public/images/banao.PNG'
import { useState } from 'react';

function Experience() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="work" className="flex mt-4 flex-col gap-y-2 text-gray-900 dark:text-white w-full transition-colors duration-300">
      
      <div className="flex items-center gap-3 transform -translate-y-1.5 opacity-100 blur-0">
        <div className="w-1.5 h-7 bg-black dark:bg-white rounded-full transition-colors duration-300"></div>
        <h2 className="lg:text-2xl text-lg font-bold tracking-tight">Work Experience</h2>
      </div>

      <div className="group relative">
        <button
            onClick={() => setExpanded(!expanded)}
            className="w-full text-left focus:outline-none block"
        >
            <div className="flex items-start p-2 rounded-xl transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-white/5 border border-transparent">
            
            <div className="flex-none">
                <span className="relative flex overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1c1c1c] w-8 h-8 lg:w-12 lg:h-12 items-center justify-center transition-colors duration-300">
                <Image
                    src={banao}
                    alt="Banao Technologies"
                    className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                />
                </span>
            </div>

            <div className="flex-grow ml-4 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                    
                    <div>
                        <h3 className="text-gray-900 dark:text-white font-semibold text-sm lg:text-lg flex items-center gap-2 transition-colors duration-300">
                            Banao Technologies
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`w-4 h-4 text-gray-500 transition-transform duration-300 
                                ${expanded ? '-rotate-90 text-[#14cf93]' : 'rotate-90 sm:rotate-0 group-hover:translate-x-1'}`}
                            >
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors duration-300">Software Developer Intern</p>
                    </div>

                    <div className="text-left sm:text-right mt-1 sm:mt-0">
                        <span className="text-sm font-medium text-emerald-700 dark:text-[#14cf93] tabular-nums">
                            Jan 2025 - June 2025
                        </span>
                    </div>
                </div>

                <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        expanded ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                    <div className="overflow-hidden">
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-l border-gray-200 dark:border-gray-800 pl-4 ml-1 transition-colors duration-300">
                            <p>• Collaborated with UX designers to implement responsive components, enhancing mobile usability.</p>
                            <p>• Integrated RESTful APIs seamlessly, ensuring smooth data flow and efficient state management.</p>
                            <p>• Developed dynamic UIs using Next.js, improving page load performance by 30% through SSR/ISR optimizations.</p>
                            <p>• Reduced API response time by 20% by optimizing backend queries and caching strategies.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </button>
      </div>

    </section>
  )
};

export default Experience;
