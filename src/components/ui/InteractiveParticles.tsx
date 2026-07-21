"use client";

import React, { useEffect, useRef } from "react";

export function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set initial mouse position to center
    mouseRef.current.x = width / 2;
    mouseRef.current.y = height / 2;
    mouseRef.current.targetX = width / 2;
    mouseRef.current.targetY = height / 2;

    const colors = [
      "#3b82f6", // blue
      "#8b5cf6", // purple
      "#ef4444", // red
      "#f59e0b", // yellow
      "#10b981", // green
    ];

    class Particle {
      x: number;
      y: number;
      z: number;
      color: string;
      size: number;

      constructor() {
        this.x = (Math.random() - 0.5) * 3000;
        this.y = (Math.random() - 0.5) * 3000;
        this.z = Math.random() * 2000;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = Math.random() * 2 + 0.5;
      }

      update(speed: number) {
        this.z -= speed;
        if (this.z <= 0) {
          this.z = 2000;
          this.x = (Math.random() - 0.5) * 3000;
          this.y = (Math.random() - 0.5) * 3000;
        }
      }

      draw(ctx: CanvasRenderingContext2D, cx: number, cy: number, speed: number) {
        const perspective = 800; // Field of view
        const scale = perspective / (perspective + this.z);
        
        const screenX = cx + this.x * scale;
        const screenY = cy + this.y * scale;

        // Calculate previous position for the trail
        const prevZ = this.z + speed;
        const prevScale = perspective / (perspective + prevZ);
        const prevScreenX = cx + this.x * prevScale;
        const prevScreenY = cy + this.y * prevScale;

        // Only draw if on screen
        if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
          ctx.beginPath();
          ctx.moveTo(prevScreenX, prevScreenY);
          ctx.lineTo(screenX, screenY);
          
          // Fade based on Z depth
          const alpha = Math.max(0, 1 - (this.z / 2000));
          
          ctx.strokeStyle = this.color;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = this.size * scale * 2;
          ctx.lineCap = "round";
          ctx.stroke();
          ctx.closePath();
        }
      }
    }

    let particles: Particle[] = [];
    let lastTime = performance.now();

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Increase particle count significantly for the "Antigravity" look
      particles = [];
      const density = window.innerWidth < 768 ? 400 : 1200; // Responsive density
      for (let i = 0; i < density; i++) {
        particles.push(new Particle());
      }
    };

    const animate = (currentTime: number) => {
      // Calculate Delta Time (dt) to ensure consistent speed across 60hz, 90hz, 144hz monitors
      const dt = (currentTime - lastTime) / (1000 / 90); // Normalize to 90fps
      lastTime = currentTime;

      // Clear canvas with a very slight fade for motion blur effect
      ctx.clearRect(0, 0, width, height);
      
      // Smoothly interpolate mouse position for fluid movement
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05 * dt;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05 * dt;

      const baseSpeed = 6;
      const speed = baseSpeed * dt; // Warp speed scaled by dt

      particles.forEach((p) => {
        p.update(speed);
        p.draw(ctx, mouseRef.current.x, mouseRef.current.y, speed);
      });

      // Reset alpha
      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      // Return to center when mouse leaves
      mouseRef.current.targetX = width / 2;
      mouseRef.current.targetY = height / 2;
    };

    window.addEventListener("resize", init);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    init();
    lastTime = performance.now();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[0] opacity-80 mix-blend-screen dark:mix-blend-lighten"
    />
  );
}
