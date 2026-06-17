"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function AiSimulator() {
  const [selectedFabric, setSelectedFabric] = useState<"none" | "blue" | "gold">("none");
  const [isScanning, setIsScanning] = useState(false);
  const [previewActive, setPreviewActive] = useState(false);
  const { language, t } = useLanguage();

  const handleFabricSelect = (fabric: "none" | "blue" | "gold") => {
    if (fabric === "none") {
      setSelectedFabric("none");
      setPreviewActive(false);
      return;
    }
    
    setSelectedFabric(fabric);
    setIsScanning(true);
    setPreviewActive(false);

    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setPreviewActive(true);
    }, 2000);
  };

  return (
    <div className="lg:col-span-5 relative reveal delay-200">
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-violet-500/10 rounded-3xl blur-2xl -z-10" />
      
      <div className="glass-panel-gold rounded-3xl p-5 shadow-2xl relative overflow-hidden">
        {/* Simulator Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span className="text-xs font-mono text-zinc-400 ml-2">TailorPoint AI Simulator</span>
          </div>
          <div className="px-2.5 py-0.5 rounded bg-amber-500/10 text-[10px] font-bold text-amber-400 tracking-wider uppercase">
            {language === "bn" ? "লাইভ ডেমো" : "Live Demo"}
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <div className="text-sm font-semibold font-display text-zinc-200">
            {language === "bn" ? "ধাপ ১: যেকোনো কাপড় বা ডিজাইন সিলেক্ট করে দেখুন" : "Step 1: Select any fabric or design to preview"}
          </div>

          {/* Fabrics Options */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleFabricSelect("none")}
              className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                selectedFabric === "none"
                  ? "border-zinc-500 bg-zinc-800 text-zinc-100"
                  : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700"
              }`}
            >
              {language === "bn" ? "👕 সাধারণ কাপড়" : "👕 Plain Fabric"}
            </button>
            <button
              onClick={() => handleFabricSelect("blue")}
              className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                selectedFabric === "blue"
                  ? "border-amber-500/60 bg-amber-500/10 text-amber-300"
                  : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700"
              }`}
            >
              {language === "bn" ? "🧥 নীল স্যুট" : "🧥 Blue Suit"}
            </button>
            <button
              onClick={() => handleFabricSelect("gold")}
              className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                selectedFabric === "gold"
                  ? "border-violet-500/60 bg-violet-500/10 text-violet-300"
                  : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700"
              }`}
            >
              {language === "bn" ? "🕌 শেরওয়ানি" : "🕌 Sherwani"}
            </button>
          </div>

          {/* Image Viewport Container */}
          <div className="relative aspect-[4/5] w-full rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center">
            
            {/* Default State: Before Fabric Stitching */}
            {selectedFabric === "none" && (
              <div className="relative w-full h-full">
                <Image
                  src="/client_before.png"
                  alt={language === "bn" ? "কাস্টমার ও আন-স্টিচড কাপড়" : "Customer & unstitched fabric"}
                  fill
                  className="object-cover"
                  sizes="(max-w-md) 100vw"
                  priority
                />
                <div className="absolute bottom-3 left-3 right-3 bg-zinc-950/70 backdrop-blur-md px-3 py-2 rounded-xl border border-zinc-800">
                  <p className="text-xs font-medium text-zinc-300 text-center">
                    {language === "bn" ? "কাস্টমার হাতে থানের কাপড় নিয়ে দাঁড়িয়ে আছেন" : "Customer standing with unstitched fabric"}
                  </p>
                </div>
              </div>
            )}

            {/* Blue Velvet Suit State */}
            {selectedFabric === "blue" && (
              <div className="relative w-full h-full">
                <Image
                  src={previewActive ? "/client_blue_suit.png" : "/client_before.png"}
                  alt={language === "bn" ? "রয়্যাল ব্লু স্যুট প্রিভিউ" : "Royal Blue Suit Preview"}
                  fill
                  className="object-cover"
                  sizes="(max-w-md) 100vw"
                />
                
                {/* Scan Line Overlay when scanning */}
                {isScanning && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_#f59e0b] animate-scanline" />
                )}

                {/* Scanner Status Toast */}
                <div className="absolute bottom-3 left-3 right-3 bg-zinc-950/80 backdrop-blur-md px-3 py-2 rounded-xl border border-zinc-800 text-center">
                  {isScanning ? (
                    <span className="text-xs text-amber-400 font-semibold flex items-center justify-center gap-2">
                      <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {t("aiSim.generating")}
                    </span>
                  ) : (
                    <span className="text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                      ✨ {t("aiSim.success")}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Gold Sherwani State */}
            {selectedFabric === "gold" && (
              <div className="relative w-full h-full">
                <Image
                  src={previewActive ? "/client_gold_sherwani.png" : "/client_before.png"}
                  alt={language === "bn" ? "গোল্ডেন শেরওয়ানি প্রিভিউ" : "Golden Sherwani Preview"}
                  fill
                  className="object-cover"
                  sizes="(max-w-md) 100vw"
                />
                
                {/* Scan Line Overlay when scanning */}
                {isScanning && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-violet-400 to-transparent shadow-[0_0_15px_#8b5cf6] animate-scanline" />
                )}

                {/* Scanner Status Toast */}
                <div className="absolute bottom-3 left-3 right-3 bg-zinc-950/80 backdrop-blur-md px-3 py-2 rounded-xl border border-zinc-800 text-center">
                  {isScanning ? (
                    <span className="text-xs text-violet-400 font-semibold flex items-center justify-center gap-2">
                      <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {t("aiSim.generating")}
                    </span>
                  ) : (
                    <span className="text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                      ✨ {t("aiSim.success")}
                    </span>
                  )}
                </div>
              </div>
            )}

          </div>

          {/* Simulator Control Description */}
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-3 text-[15px] text-zinc-400 leading-relaxed text-center">
            {language === "bn" ? (
              <>
                💡 <strong>টেইলর ভাইদের সুবিধা:</strong> কাস্টমার কাপড় বেছে নেওয়ার পরই দেখতে পাবেন বানানোর পর কেমন লাগবে। ডিজাইন নিয়ে কাস্টমারের সাথে পরে আর কোনো ঝগড়াঝাঁটি বা ক্যাচল হবে না!
              </>
            ) : (
              <>
                💡 <strong>Tailor Benefit:</strong> Let clients preview the stitched look immediately after fabric selection. Eliminate downstream disputes and fitting complaints!
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
