"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-10 pb-8 border-t border-zinc-800 relative text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 pb-6 border-b border-zinc-800">
          
          {/* Brand details */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center border border-amber-400/30">
                <svg className="w-4.5 h-4.5 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z" />
                  <path d="m10 10 7 7" strokeLinecap="round" />
                  <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                  <path d="M19 13c-2 0-3 1.5-3 3s1 3 3 3" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight yellow-gradient-text">
                  TailorPoint
                </span>
                <span className="block text-[10px] text-zinc-500 font-mono tracking-widest text-right leading-none uppercase">
                  {language === "bn" ? "টেইলরপয়েন্ট" : "TailorPoint"}
                </span>
              </div>
            </div>
            
            <p className="text-sm text-zinc-300 leading-relaxed max-w-sm">
              {t("footer.desc")}
            </p>

            <div className="text-[15px] text-zinc-400 space-y-1.5">
              <div>{language === "bn" ? "📧 ইমেইল: tailorpoint@gmail.com" : "📧 Email: tailorpoint@gmail.com"}</div>
              <div>{language === "bn" ? "📞 হেল্পলাইন: +91-7001717263" : "📞 Helpline: +91-7001717263"}</div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-wider mb-2 font-display">
                {language === "bn" ? "ন্যাভিগেশন" : "Navigation"}
              </h4>
              <ul className="space-y-1.5 text-[13px] text-zinc-400">
                <li><a href="#features" className="hover:text-amber-400 transition-colors">{t("nav.features")}</a></li>
                <li><a href="#demo" className="hover:text-amber-400 transition-colors">{t("nav.demo")}</a></li>
                <li><a href="#pricing" className="hover:text-amber-400 transition-colors">{t("nav.pricing")}</a></li>
                <li><a href="#faq" className="hover:text-amber-400 transition-colors">{t("nav.faq")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-wider mb-2 font-display">
                {language === "bn" ? "আইনি নোটিশ" : "Legal"}
              </h4>
              <ul className="space-y-1.5 text-[13px] text-zinc-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">{language === "bn" ? "প্রাইভেসি পলিসি" : "Privacy Policy"}</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">{language === "bn" ? "ব্যবহারের শর্তাবলী" : "Terms of Service"}</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">{language === "bn" ? "রিফান্ড পলিসি" : "Refund Policy"}</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            {t("footer.rights")}
          </div>
          <div className="flex items-center gap-2">
            <span>Made with ❤️ for Indian Tailors</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
