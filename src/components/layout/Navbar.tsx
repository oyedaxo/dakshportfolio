"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { personalData } from "@/data/personal";
import { navLinks } from "@/data/navigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const sectionIds = navLinks.map(l => l.href.replace('#', '')).filter(id => id && id !== '/');
  const activeId = useScrollSpy(sectionIds, 200);
  const activeTab = activeId ? navLinks.find(l => l.href === `#${activeId}`)?.name : "Home";

  return (
    <header className="sticky top-0 w-full z-50 transition-all duration-300 pt-5">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6 py-4">
        <GlassCard className="rounded-full w-full bg-background/70 backdrop-blur-md shadow-sm border border-border/50 relative">
          <div className="flex flex-row items-center justify-between px-6 py-3 w-full h-full overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar relative z-10">
            {/* Spacer (Left) */}
            <div className="hidden lg:block w-[150px] shrink-0" />

            {/* Desktop Navigation (Center) */}
            <nav className="hidden lg:flex flex-row items-center justify-center gap-2 xl:gap-4 flex-1">
              {navLinks.map((link) => {
                const isActive = activeTab === link.name;
                // If we are not on the homepage and it's an anchor link, prepend with /
                const isAnchor = link.href.startsWith('#');
                const href = pathname === '/' ? link.href : (isAnchor ? `/${link.href}` : link.href);

                const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (pathname !== '/' && isAnchor) {
                    e.preventDefault();
                    router.push(`/${link.href}`);
                  }
                };

                return (
                  <Link
                    key={link.name}
                    href={href}
                    onClick={handleClick}
                    className={`relative px-3 py-2 text-[15px] font-medium transition-colors shrink-0 ${isActive ? "text-blue-500" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-500 rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA (Right side) */}
            <div className="flex flex-row items-center justify-end gap-3 shrink-0 lg:w-[250px]">
              <a href="/Daksh_Chaudhary_Resume.pdf" download="Daksh_Chaudhary_Resume.pdf">
                <Button className="hidden lg:flex gap-2 bg-blue-500 hover:bg-blue-600 text-white transition-all rounded-full h-10 px-6 text-[15px] font-medium">
                  <Download className="w-4 h-4" />
                  <span>{personalData.resumeButtonText}</span>
                </Button>
              </a>
            </div>

            {/* Mobile toggle button (always on right) */}
            <button
              className="lg:hidden p-2 text-foreground transition-transform active:scale-95 ml-auto shrink-0"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </GlassCard>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="absolute top-24 left-6 right-6 md:hidden"
          >
            <GlassCard className="rounded-2xl p-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isAnchor = link.href.startsWith('#');
                const href = pathname === '/' ? link.href : (isAnchor ? `/${link.href}` : link.href);

                const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  setIsOpen(false);
                  if (pathname !== '/' && isAnchor) {
                    e.preventDefault();
                    router.push(`/${link.href}`);
                  }
                };

                return (
                  <Link
                    key={link.name}
                    href={href}
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={handleClick}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="h-px bg-foreground/10 my-2" />
              <a href="/Daksh_Chaudhary_Resume.pdf" download="Daksh_Chaudhary_Resume.pdf" className="w-full">
                <Button className="w-full gap-2 bg-blue-500 hover:bg-blue-600 text-white transition-all rounded-full h-12 text-[15px] font-medium mt-4">
                  <Download className="w-4 h-4" />
                  <span>{personalData.resumeButtonText}</span>
                </Button>
              </a>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
