{/*

// components/HeaderDesktop.tsx
import { Moon, Sun, Newspaper } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from "next-themes";



type HeaderProps = {
  isDark: boolean;
};

export default function HeaderDesktop({ isDark }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  isDark = theme === "dark";

  const toggleDark = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className={`p-6 flex justify-between gap-4 items-center bg-teal-500 ${isDark ? 'dark:bg-[#17313c]' : ''}`}>
      <div className="flex items-center gap-4">
        <img src="/img/profile.jpg" alt="Profile" className={`"w-25 h-25 rounded-full border-2  ${isDark ? "border-white" : "border-black"} transition`}/>
        <div>
          <h1 className="text-2xl font-bold transition">Sina Sasanpour</h1>
          <p className="text-sm">Istanbul | Junior Developer</p>
          <div className="flex gap-3 mt-2" >
            <a href="/blog" target="_blank" rel="noopener noreferrer" 
            className={`flex items-center mt-[-6] gap-2 px-2 py-1 border-2 ${isDark ? " border-teal-300 text-teal-100 hover:text-white hover:bg-teal-800" : "border-[#17313c] text-[#17313c] hover:text-black hover:bg-teal-200"} rounded-full transition`}>
              <Newspaper className="w-5 h-5" />
              <span className="font-medium">Blog</span>
            </a>
            <a href="https://github.com/RealSinaSnp" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" className={`${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`} />
            </a>
            <a href="https://www.linkedin.com/in/realsinasnp/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" className={`${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`} />
            </a>
            <a href="https://x.com/RealSinaSNP" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} size="lg" className={`${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">                                                             
        <a href="/docs/CV_EN_dark.pdf" download className={`px-4 py-2 text-white font-semibold rounded-full ${isDark ? "bg-teal-500 hover:bg-teal-400" : "bg-[#17313c] hover:bg-black"} transition`}>
          Download CV (PDF)
        </a>

        {/* Dark Mode Toggle Button 
        <button onClick={toggleDark} className="text-white">
          {isDark ? <Sun /> : <Moon color="#17313c" />}
        </button>
      </div>
    </header>
  );
}

*/}