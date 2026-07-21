import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export function GlassCard({ children, className, glow = false, ...props }: GlassCardProps) {
  return (
    <div className={cn("relative group", className)} {...props}>
      {/* Ambient Radial Glow */}
      {glow && (
        <div className="absolute inset-0 -z-10 bg-primary/20 opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-700 pointer-events-none rounded-[inherit]" />
      )}
      
      {/* Main Glass Panel */}
      <div className={cn("liquid-glass h-full w-full rounded-[inherit]")}>
        {children}
      </div>
    </div>
  );
}
