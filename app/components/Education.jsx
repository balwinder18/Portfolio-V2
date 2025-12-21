import Image from "next/image";
import unilogo from '../../public/images/unilogo.PNG'
import { ChevronRight } from "lucide-react"; 

const Education = () => (
  <section id="education" className="w-full mt-10 text-gray-900 dark:text-white transition-colors duration-300">
    
    <div className="flex items-center gap-3 mb-6">
       <div className="w-1.5 h-7 bg-black dark:bg-white rounded-full transition-colors duration-300"></div>
       <h2 className="text-2xl font-bold tracking-tight">Education</h2>
    </div>

    <div className="group">
        <a
            href="https://www.jcboseust.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer w-full"
        >
            <div className="flex items-start p-3 rounded-xl transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-white/5 border border-transparent">
                
                <div className="flex-none">
                    <span className="relative flex overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1c1c1c] w-12 h-12 items-center justify-center transition-colors duration-300">
                        <Image
                            src={unilogo}
                            alt="University Logo"
                            className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                            loading="lazy"
                        />
                    </span>
                </div>

                <div className="flex-grow ml-4 flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                        
                        <div className="flex items-center gap-2">
                            <h3 className="text-gray-900 dark:text-white font-semibold text-base sm:text-lg leading-tight group-hover:text-[#14cf93] transition-colors duration-300">
                                J.C. Bose University of Science and Technology
                            </h3>
                             <ChevronRight size={16} className="text-gray-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </div>

                        <div className="text-left sm:text-right mt-1 sm:mt-0 whitespace-nowrap">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors tabular-nums">
                                2022 - 2026
                            </span>
                        </div>
                    </div>

                    <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mt-1 font-medium transition-colors duration-300">
                        B.Tech in Electronics and Communication Engineering
                    </p>
                    
                </div>
            </div>
        </a>
    </div>
  </section>
);

export default Education;
