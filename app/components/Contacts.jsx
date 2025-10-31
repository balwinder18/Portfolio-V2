import { useRouter } from 'next/navigation'
import React from 'react'

const Contacts = () => {
    const router = useRouter();
  return (
     <div className="mt-0 w-full rounded-xl text-white text-lg flex flex-col justify-center items-center sm:mt-0    sm:rounded-xl  sm:text-white sm:text-lg sm:flex sm:flex-col sm:justify-center sm:items-center   md:mt-14    md:rounded-xl  md:text-white md:text-lg md:flex md:flex-col md:justify-center md:items-center   lg:mt-14    lg:rounded-xl  lg:text-white lg:text-lg lg:flex lg:flex-col lg:justify-center lg:items-center   xl:mt-14    xl:rounded-xl  xl:text-white xl:text-lg xl:flex xl:flex-col xl:justify-center xl:items-center   2xl:mt-14   2 2xl:rounded-xl  2xl:text-white 2xl:text-lg 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
            <div className=" mx-5 text-center mt-5 flex flex-col justify-center items-center sm:mt-5 sm:flex sm:flex-col sm:justify-center sm:items-center   md:mt-5 md:flex md:flex-col md:justify-center md:items-center    lg:mt-5 lg:flex lg:flex-col lg:justify-center lg:items-center    xl:mt-5 xl:flex xl:flex-col xl:justify-center xl:items-center    2xl:mt-5 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
                <p className="text-xs sm:text-base text-[#14fca9]">YOU CAN ALWAYS CONNECT WITH ME TO DISCUSS ABOUT TECH, ENGINEERING AND DEVELOPMENT!</p>
            </div>
            <div className="my-5 flex flex-col w-full justify-center items-center sm:my-5 sm:flex sm:flex-col sm:w-full sm:justify-center sm:items-center md:my-5 md:flex md:flex-row md:w-full md:justify-center md:items-center   lg:my-5 lg:flex lg:flex-row lg:w-full lg:justify-center lg:items-center   xl:my-5 xl:flex xl:flex-row xl:w-full xl:justify-center xl:items-center    2xl:my-5 2xl:flex 2xl:flex-row 2xl:w-full 2xl:justify-center 2xl:items-center ">
                <div className=" bg-[#faf5f0] text-[#1e1b17] text-xs flex flex-row my-3 p-2 justify-center items-center font-bold w-[60%] rounded-md transition-all ease-in hover:scale-105 sm:bg-[#faf5f0] sm:text-[#1e1b17] sm:text-sm sm:flex sm:flex-row sm:mr-0 sm:p-2 sm:justify-center sm:items-center sm:font-bold sm:w-[40%] sm:rounded-md sm:transition-all sm:ease-in sm:hover:scale-105 md:bg-[#faf5f0] md:text-[#1e1b17] md:text-sm md:flex md:flex-row md:mr-3 md:p-2 md:justify-center md:items-center md:font-bold md:w-[35%] md:rounded-md md:transition-all md:ease-in md:hover:scale-105      lg:bg-[#faf5f0] lg:text-[#1e1b17] lg:text-sm lg:flex lg:flex-row lg:mr-3 lg:p-2 lg:justify-center lg:items-center lg:font-bold lg:w-[30%] lg:rounded-lg lg:transition-all lg:ease-in lg:hover:scale-105      xl:bg-[#faf5f0] xl:text-[#1e1b17] xl:text-sm xl:flex xl:flex-row xl:mr-3 xl:p-2 xl:justify-center xl:items-center xl:font-bold xl:rounded-lg xl:transition-all xl:ease-in xl:hover:scale-105      2xl:bg-[#faf5f0] 2xl:text-[#1e1b17] 2xl:text-sm 2xl:flex 2xl:flex-row 2xl:mr-3 2xl:p-3 2xl:justify-center 2xl:items-center 2xl:font-bold 2xl:rounded-md 2xl:transition-all 2xl:ease-in 2xl:hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg><p className="whitespace-nowrap mx-0 sm:mx-1 md:mx-0 lg:mx-3 xl:mx-3 2xl:mx-3">+91-9318326662</p>
                </div>
                <button type="button" onClick={() => router.push('mailto:balwindersb71@gmail.com')}>
                <div className="bg-[#faf5f0] text-[#1e1b17] text-xs flex flex-row justify-center items-center p-2 rounded-md font-bold transition-all ease-in hover:scale-105      sm:bg-[#faf5f0] sm:text-[#1e1b17] sm:text-sm sm:flex sm:flex-row sm:justify-center sm:items-center sm:ml-0 sm:p-2 sm:rounded-md sm:font-bold sm:transition-all sm:ease-in sm:hover:scale-105      md:bg-[#faf5f0] md:text-[#1e1b17] md:text-sm md:flex md:flex-row md:justify-center md:items-center md:ml-3 md:p-2 md:rounded-md md:font-bold md:transition-all md:ease-in md:hover:scale-105      lg:bg-[#faf5f0] lg:text-[#1e1b17] lg:text-sm lg:flex lg:flex-row lg:justify-center lg:items-center lg:ml-3 lg:p-2 lg:rounded-lg lg:font-bold lg:transition-all lg:ease-in lg:hover:scale-105      xl:bg-[#faf5f0] xl:text-[#1e1b17] xl:text-sm xl:flex xl:flex-row xl:justify-center xl:items-center xl:ml-3 xl:p-2 xl:rounded-lg xl:font-bold xl:transition-all xl:ease-in xl:hover:scale-105      2xl:bg-[#faf5f0] 2xl:text-[#1e1b17] 2xl:text-sm 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center 2xl:ml-3 2xl:p-3 2xl:rounded-md 2xl:font-bold 2xl:transition-all 2xl:ease-in 2xl:hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" mx-3 lucide lucide-mail">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <p className="mx-0 sm:mx-1 md:mx-1 lg:mx-3 xl:mx-3 2xl:mx-3">
                        
                            balwindersb71@gmail.com 
                        
                    </p></div>
                    </button>
            </div><div className="text-[#14fca9]   mx-5 text-center   my-5 flex flex-col justify-center items-center   sm:my-5 sm:flex sm:flex-col sm:justify-center sm:items-center   md:my-5 md:flex md:flex-col md:justify-center md:items-center   lg:my-5 lg:flex lg:flex-col lg:justify-center lg:items-center    xl:my-5 xl:flex xl:flex-col xl:justify-center xl:items-center    2xl:my-5 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
                <p className="text-xs sm:text-base">FEEL FREE TO REACH OUT AND COLLABORATE USING THESE DETAILS OR BY THE SOCIAL LINKS ATTACHED</p>
            </div>
        </div>
  )
}

export default Contacts