"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalData } from "@/data/personal";
import { socialsData } from "@/data/socials";
import { statsData } from "@/data/stats";
import { Component as Globe } from "@/components/ui/interactive-globe";

const Particles = () => {
  const [particles, setParticles] = useState<{left: string, top: string, duration: number, delay: number}[]>([]);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(
      [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          initial={{
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export function Hero() {
  return (
    <section 
      className="relative w-full pb-12"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background z-0" />
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <Particles />

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-[1320px]">
        <div className="py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Left Column: Content */}
            <motion.div 
              className="flex flex-col items-start gap-5 h-full justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div 
              className="px-4 py-1.5 rounded-full flex items-center gap-2 bg-green-500/10 border border-green-500/20 w-fit"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-green-600 dark:text-green-400">Open to Work</span>
            </motion.div>

            {/* Heading */}
            <div className="flex flex-col gap-1 mt-2">
              <span className="text-xl md:text-2xl font-medium text-foreground">Hi, I&apos;m</span>
              <h1 className="text-[3.5rem] md:text-[5.5rem] font-black tracking-tight text-primary leading-none">
                {personalData.name}
              </h1>
            </div>
            
            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl font-semibold text-foreground/80 mt-1">
              {personalData.role}
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed whitespace-pre-wrap">
              I build modern web applications and AI-powered products that solve real problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link href="#projects">
                <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground transition-all rounded-xl px-6 h-12 text-sm font-semibold shadow-lg shadow-primary/25">
                  {personalData.viewProjectsButtonText}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="/Daksh_Chaudhary_CV.pdf" download="Daksh_Chaudhary_CV.pdf">
                <Button variant="outline" className="gap-2 bg-foreground/5 hover:bg-foreground/10 transition-all rounded-xl px-6 h-12 text-sm text-foreground font-semibold border-foreground/10">
                  <Download className="w-4 h-4" />
                  {personalData.resumeButtonText}
                </Button>
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-4">
              <div className="flex items-center gap-3">
                {socialsData.map((social, index) => (
                  <Link 
                    key={index} 
                    href={social.url} 
                    target="_blank"
                    aria-label={social.label}
                    className="w-11 h-11 flex items-center justify-center bg-foreground/5 border border-foreground/10 rounded-xl text-muted-foreground hover:text-primary transition-all group hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>


            {/* Right Column: Quantum Nebula */}
            <motion.div 
              className="relative w-full h-full min-h-[400px] flex items-center justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full pointer-events-auto flex items-center justify-center">
                <Globe size={460} className="max-w-full z-10" />
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full border-t border-foreground/5 pt-8">
            {statsData.map((stat, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-4 px-6 py-5 bg-foreground/5 rounded-2xl border border-foreground/5 transition-colors shadow-sm"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <div className="text-xl font-bold text-foreground flex items-center">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
