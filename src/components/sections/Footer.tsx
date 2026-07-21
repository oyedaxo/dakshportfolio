import { personalData } from "@/data/personal";
import { navLinks } from "@/data/navigation";
import { socialsData } from "@/data/socials";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-foreground/[0.02] border-t border-foreground/5 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6 max-w-[1320px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Logo & Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <span className="text-2xl font-black tracking-tight text-primary">
                {personalData.name.charAt(0)}C
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building intelligent products and beautiful web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-foreground">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-foreground">Connect</h4>
            <div className="flex items-center gap-3">
              {socialsData.map((social, index) => (
                <Link 
                  key={index}
                  href={social.url}
                  target="_blank"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
          
        </div>

        <div className="h-px w-full bg-foreground/5 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
          <a 
            href="#" 
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
