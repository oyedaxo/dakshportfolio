"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, MoreVertical, Home, User, FolderGit2, Briefcase, Code, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OriginButton } from "@/components/ui/origin-button";
import { GlassCard } from "@/components/ui/GlassCard";
import { personalData } from "@/data/personal";
import { navLinks } from "@/data/navigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const getIcon = (name: string) => {
  switch (name) {
    case 'Home': return <Home className="w-5 h-5 mr-4" />;
    case 'About': return <User className="w-5 h-5 mr-4" />;
    case 'Projects': return <FolderGit2 className="w-5 h-5 mr-4" />;
    case 'Experience': return <Briefcase className="w-5 h-5 mr-4" />;
    case 'Skills': return <Code className="w-5 h-5 mr-4" />;
    case 'Contact': return <Mail className="w-5 h-5 mr-4" />;
    default: return null;
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const sectionIds = navLinks.map(l => l.href.replace('#', '')).filter(id => id && id !== '/');
  const activeId = useScrollSpy(sectionIds, 200);
  const activeTab = activeId ? navLinks.find(l => l.href === `#${activeId}`)?.name : "Home";

  return (
    <header className="sticky top-0 w-full z-50 transition-all duration-300 pt-5">
      <div className="mx-auto flex justify-end lg:justify-center px-4 md:px-6 py-4">
        <GlassCard className="rounded-full w-fit relative inline-block">
          <div className="flex flex-row items-center justify-center px-4 md:px-6 py-2 md:py-3 h-full overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar relative z-10">
            {/* Desktop Navigation (Center) */}
            <nav className="hidden lg:flex flex-row items-center justify-center gap-2 xl:gap-4">
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
                    className="relative inline-block"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-foreground dark:bg-neutral-50 rounded-full"
                      />
                    )}
                    <OriginButton
                      className={cn(
                        "relative px-4 h-10 rounded-full text-[15px] font-medium transition-colors shrink-0 border-transparent bg-transparent dark:bg-transparent",
                        isActive ? "!text-background dark:!text-neutral-950" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.name}
                    </OriginButton>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile toggle button */}
            <button
              className="lg:hidden p-2 text-foreground transition-transform active:scale-95 shrink-0"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <MoreVertical className="w-6 h-6" />}
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
            <GlassCard className="rounded-2xl p-4 flex flex-col gap-1">
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
                    className="flex items-center text-[17px] font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4 hover:bg-foreground/5 rounded-xl"
                    onClick={handleClick}
                  >
                    {getIcon(link.name)}
                    {link.name}
                  </Link>
                );
              })}
              <div className="h-px bg-foreground/10 my-2 mx-4" />
              <div className="px-4 pb-2">
                <a href="/Daksh_Chaudhary_CV.pdf" download="Daksh_Chaudhary_CV.pdf" className="w-full block">
                  <OriginButton className="w-full gap-2 bg-primary text-primary-foreground border-transparent hover:text-background h-12 mt-2">
                    <Download className="w-4 h-4" />
                    {personalData.resumeButtonText}
                  </OriginButton>
                </a>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

