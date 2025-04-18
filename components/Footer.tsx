"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  
  const pathname = usePathname();
  if (pathname === "/") return null;
    return (
      <footer className="bg-black text-center text-sm text-gray-300 py-6 border-t border-gray-200 dark:border-gray-500">
        
        © {new Date().getFullYear()} &nbsp;
        <a href="https://sinasnp.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
            sinasnp.com
        </a> 
        . Built with pain, coffee & Next.js.
      </footer>
    );
}