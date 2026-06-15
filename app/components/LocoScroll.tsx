"use client";

import React, { useEffect } from "react";

export default function LocoScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let locoScroll: any = null;

    // Dynamically import locomotive-scroll to prevent SSR issues
    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        locoScroll = new LocomotiveScroll({
          lenisOptions: {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom premium smooth easing
            smoothWheel: true,
          },
        });
      } catch (error) {
        console.error("Locomotive Scroll initialization failed:", error);
      }
    };

    // Intersection Observer for scroll reveal animations
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // Trigger once and unobserve
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px", // Trigger when 10% from bottom of viewport
        threshold: 0.05,
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    initLocomotiveScroll();

    return () => {
      observer.disconnect();
      if (locoScroll && typeof locoScroll.destroy === "function") {
        locoScroll.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
