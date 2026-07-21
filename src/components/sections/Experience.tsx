"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-[1320px]">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            My professional journey and career highlights
          </motion.p>
        </div>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="liquid-glass rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:-translate-y-1 transition-transform group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex flex-col flex-1 w-full gap-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      {exp.role}
                    </h3>
                    <div className="text-blue-500 font-medium">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 mt-2 md:mt-0 text-sm font-medium text-muted-foreground/80 md:items-end bg-muted/30 px-3 py-2 rounded-lg border border-border/50">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="flex flex-col gap-2 mt-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2.5 shrink-0" />
                      <span className="text-[15px]">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
