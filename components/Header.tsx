"use client";

import Link from "next/link";
import { Github, Linkedin, FileUser  } from "lucide-react";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-[6px] bg-white/30 dark:bg-black/30 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left - Logo or Name */}
        <Link href="/" className="text-xl font-bold text-teal-600 dark:text-teal-400 hover:opacity-80 transition">
          SINA
        </Link>

        {/* Middle - Title */}
        <h1 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 text-center">
          My Brain Log
        </h1>

        {/* Right - Social Icons */}
        <div className="flex gap-3 text-gray-600 dark:text-gray-300">
          <a href="https://github.com/RealSinaSnp" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/realsinasnp/" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
            <Linkedin size={20} />
          </a>
          <a href="https://sinasnp.com/" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 transition">
            <FileUser size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}


