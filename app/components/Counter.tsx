"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

const toBengaliNumber = (num: number): string => {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .split("")
    .map((char) => (/[0-9]/.test(char) ? bengaliDigits[parseInt(char)] : char))
    .join("");
};

export default function Counter({ target, duration = 1500, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasStartedRef = useRef(false);
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          startCountAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  const startCountAnimation = () => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing outQuad for smooth deceleration
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.round(easeProgress * target);
      
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <span ref={elementRef}>
      {language === "bn" ? toBengaliNumber(count) : count}
      {suffix}
    </span>
  );
}
