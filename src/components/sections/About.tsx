"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, BrainCircuit, Sparkles, Paintbrush } from "lucide-react";
import { personalData } from "@/data/personal";

const featureCards = [
  { icon: Code2, label: "Python Development" },
  { icon: BrainCircuit, label: "Artificial Intelligence" },
  { icon: Sparkles, label: "Generative AI" },
  { icon: Paintbrush, label: "Creative Design" }
];

export function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-[1320px]">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl"
          >
            Passionate about building technology for a better tomorrow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Profile Card */}
          <motion.div 
            className="liquid-glass rounded-3xl p-6 md:p-8 flex flex-col gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 overflow-hidden shrink-0 relative flex items-center justify-center text-2xl font-bold text-primary">
                {personalData.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">{personalData.name}</span>
                <span className="text-sm font-medium text-muted-foreground">{personalData.role}</span>
              </div>
            </div>

            <div className="h-px w-full bg-foreground/10" />

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Ghaziabad, Uttar Pradesh</span>
              </div>
              <div className="flex items-start gap-3 text-sm font-medium text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground">B.Tech CSE (AI & ML)</span>
                  <span>RKGIT, AKTU</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text & Features */}
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="liquid-glass rounded-3xl p-6 md:p-10 text-muted-foreground leading-relaxed text-base md:text-lg">
              {personalData.aboutMe.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featureCards.map((feature, idx) => (
                <div 
                  key={idx}
                  className="liquid-glass rounded-2xl p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground text-sm md:text-base">{feature.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
