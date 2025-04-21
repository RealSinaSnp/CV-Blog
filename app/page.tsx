"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; 
import Header from "@/components/Header-CV";
import InfoCard from "@/components/InfoCard";


export default function CVPage() {


  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // keep dark/light mode on tooggle
  const { theme } = useTheme();
  const isDark = theme === "dark"; 

  // for InfoCard
  const langs = [
    { label: "C#", level: 80 },
    { label: "Python", level: 90 },
    { label: "JS", level: 80 },
    { label: "PHP", level: 65 },
  ];

  const knowledges = [
    { label: "Unit Testing", level: 75 },
    { label: "Version Control (Git)", level: 55 },
    { label: "Networking Basics (HTTP, DNS, Ports)", level: 80 },
    { label: "CI/CD Fundamentals", level: 65 },
    { label: "Secure Coding Practices", level: 65 },
  ];

  const skills = [
    { label: "Docker", level: 75 },
    { label: "React", level: 55 },
    { label: "SHELL/LINUX", level: 75 },
    { label: "SQL", level: 85 },
  ];

  
  const interests = [
    { label: "Building side projects", level: 75},
    { label: "Automating boring tasks", level: 75 },
    { label: "Tech blogging", level: 75 },
    { label: "UI/UX design exploration", level: 75 },
    { label: "Following tech news and trends", level: 75 },
  ];
  

  return (
    <div className={`${isDark ? "dark bg-[#0c0c0c] text-white" : "bg-white text-black"}`}>
      <Header />
      <div className="max-w-7xl mx-auto">
      
      

      <section className="p-6" id="about">
        <h2 className="text-xl font-bold mb-2 text-indigo-600 dark:text-green-500">About Me</h2>
        <p className="text-base">
        Seeing how automations designed by engineers have simplified human life inspires me to tackle
        complex problems and create innovative solutions. I am eager to further develop my technical skills to
        contribute to meaningful projects alongside other ambitious developers.

        </p>
      </section>


      <section className="p-6 flex flex-col lg:flex-row gap-6" id="skills-tools">
        <div className="flex-[1]">
          <InfoCard title="Programming Languages" color="text-green-700 dark:text-indigo-600" items={langs} />
        </div>
        <div className="flex-[1]">
          <InfoCard title="Knowledge" color="text-green-700 dark:text-indigo-600" items={knowledges}  />
        </div>
      </section>

      <section className="p-6 flex flex-col lg:flex-row gap-6" id="skills-tools">
        <div className="flex-[3]">
          <InfoCard title="Computer Skills" color="text-green-700 dark:text-indigo-600" items={skills}  />
        </div>
        <div className="flex-[1]">
          <InfoCard title="Interests" color="text-green-700 dark:text-indigo-600" items={interests} showCheckmarks />
        </div>
        
      </section>



      {year && (
        <footer className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © {year} Sina. All rights reserved.
        </footer>
      )} 
    </div>
    </div>
  );
}

/*
      <section className="p-6" id="projects">
        <h2 className="text-xl font-bold mb-2 text-indigo-600">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Car Sales System</strong> – Desktop app using C# and MS SQL
            (<a className="text-teal-600 underline" href="#" target="_blank" rel="noopener noreferrer">GitHub</a>)
          </li>
          <li>
            <strong>PDF Text Extractor</strong> – OCR + Python to extract texts from scanned documents
            (<a className="text-teal-600 underline" href="#" target="_blank" rel="noopener noreferrer">GitHub</a>)
          </li>
        </ul>
      </section>

*/