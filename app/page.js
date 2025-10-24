'use client'
import Image from "next/image";
 import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

import About from "./components/About";
import { useEffect, useState } from "react";
import Resume from "./components/Resume";
import Contacts from "./components/Contacts";
import Socials from "./components/Socials";
import FadeInSection from "./components/DelayReveal";
import Navbar from '../app/components/Navbar'
import SpotlightText from "./components/Spotlight";
import { gsap } from "gsap";


function loader() {
  var tl = gsap.timeline();
  tl
    .to("#black", {
      height: -10,
      duration: 1,
      delay: 1,
    })

    

    .to(".reveal", {
      opacity: 0,
    })

    .to(".disappear", {
      opacity: 1,
      duration: 1.5, 
      ease: "power2.inOut", 
    }, "-=0.5");
}

export default function Home() {

   useEffect(() => {
    loader();
  }, [])



  return (
   
<>
    <div className="bg-black h-screen w-full flex justify-center items-center" id="black">
        <div id="name">
          <h1 className="text-white reveal"><span>Balwinder Singh's</span><span className="text-green-500 italic"> Portfolio</span>
          </h1>
        </div>

      </div>

    <div className="relative disappear opacity-0">
            <SpotlightText /> 

            <main className="relative z-20 flex flex-col min-h-[100dvh] max-w-2xl mx-auto lg:px-6 xl:px-6 2xl:px-6 px-3 items-center bg-transparent">

                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Hero /></FadeInSection>
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Skills /></FadeInSection>
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Experience /></FadeInSection>
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Projects /></FadeInSection>
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Education /></FadeInSection>
            
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Resume/></FadeInSection>
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Socials/></FadeInSection>
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-3 items-center"><Contacts/></FadeInSection>
                <FadeInSection delay={0.2} className="max-w-2xl mx-auto px-6 items-center"><Footer /></FadeInSection>
                <Navbar/>
            </main>
        </div>
        </>
  );
}
