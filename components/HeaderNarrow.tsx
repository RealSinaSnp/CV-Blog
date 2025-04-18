// components/HeaderMobile.tsx
import { Moon, Sun } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from "next-themes";

export default function HeaderMobile() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleDark = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className={`p-6 flex flex-col items-center text-center gap-4 bg-teal-500 ${isDark ? 'dark:bg-[#17313c]' : ''}`}>
      <img src="/img/profile.jpg" alt="Profile" className="w-20 h-20 rounded-full border-2 border-white dark:border-black" />
      <h1 className="text-2xl font-bold">Sina Sasanpour</h1>
      <p className="text-sm">Istanbul | Junior Developer</p>
      <div className="flex gap-4">
        <a href="https://github.com/RealSinaSnp" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="lg" color={isDark ? "#98FF98" : "#17313c"} />
        </a>
        <a href="https://www.linkedin.com/in/realsinasnp/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="lg" color={isDark ? "#98FF98" : "#17313c"} />
        </a>
        <a href="https://x.com/RealSinaSNP" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} size="lg" color={isDark ? "#98FF98" : "#17313c"} />
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="/docs/CV_EN_dark.pdf" download className="px-4 py-2 text-white font-semibold rounded-full bg-[#17313c] dark:bg-teal-500 hover:bg-black hover:dark:bg-teal-600">
          Download CV (PDF)
        </a>

        {/* Dark Mode Toggle Button */}
        <button onClick={toggleDark} className="text-white">
          {isDark ? <Sun /> : <Moon color="#17313c" />}
        </button>
      </div>
    </header>
  );
}

