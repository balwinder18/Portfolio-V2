'use client'

import { useEffect } from "react";
import pushpin from '../../public/images/pushpin.png'
import Image from "next/image";
import me from '../../public/images/me.jpg'
import ThemeToggle from "./ThemeToggle";

export default function Hero (){
  
 return (
<>
 <section
      id="hero"
      className="w-full text-gray-900 dark:text-white flex flex-col items-start justify-start lg:pt-16 xl:pt-16 2xl:pt-16 pt-6 transition-colors duration-300"
    >
      <div className="mb-6">
        <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full transition-colors duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for Work</span>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-full mt-4 gap-4">
        
        <div className="text-left flex-grow">
          <h1 className="font-serif font-bold tracking-tight leading-tight text-gray-900 dark:text-white w-full transition-colors duration-300">
          
          <span className="flex flex-nowrap items-center gap-x-2 sm:gap-x-3 md:gap-x-4 text-[1.7rem] xs:text-3xl sm:text-5xl md:text-6xl w-full">
            
            <span className="whitespace-nowrap">Hi, I'm</span>
            <div className="relative inline-block w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 -rotate-6 transform hover:rotate-0 transition-transform duration-300 ease-out border-2 border-[#14cf93] rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-800 shrink-0">
              <Image
                src={me}
                alt="Balwinder"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="dark:text-[#14cf93] text-emerald-700 whitespace-nowrap">Balwinder</span>
            
          </span>
          </h1>
        </div>
       <div className="flex-shrink-0">
             <ThemeToggle/>
        </div>

      </div>
      
      <div className="mt-2 text-left space-y-1">
        <div className="flex items-center text-sm sm:text-base text-gray-600 dark:text-gray-400 gap-2 transition-colors duration-300">
          <span>
            <Image
              src={pushpin}
              alt="Location Pin"
              className="w-4 h-4 object-contain"
            />
          </span>
          <span>Haryana, India</span>
        </div>

        <div className="mt-2 w-full max-w-3xl"> 
            <p className="text-base  sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed transition-colors duration-300">
              A Full Stack Developer with expertise in building scalable applications using Node.js, Python, and cloud technologies.
            </p>
        </div>
        
      </div>
    </section>
</>

)};
