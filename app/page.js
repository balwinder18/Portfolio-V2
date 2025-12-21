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
      height: 0,
      duration: 1,
      delay: 1,
      ease: "power2.inOut"
    })
    .to(".reveal", {
      opacity: 0,
      duration: 0.5
    }, "<")
    .set("#black", { display: "none" })
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
   
    <div className="bg-black h-screen w-full flex justify-center items-center fixed top-0 left-0 z-[9999] overflow-hidden" id="black">
        <div id="name">
          <h1 className="text-white reveal"><span>Balwinder Singh's</span><span className="text-green-500 italic"> Portfolio</span>
          </h1>
        </div>
    </div>

   
  <div
  className="
    relative w-full min-h-screen transition-colors duration-300
    bg-[#f0f0f0] dark:bg-black
  "
>
  <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.45)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(148,163,184,0.25)_0,_transparent_55%)] dark:bg-none" />

  <div className="disappear opacity-0 relative z-10">
    <main className="relative z-20 flex flex-col min-h-[100dvh] w-full max-w-5xl mx-auto items-center bg-transparent">
      <FadeInSection delay={0.2} className="w-full px-4 sm:px-6 md:px-8"><Hero /></FadeInSection>
      <FadeInSection delay={0.2} className="w-full px-4 sm:px-6 md:px-8"><Experience /></FadeInSection>
      <FadeInSection delay={0.2} className="w-full px-4 sm:px-6 md:px-8"><Projects /></FadeInSection>
      <FadeInSection delay={0.2} className="w-full px-4 sm:px-6 md:px-8"><Skills /></FadeInSection>
      <FadeInSection delay={0.2} className="w-full px-4 sm:px-6 md:px-8"><Education /></FadeInSection>
      <FadeInSection delay={0.2} className="w-full px-4 sm:px-6 md:px-8"><Resume /></FadeInSection>
      <FadeInSection delay={0.2} className="w-full px-4 sm:px-6 md:px-8"><Socials /></FadeInSection>
      <FadeInSection delay={0.2} className="w-full px-4 sm:px-6 md:px-8"><Contacts /></FadeInSection>
      <FadeInSection delay={0.2} className="w-full px-4 sm:px-6 md:px-8"><Footer /></FadeInSection>
      <Navbar />
    </main>
  </div>
</div>

</>
  );
}
