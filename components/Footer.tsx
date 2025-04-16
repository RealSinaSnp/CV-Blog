"use client";

export default function Footer() {
    return (
      <footer className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-gray-800">
        © {new Date().getFullYear()} &nbsp;
        <a href="https://sinasnp.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
            sinasnp.com
        </a> 
        . Built with pain, coffee & Next.js.
      </footer>
    );
}