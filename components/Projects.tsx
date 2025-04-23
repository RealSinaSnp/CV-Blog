// app/(main)/projects/page.tsx
"use client";

import Link from "next/link";
import WolfImage from '/img/wolf.svg';

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
      {/* Header Section */}
      <div className="space-y-12">
        <div>
          <div className="mono-tag flex items-center gap-2 text-sm">
            <span>[</span>
            <span>Projects</span>
            <span>]</span>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl space-y-12">
            <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">
              Code, Create, Conquer
            </h2>
          </div>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid gap-0 lg:grid-cols-3 lg:-space-x-px">
        <div className="group relative px-0 py-10 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent border-t border-border lg:border-l lg:border-t-0 lg:hover:bg-gradient-to-b md:flex-row lg:flex-col gap-10 overflow-hidden">
          {/* Border Hover Corners */}
          <div className="absolute inset-0 pointer-events-none opacity-0 z-10 isolate border border-primary/10 group-hover:opacity-100 hidden lg:block">
            <div className="absolute -translate-x-px -translate-y-px -left-1 -top-1 size-2 bg-primary z-10"></div>
            <div className="absolute translate-x-px -translate-y-px -right-1 -top-1 size-2 bg-primary z-10"></div>
            <div className="absolute -translate-x-px translate-y-px -left-1 -bottom-1 size-2 bg-primary z-10"></div>
            <div className="absolute translate-x-px translate-y-px -right-1 -bottom-1 size-2 bg-primary z-10"></div>
          </div>

          {/* Project Content */}
          <div className="max-w-sm">
            <Link href="https://yourprojectlink.com" target="_blank">
              <div className="absolute inset-0" />
              <h3 className="text-xl">My Cool Project</h3>
            </Link>
            <p className="mt-4 text-secondary">
              This is a brief description of what the project does. It's
              awesome, useful, and makes you look good.
            </p>
          </div>

          {/* Optional Illustration Area */}
          <div className="flex-1 flex flex-col">
            <div className="opacity-75 flex-1 pointer-events-none">
              <div className="duration-100 opacity-40 group-hover:opacity-70 group-hover:scale-110 origin-bottom">
                <svg className="w-full scale-[115%] origin-top-right -mt-4" viewBox="0 0 555 384" fill="none">
                  {/* You can insert any SVG illustration here or delete this part entirely */}
                  <rect width="555" height="384" fill="url(#gradient)" />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="555" y2="384" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3b82f6" />
                      <stop offset="1" stopColor="#9333ea" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative px-0 py-10 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent border-t border-border lg:border-l lg:border-t-0 lg:hover:bg-gradient-to-b md:flex-row lg:flex-col gap-10 overflow-hidden">
          {/* Border Hover Corners */}
          <div className="absolute inset-0 pointer-events-none opacity-0 z-10 isolate border border-primary/10 group-hover:opacity-100 hidden lg:block">
            <div className="absolute -translate-x-px -translate-y-px -left-1 -top-1 size-2 bg-primary z-10"></div>
            <div className="absolute translate-x-px -translate-y-px -right-1 -top-1 size-2 bg-primary z-10"></div>
            <div className="absolute -translate-x-px translate-y-px -left-1 -bottom-1 size-2 bg-primary z-10"></div>
            <div className="absolute translate-x-px translate-y-px -right-1 -bottom-1 size-2 bg-primary z-10"></div>
          </div>

          {/* Project Content */}
          <div className="max-w-sm">
            <Link href="https://yourprojectlink.com" target="_blank">
              <div className="absolute inset-0" />
              <h3 className="text-xl">My Cool Project</h3>
            </Link>
            <p className="mt-4 text-secondary">
              This is a brief description of what the project does. It's
              awesome, useful, and makes you look good.
            </p>
          </div>

          {/* Optional Illustration Area */}
          <div className="flex-1 flex flex-col">
            <div className="opacity-75 flex-1 pointer-events-none">
              <div className="duration-100 opacity-40 group-hover:opacity-70 group-hover:scale-110 origin-bottom">
                <svg className="w-full scale-[115%] origin-top-right -mt-4" viewBox="0 0 555 384" fill="none">
                  {/* You can insert any SVG illustration here or delete this part entirely */}
                  <rect width="555" height="384" fill="url(#gradient)" />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="555" y2="384" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3b82f6" />
                      <stop offset="1" stopColor="#9333ea" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative px-0 py-10 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent border-t border-border lg:border-l lg:border-t-0 lg:hover:bg-gradient-to-b md:flex-row lg:flex-col gap-10 overflow-hidden">
          {/* Border Hover Corners */}
          <div className="absolute inset-0 pointer-events-none opacity-0 z-10 isolate border border-primary/10 group-hover:opacity-100 hidden lg:block">
            <div className="absolute -translate-x-px -translate-y-px -left-1 -top-1 size-2 bg-primary z-10"></div>
            <div className="absolute translate-x-px -translate-y-px -right-1 -top-1 size-2 bg-primary z-10"></div>
            <div className="absolute -translate-x-px translate-y-px -left-1 -bottom-1 size-2 bg-primary z-10"></div>
            <div className="absolute translate-x-px translate-y-px -right-1 -bottom-1 size-2 bg-primary z-10"></div>
          </div>

          {/* Project Content */}
          <div className="max-w-sm">
            <Link href="https://yourprojectlink.com" target="_blank">
              <div className="absolute inset-0" />
              <h3 className="text-xl">My Cool Project</h3>
            </Link>
            <p className="mt-4 text-secondary">
              This is a brief description of what the project does. It's
              awesome, useful, and makes you look good.
            </p>
          </div>

          {/* Optional Illustration Area */}
          <div className="flex-1 flex flex-col">
            <div className="opacity-75 flex-1 pointer-events-none">
              <div className="duration-100 opacity-40 group-hover:opacity-70 group-hover:scale-110 origin-bottom">
              <svg className="w-full scale-[115%] origin-top-right -mt-4" viewBox="0 0 555 384" xmlns="http://www.w3.org/2000/svg">
        {/* Embed the image inside the SVG */}
        <image href="/img/postPlaceholder.jpg" width="555" height="384"/>
      </svg>
      
              </div>
            </div>
          </div>
        </div>

        
      </div>



    </div>
  );
}
