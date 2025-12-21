import Link from "next/link";
import { FileText, ArrowUpRight } from "lucide-react"; 

export default function Resume() {
  return (
    <section className="w-full mt-12 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="w-full bg-gray-100 dark:bg-transparent border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
        
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
             <span>Check out my <span className="text-[#14cf93]">Resume</span></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 max-w-md transition-colors duration-300">
            Grab a copy to see my detailed work history and skills.
          </p>
        </div>

        <Link
          href="https://drive.google.com/drive/folders/1DMXYMAOIziWTFKtmkWmY6CKqj4bigLHU?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-[#14cf93] hover:bg-[#11b580] text-black font-bold text-sm sm:text-base px-6 py-3 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all transform hover:-translate-y-0.5"
        >
          View Resume
          <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
