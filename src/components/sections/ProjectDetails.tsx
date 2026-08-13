"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Code2, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OriginButton } from "@/components/ui/origin-button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Project } from "@/types";

interface ProjectDetailsProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectDetails({ project, prevProject, nextProject }: ProjectDetailsProps) {
  return (
    <article className="w-full flex flex-col gap-6">
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/#projects">
          <OriginButton className="bg-transparent border-transparent hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground px-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </OriginButton>
        </Link>
      </motion.div>

      {/* Hero Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <GlassCard glow className="overflow-hidden relative w-full aspect-video md:aspect-[21/9] p-0">
          <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover"
          priority
        />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/20 backdrop-blur-md text-primary rounded-full border border-primary/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Content Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-foreground/5 p-6 md:p-8 rounded-2xl border-l-4 border-l-blue-500/50">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-foreground/5 p-6 md:p-8 rounded-2xl border-l-4 border-l-orange-500/50">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Problem Statement</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-foreground/5 p-6 md:p-8 rounded-2xl border-l-4 border-l-emerald-500/50">
              <h2 className="text-2xl font-bold mb-4 text-foreground">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="bg-foreground/5 p-6 md:p-8 rounded-2xl border-l-4 border-l-destructive/50">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Challenges Faced</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
            </div>
            <div className="bg-foreground/5 p-6 md:p-8 rounded-2xl border-l-4 border-l-green-500/50">
              <h2 className="text-2xl font-bold mb-4 text-foreground">What I Learned</h2>
              <p className="text-muted-foreground leading-relaxed">{project.learned}</p>
            </div>
          </motion.section>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          <motion.div 
            className="lg:sticky lg:top-28 flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {(() => {
              const hasLive = project.liveUrl && project.liveUrl !== "#";
              const hasGithub = project.githubUrl && project.githubUrl !== "#";
              
              if (!hasLive && !hasGithub) return null;

              const headingText = hasLive && !hasGithub ? "Live Demo" : 
                                  !hasLive && hasGithub ? "Source Code" : 
                                  "Project Links";

              return (
                <div className="bg-foreground/5 p-6 md:p-8 rounded-2xl border-l-4 border-l-purple-500/50">
                  <h3 className="text-xl font-bold mb-6 text-foreground">{headingText}</h3>
                  <div className="flex flex-col gap-4">
                    {hasLive && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <OriginButton className="w-full h-10 gap-2 bg-primary text-primary-foreground border-transparent hover:text-background">
                          Live Demo <ExternalLink className="w-4 h-4" />
                        </OriginButton>
                      </a>
                    )}
                    {hasGithub && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <OriginButton className="w-full h-10 gap-2 bg-foreground/5 border-foreground/10 text-foreground">
                          <Code2 className="w-4 h-4" /> Source Code
                        </OriginButton>
                      </a>
                    )}
                  </div>
                </div>
              );
            })()}

            <div className="bg-foreground/5 p-6 md:p-8 rounded-2xl border-l-4 border-l-cyan-500/50">
              <h3 className="text-xl font-bold mb-6 text-foreground">Key Features</h3>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>



      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bg-foreground/5 p-6 md:p-8 rounded-2xl border-l-4 border-l-primary/50 flex flex-col sm:flex-row items-center justify-between gap-8">
          {prevProject ? (
            <Link href={`/projects/${prevProject.slug}`} className="group flex flex-col items-start w-full sm:w-auto">
              <span className="text-xs text-muted-foreground mb-1 flex items-center gap-1 group-hover:text-primary transition-colors">
                <ArrowLeft className="w-3 h-3" /> Previous Project
              </span>
              <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{prevProject.title}</span>
            </Link>
          ) : <div className="w-full sm:w-auto" />}

          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`} className="group flex flex-col items-end text-right w-full sm:w-auto">
              <span className="text-xs text-muted-foreground mb-1 flex items-center gap-1 group-hover:text-primary transition-colors">
                Next Project <ArrowRight className="w-3 h-3" />
              </span>
              <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{nextProject.title}</span>
            </Link>
          ) : <div className="w-full sm:w-auto" />}
        </div>
      </motion.div>

    </article>
  );
}
