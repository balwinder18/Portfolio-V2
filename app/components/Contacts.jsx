import { useRouter } from 'next/navigation'
import React from 'react'

const Contacts = () => {
    const router = useRouter();
    
    return (
      <div className="w-full mt-4 rounded-xl text-lg flex flex-col justify-center items-center">
            
            <div className="mx-5 text-center mt-5 flex flex-col justify-center items-center">
                <p className="text-xs sm:text-base text-emerald-700 dark:text-[#14cf93] font-bold tracking-wide">
                    YOU CAN ALWAYS CONNECT WITH ME TO DISCUSS ABOUT TECH, ENGINEERING AND DEVELOPMENT!
                </p>
            </div>

            <div className="my-5 flex flex-col md:flex-row w-full justify-center items-center gap-4">
                
                <div className="bg-gray-100 dark:bg-[#faf5f0] text-gray-900 dark:text-[#1e1b17] text-xs sm:text-sm flex flex-row p-3 justify-center items-center font-bold rounded-lg transition-all ease-in hover:scale-105 shadow-md w-[80%] sm:w-auto min-w-[200px] cursor-default">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone mr-2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <p className="whitespace-nowrap">+91-9318326662</p>
                </div>
           <button 
                    type="button" 
                    onClick={() => router.push('mailto:balwindersb71@gmail.com')}
                    className="bg-gray-100 dark:bg-[#faf5f0] text-gray-900 dark:text-[#1e1b17] text-xs sm:text-sm flex flex-row justify-center items-center p-3 rounded-lg font-bold transition-all ease-in hover:scale-105 shadow-md w-[80%] sm:w-auto min-w-[200px]"
                >
                    <div className="flex flex-row justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-2">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <p>balwindersb71@gmail.com</p>
                    </div>
                </button>

            </div>

            <div className="text-emerald-700 dark:text-[#14cf93] mx-5 text-center my-5 flex flex-col justify-center items-center">
                <p className="text-xs sm:text-base font-medium tracking-wide">
                    FEEL FREE TO REACH OUT AND COLLABORATE USING THESE DETAILS OR BY THE SOCIAL LINKS ATTACHED
                </p>
            </div>
      </div>
  )
}

export default Contacts
