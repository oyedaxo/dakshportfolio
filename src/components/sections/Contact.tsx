"use client";

import { motion } from "framer-motion";
import { socialsData } from "@/data/socials";

export function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-[1320px]">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Contact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            Let&apos;s build something amazing together
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {socialsData.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target={social.platform === "Email" ? "_self" : "_blank"} 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-6 group p-8 rounded-3xl liquid-glass border border-foreground/5 hover:border-primary/50 transition-colors text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <social.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-widest">{social.label}</span>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1 max-w-full px-2" title={social.url.replace('https://', '').replace('www.', '').replace('mailto:', '')}>
                  {social.url.replace('https://', '').replace('www.', '').replace('mailto:', '')}
                </span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
