"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";
import { ArrowRight } from "lucide-react";

export function Blog() {
  if (blogPosts.length === 0) {
    return null; // Hide if no blog posts
  }

  return (
    <section id="blog" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-[1320px]">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Blog
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            Thoughts, learnings and tech stuff
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="liquid-glass rounded-3xl p-6 md:p-8 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-primary mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10">{post.category}</span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-bold text-foreground text-xl leading-tight mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-medium text-muted-foreground">{post.readTime} read</span>
                <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
