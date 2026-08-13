"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export function ProjectCard({ slug, title, description, image, technologies }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block h-full cursor-pointer group [perspective:1000px]">
      <div className="h-full relative liquid-glass rounded-2xl overflow-hidden flex flex-row items-center border border-foreground/5 hover:border-primary/50 transition-all duration-500 ease-in-out bg-foreground/5 p-2 [transform-style:preserve-3d] group-hover:[transform:rotate3d(1,-1,0,10deg)] group-hover:[box-shadow:rgba(0,0,0,0.2)_30px_50px_25px_-40px,rgba(0,0,0,0.1)_0px_25px_30px_0px]">
        {/* Animated Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-xl" />

          {/* Image Section */}
          <div className="relative w-1/3 md:w-2/5 aspect-[4/3] overflow-hidden z-10 rounded-xl shrink-0 border border-foreground/5" style={{ transform: "translateZ(20px)" }}>
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>

          {/* Content Section */}
          <div className="p-4 md:p-6 flex flex-col justify-center flex-grow z-10 w-2/3 md:w-3/5" style={{ transform: "translateZ(30px)" }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-foreground truncate mr-2">{title}</h3>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0" />
            </div>
            
            <p className="text-xs md:text-sm text-muted-foreground mb-4 flex-grow line-clamp-2 leading-relaxed">{description}</p>
            
            <div className="flex items-center gap-2 mt-auto">
              {technologies.slice(0, 4).map((tech, i) => (
                <div 
                  key={i} 
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-foreground/5 border border-foreground/10 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors"
                  title={tech}
                >
                  {tech.charAt(0)}
                </div>
              ))}
              {technologies.length > 4 && (
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-foreground/5 border border-foreground/10 text-muted-foreground">
                  +{technologies.length - 4}
                </div>
              )}
            </div>
          </div>
      </div>
    </Link>
  );
}
