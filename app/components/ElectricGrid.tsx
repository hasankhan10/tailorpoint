"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ElectricGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Mouse position states with easing target positions
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false,
    lastMoved: 0,
    intensity: 0, // fading in/out interactive sparks
  });

  // Track the glow values of excited dots
  const glowingDotsRef = useRef<Map<string, number>>(new Map());

  // Track theme mutation observer for light/dark mode transitions
  useEffect(() => {
    if (typeof window === "undefined") return;

    const getTheme = () => {
      return document.documentElement.classList.contains("light") ? "light" : "dark";
    };

    setTheme(getTheme());

    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Grid details
    const spacing = 32; // density of dot-grid

    // Resize event
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY + window.scrollY; // adjust for vertical scrolling
      mouseRef.current.active = true;
      mouseRef.current.lastMoved = Date.now();
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Helper: generate electric lightning bolt path
    const generateBoltPath = (
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ): { x: number; y: number }[] => {
      return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
    };

    // Helper: draw single electric bolt with core
    const drawElectricBolt = (
      points: { x: number; y: number }[],
      color: string,
      width: number,
      opacity: number
    ) => {
      if (points.length < 2) return;

      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // 1. Draw outer electric plasma glow envelope
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = width * 3;
      ctx.shadowBlur = 8;
      ctx.shadowColor = color;
      ctx.stroke();

      // 2. Draw thin white hot core
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = width * 0.8;
      ctx.shadowBlur = 0;
      ctx.stroke();

      ctx.restore();
    };

    // MAIN RENDER LOOP
    const tick = () => {
      // Clear canvas with a transparent overlay
      ctx.clearRect(0, 0, width, height);

      // 1. Update mouse position with fluid easing
      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.12;
      m.y += (m.targetY - m.y) * 0.12;

      // Smoothly fade mouse electricity in and out
      const now = Date.now();
      const isIdle = now - m.lastMoved > 1500;
      const targetIntensity = m.active && !isIdle ? 1.0 : 0.0;
      m.intensity += (targetIntensity - m.intensity) * 0.08;

      // Adjust positions for scroll offset relative to canvas bounds
      const canvasScrollY = window.scrollY;

      const cols = Math.ceil(width / spacing) + 1;
      const startRow = Math.floor(canvasScrollY / spacing);
      const endRow = Math.ceil((canvasScrollY + height) / spacing);

      // 2. Calculate mouse interactive connections
      if (m.intensity > 0.01) {
        const connectionRadius = 160;

        // Localized grid lookup around mouse positions (O(1) checks)
        const mouseCol = Math.round(m.x / spacing);
        const mouseRow = Math.round(m.y / spacing);
        const lookRange = 5;

        const candidates: { col: number; row: number; x: number; y: number; dist: number }[] = [];

        for (let c = mouseCol - lookRange; c <= mouseCol + lookRange; c++) {
          for (let r = mouseRow - lookRange; r <= mouseRow + lookRange; r++) {
            if (c >= 0 && c < cols && r >= startRow - 2 && r <= endRow + 2) {
              const dotX = c * spacing;
              const dotY = r * spacing;
              const dist = Math.hypot(dotX - m.x, dotY - m.y);

              if (dist < connectionRadius) {
                candidates.push({ col: c, row: r, x: dotX, y: dotY, dist });
              }
            }
          }
        }

        // Connect to max 5 nearest dots
        const nearestCandidates = candidates
          .sort((a, b) => a.dist - b.dist)
          .slice(0, 5);

        const lensRadius = 180;
        const maxDisplacement = 14;

        nearestCandidates.forEach(({ col, row, x, y, dist }) => {
          let targetX = x;
          let targetY = y;

          if (dist < lensRadius) {
            const ratio = dist / lensRadius;
            const strength = Math.sin(ratio * Math.PI);
            const push = strength * maxDisplacement * m.intensity;
            targetX += ((x - m.x) / dist) * push;
            targetY += ((y - m.y) / dist) * push;
          }

          // Generate organic jittering bolt from cursor to dot
          const points = generateBoltPath(m.x, m.y, targetX, targetY);

          // Scrolled points calculation
          const scrolledPoints = points.map((p) => ({
            x: p.x,
            y: p.y - canvasScrollY,
          }));

          const isGold = (col + row) % 2 === 0;
          const color = isGold 
            ? (theme === "light" ? "#ea580c" : "#f59e0b") 
            : (theme === "light" ? "#6d28d9" : "#8b5cf6");

          const boltWidth = 1.0 * (1 - dist / connectionRadius);
          const boltOpacity = m.intensity * (1 - dist / connectionRadius) * 0.9;

          drawElectricBolt(scrolledPoints, color, boltWidth, boltOpacity);

          // Charge dot glow intensity
          const key = `${col},${row}`;
          const currentGlow = glowingDotsRef.current.get(key) || 0;
          glowingDotsRef.current.set(key, Math.max(currentGlow, 1.0 - dist / connectionRadius));

          // Draw tiny spark flash particle at point of grid contact
          ctx.beginPath();
          ctx.arc(targetX, targetY - canvasScrollY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowBlur = 6;
          ctx.shadowColor = color;
          ctx.fill();
        });
      }

      // 5. Decay excited dots glow values
      glowingDotsRef.current.forEach((glow, key) => {
        const newGlow = glow * 0.88;
        if (newGlow < 0.01) {
          glowingDotsRef.current.delete(key);
        } else {
          glowingDotsRef.current.set(key, newGlow);
        }
      });

      // 6. Draw background dot grid dynamically for current viewport
      const lensRadius = 180;
      const maxDisplacement = 14;

      for (let c = 0; c < cols; c++) {
        for (let r = startRow; r <= endRow; r++) {
          const dotX = c * spacing;
          const dotY = r * spacing;

          const dx = dotX - m.x;
          const dy = dotY - m.y;
          const dist = Math.hypot(dx, dy);

          let drawX = dotX;
          let drawY = dotY;
          let sizeZoom = 0;
          let opacityBoost = 0;

          if (m.intensity > 0.01 && dist < lensRadius) {
            const ratio = dist / lensRadius;
            const strength = Math.sin(ratio * Math.PI);
            const push = strength * maxDisplacement * m.intensity;
            drawX += (dx / dist) * push;
            drawY += (dy / dist) * push;

            sizeZoom = (1 - ratio) * 2.0 * m.intensity;
            opacityBoost = (1 - ratio) * 0.15 * m.intensity;
          }

          const adjustedY = drawY - canvasScrollY;

          const key = `${c},${r}`;
          const glow = glowingDotsRef.current.get(key) || 0;

          const baseDotOpacity = theme === "light" ? 0.06 : 0.05;
          const dotOpacity = Math.min(1.0, baseDotOpacity + glow * 0.45 + opacityBoost);
          
          ctx.beginPath();
          const size = 1.2 + glow * 2.2 + sizeZoom;
          ctx.arc(drawX, adjustedY, size, 0, Math.PI * 2);

          if (glow > 0.01) {
            const isGold = (c + r) % 2 === 0;
            ctx.fillStyle = isGold 
              ? `rgba(217, 119, 6, ${dotOpacity})` 
              : `rgba(139, 92, 246, ${dotOpacity})`;
            ctx.shadowBlur = glow * 8;
            ctx.shadowColor = isGold ? "#fbbf24" : "#a78bfa";
          } else {
            ctx.fillStyle = theme === "light" 
              ? `rgba(0, 0, 0, ${dotOpacity})` 
              : `rgba(255, 255, 255, ${dotOpacity})`;
            ctx.shadowBlur = 0;
          }
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none transition-opacity duration-700"
    />
  );
}
