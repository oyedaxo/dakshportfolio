import { LucideIcon } from "lucide-react";

export interface NavLink {
  name: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string; // Short description for the card
  image: string; // Thumbnail for the card and hero
  technologies: string[]; // Used in both card and details
  githubUrl: string;
  liveUrl: string;

  category: string; // Used for filtering (e.g., "Web Development", "AI / ML")

  // Detail Page Specific Fields
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  screenshots: string[];
  challenges: string;
  learned: string;
  future: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: LucideIcon;
  label: string;
}

export interface Stat {
  label: string;
  value: number | string;
  suffix: string;
  icon: LucideIcon;
}

export interface Personal {
  name: string;
  role: string;
  availability: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;
  aboutMe: string;
  footerTitle: string;
  footerSubtitle: string;
  resumeUrl: string;
  resumeButtonText: string;
  contactButtonText: string;
  viewProjectsButtonText: string;
  footerButtonText: string;
}
