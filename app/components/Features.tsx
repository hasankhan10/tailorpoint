"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 bg-zinc-900/30 border-y border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            {t("features.heading")}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            {t("features.subheading")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Feature 1: AI Preview */}
          <div className="glass-panel hover:glass-panel-gold rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] group reveal">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-zinc-100 mt-5">{t("features.item4Title")}</h3>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              {t("features.item4Desc")}
            </p>
          </div>

          {/* Feature 2: WhatsApp Measurements */}
          <div className="glass-panel hover:glass-panel-gold rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] group reveal delay-100">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center border border-green-500/20 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-zinc-100 mt-5">{t("features.item1Title")}</h3>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              {t("features.item1Desc")}
            </p>
          </div>

          {/* Feature 3: Payment Link */}
          <div className="glass-panel hover:glass-panel-gold rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] group reveal delay-200">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center border border-violet-500/20 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-zinc-100 mt-5">{t("features.item3Title")}</h3>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              {t("features.item3Desc")}
            </p>
          </div>

          {/* Feature 4: Billing Invoicing */}
          <div className="glass-panel hover:glass-panel-gold rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] group reveal delay-300">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-zinc-100 mt-5">{t("features.item2Title")}</h3>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              {t("features.item2Desc")}
            </p>
          </div>

          {/* Feature 5: Multi-Tailor CRM */}
          <div className="glass-panel hover:glass-panel-gold rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] group reveal delay-400">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center border border-pink-500/20 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-zinc-100 mt-5">{t("features.item5Title")}</h3>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              {t("features.item5Desc")}
            </p>
          </div>

          {/* Feature 6: Dashboard Analytics */}
          <div className="glass-panel hover:glass-panel-gold rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] group reveal delay-500">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-zinc-100 mt-5">{t("features.item6Title")}</h3>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              {t("features.item6Desc")}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
