"use client";

import { motion } from "framer-motion";
import { certificatesData } from "@/data/certificates";
import Image from "next/image";

export function Certificates() {
  if (certificatesData.length === 0) {
    return null; // Hide if no certificates
  }

  return (
    <section id="certificates" className="w-full py-16 md:py-24 bg-foreground/[0.02]">
      <div className="container mx-auto px-4 md:px-6 max-w-[1320px]">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Certifications & Honors
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            Validated skills, achievements, and academic credentials
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full bg-foreground/5">
                {cert.image ? (
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    No Preview
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-1">{cert.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="font-medium">{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
