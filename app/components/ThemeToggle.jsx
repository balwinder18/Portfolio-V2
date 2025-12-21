'use client'

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../Themeprovider";
import { gsap } from "gsap";
import { useRef } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const curtainRef = useRef(null);

  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    const tl = gsap.timeline();

    tl.to(curtainRef.current, {
      xPercent: 100,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        toggleTheme(newTheme);
      }
    })
    .to(curtainRef.current, {
      xPercent: 200,
      duration: 0.5,
      ease: "power2.inOut",
    })
    .set(curtainRef.current, {
      xPercent: 0 
    });
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 hover:scale-110 transition-transform z-50 relative"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div
        ref={curtainRef}
        className="fixed top-0 left-[-100%] w-full h-screen bg-[#14cf93] z-[9999] pointer-events-none"
      />
    </>
  );
}
