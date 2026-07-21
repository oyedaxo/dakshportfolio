"use client";

import { motion } from "framer-motion";
import { ExternalLink, Video } from "lucide-react";
import Link from "next/link";


export function EditingStuff() {
  return (
    <section className="w-full pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="https://drive.google.com/drive/folders/1JabS5qRMWWK60jO4VNjvebGwYOtRSEN7?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <div className="relative overflow-hidden rounded-3xl group p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/20 hover:border-primary/50 transition-colors bg-transparent">
              
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <Video className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
                    Editing Stuff
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </h2>
                  <p className="text-muted-foreground max-w-xl">
                    Check out my video editing and creative portfolio. A collection of visual stories, dynamic cuts, and cinematic sequences.
                  </p>
                </div>
              </div>

              <div className="relative z-10 hidden md:block">
                <div className="px-6 py-3 rounded-full bg-foreground text-background font-medium group-hover:scale-105 transition-transform duration-300">
                  View Portfolio
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
