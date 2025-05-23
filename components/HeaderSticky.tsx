// components/HeaderSticky.tsx
import { Moon, Sun, Newspaper } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "next-themes";

export default function HeaderSticky() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleDark = () => setTheme(isDark ? "light" : "dark");

  return (
    <div className={`fixed top-0 w-full z-50 bg-teal-500  ${ isDark ? "bg-animated-gradient-dark" : "bg-animated-gradient"} shadow-md transition-all animate-slideDown`}>
    
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/img/profile.jpg" alt="Profile" className={`w-8 h-8 rounded-full border-[1.5] ${ isDark ? "border-white" : "border-black" } transition`} />
          <span className={`font-semibold text-lg ${isDark ? "text-white" : "text-[#000]"} transition`}>Sina Sasanpour</span>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/RealSinaSnp" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className={`flex items-center ${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`}/>
          </a>
          <a href="https://www.linkedin.com/in/realsinasnp/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className={`flex items-center ${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`}/>
          </a>
          <a href="https://x.com/RealSinaSNP" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className={`flex items-center ${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`}/>
          </a>

          <a href="/blog" target="_blank" rel="noopener noreferrer" className={`flex items-center ${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`}>
            <Newspaper className="w-6 h-6" />
          </a>

          <button onClick={toggleDark} className="text-white">
            {isDark ? <Sun /> : <Moon className="text-black"/>}
          </button>
        </div>
      </div>
    </div>
  );
}
