import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Socials = () => {
  return (
    <footer className="w-full py-10">
      <div className="w-full max-w-5xl mx-auto px-4">
        
        <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-7 bg-black dark:bg-white rounded-full transition-colors duration-300"></div>
            <h2 className="lg:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">Socials</h2>
        </div>

        <div className="flex flex-col items-center space-y-6 lg:hidden">
          <div className="flex items-center justify-center gap-4">
            <a
              className="p-4 bg-gray-100 dark:bg-white rounded-full transition hover:scale-105 shadow-sm"
              href="https://github.com/balwinder18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-5xl text-black opacity-90" />
            </a>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
            <a
              className="p-4 bg-gray-100 dark:bg-white rounded-full transition hover:scale-105 shadow-sm"
              href="https://www.linkedin.com/in/balwinder-singh-32a884254"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-5xl text-black opacity-90" />
            </a>
          </div>

          <div className="w-2/3 h-px bg-gray-300 dark:bg-gray-700"></div>

          <div className="flex items-center justify-center gap-4">
            <a
              className="p-4 bg-gray-100 dark:bg-white rounded-full transition hover:scale-105 shadow-sm"
              href="https://leetcode.com/u/Balwinder_sb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode className="text-5xl text-black opacity-90" />
            </a>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
            <a
              className="p-4 bg-gray-100 dark:bg-white rounded-full transition hover:scale-105 shadow-sm"
              href="https://x.com/Balwinder_sb?t=NkqHaphnsZ2mCYY81ZykNA&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-5xl text-black opacity-90" />
            </a>
          </div>
        </div>
  <div className="hidden lg:flex items-center justify-center gap-6 mt-6">
          <a
            className="p-4 bg-gray-100 dark:bg-white rounded-full transition hover:scale-105 shadow-sm border border-gray-200 dark:border-transparent"
            href="https://github.com/balwinder18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-5xl text-black opacity-90" />
          </a>

          <div className="w-px h-14 bg-gray-300 dark:bg-gray-700"></div>

          <a
            className="p-4 bg-gray-100 dark:bg-white rounded-full transition hover:scale-105 shadow-sm border border-gray-200 dark:border-transparent"
            href="https://www.linkedin.com/in/balwinder-singh-32a884254"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-5xl text-black opacity-90" />
          </a>
          <div className="w-px h-14 bg-gray-300 dark:bg-gray-700"></div>

          <a
            className="p-4 bg-gray-100 dark:bg-white rounded-full transition hover:scale-105 shadow-sm border border-gray-200 dark:border-transparent"
            href="https://leetcode.com/u/Balwinder_sb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="text-5xl text-black opacity-90" />
          </a>

          <div className="w-px h-14 bg-gray-300 dark:bg-gray-700"></div>

          <a
            className="p-4 bg-gray-100 dark:bg-white rounded-full transition hover:scale-105 shadow-sm border border-gray-200 dark:border-transparent"
            href="https://x.com/singhbalwinderr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-5xl text-black opacity-90" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Socials
