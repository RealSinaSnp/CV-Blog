import { useTheme } from "next-themes";


export default function AboutMe() {
  
    const { theme } = useTheme();
    
    return (
      <section
        id="next-section"
        className="min-h-screen px-6 py-20 flex flex-col justify-center items-center bg-white dark:bg-[#0f1f24] text-[#17313c] dark:text-white transition-colors"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-2xl text-center text-lg leading-relaxed">
          Hey, I’m Sina — a junior developer based in Istanbul. I’m building cool things with React, Next.js, TypeScript, and MongoDB.
          <br />
          I focus on clean code, fast loading
          {theme !== "light" && ", and dark mode (because I respect your eyes)"}
          {theme !== "dark" && " , adaptability"}
          .
        </p>
      </section>
    );
  }
  