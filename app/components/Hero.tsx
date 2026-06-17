"use client";

import React from "react";
import AiSimulator from "./AiSimulator";
import Counter from "./Counter";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-12 pb-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: CTA & Pitch */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left reveal">
            <div className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-xs font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
              {t("hero.badge")}
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 leading-[1.15] sm:leading-[1.15]">
              {t("hero.titleStart")}{" "}
              <span className="yellow-gradient-text">
                {t("hero.titleEnd")}
              </span>
            </h1>
            
            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#demo" 
                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 hover:scale-[1.02] shadow-xl shadow-amber-500/10 active:scale-95 transition-all duration-200"
              >
                {t("hero.ctaDemo")}
              </a>
              <a 
                href="#features" 
                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl text-base font-bold text-zinc-100 border border-zinc-700/80 hover:bg-zinc-900/60 active:scale-95 transition-all duration-200"
              >
                {t("hero.ctaFeatures")}
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-zinc-800">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-extrabold font-display text-amber-400">
                  <Counter target={50} suffix="+" />
                </div>
                <div className="text-xs text-zinc-400 mt-1">{t("hero.statShops")}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-extrabold font-display text-violet-400">
                  <Counter target={500} suffix="+" />
                </div>
                <div className="text-xs text-zinc-400 mt-1">{t("hero.statDelivered")}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-extrabold font-display text-emerald-400">
                  <Counter target={90} suffix="%" />
                </div>
                <div className="text-xs text-zinc-400 mt-1">{t("hero.statTimeSaved")}</div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Preview Simulator UI */}
          <AiSimulator />

        </div>
      </div>
    </section>
  );
}
