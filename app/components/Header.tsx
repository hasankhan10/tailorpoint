"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

type ThemeMode = "light" | "dark" | "system";

export default function Header() {
  const [theme, setTheme] = useState<ThemeMode>("system");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { language, setLanguage, t } = useLanguage();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("tailorpoint-theme") as ThemeMode;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme("system");
    }
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement;
    if (mode === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else if (mode === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("light");
      root.classList.remove("dark");
    }
  };

  const handleThemeChange = (mode: ThemeMode) => {
    setTheme(mode);
    applyTheme(mode);
    localStorage.setItem("tailorpoint-theme", mode);
    setDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-zinc-800/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-400/30 group-hover:scale-105 transition-transform duration-200">
            {/* Needle and Thread SVG */}
            <svg className="w-5 h-5 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z" />
              <path d="m10 10 7 7" strokeLinecap="round" />
              <circle cx="9" cy="9" r="1.5" fill="currentColor" />
              <path d="M19 13c-2 0-3 1.5-3 3s1 3 3 3" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight yellow-gradient-text group-hover:opacity-90 transition-opacity">
              TailorPoint
            </span>
            <span className="block text-[10px] text-zinc-400 font-mono tracking-widest text-right leading-none uppercase">
              {language === "bn" ? "টেইলরপয়েন্ট" : "TailorPoint"}
            </span>
          </div>
        </Link>
        
        
        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-350">
          <Link href="/#features" className="hover:text-amber-400 transition-colors">{t("nav.features")}</Link>
          <Link href="/#demo" className="hover:text-amber-400 transition-colors">{t("nav.demo")}</Link>
          <Link href="/#pricing" className="hover:text-amber-400 transition-colors">{t("nav.pricing")}</Link>
          <Link href="/#faq" className="hover:text-amber-400 transition-colors">{t("nav.faq")}</Link>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          
          {/* Theme Mode Toggle Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-10 h-10 rounded-full border border-zinc-800 hover:bg-zinc-900/60 flex items-center justify-center text-zinc-300 hover:text-zinc-100 transition-all cursor-pointer"
              title="থিম পরিবর্তন করুন"
              aria-label="Toggle theme dropdown"
            >
              {theme === "light" && (
                <svg className="w-5 h-5 text-amber-500 animate-pulse-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )}
              {theme === "dark" && (
                <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
              {theme === "system" && (
                <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2.5 w-36 rounded-xl glass-panel-gold border border-amber-500/20 shadow-2xl p-1.5 flex flex-col gap-1 z-[100] animate-fade-in">
                <button
                  onClick={() => handleThemeChange("light")}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold font-display cursor-pointer transition-all ${
                    theme === "light"
                      ? "bg-amber-500 text-slate-950"
                      : "text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900/60"
                  }`}
                >
                  ☀️ Light Mode
                </button>
                <button
                  onClick={() => handleThemeChange("dark")}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold font-display cursor-pointer transition-all ${
                    theme === "dark"
                      ? "bg-amber-500 text-slate-950"
                      : "text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900/60"
                  }`}
                >
                  🌙 Dark Mode
                </button>
                <button
                  onClick={() => handleThemeChange("system")}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold font-display cursor-pointer transition-all ${
                    theme === "system"
                      ? "bg-amber-500 text-slate-950"
                      : "text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900/60"
                  }`}
                >
                  💻 System
                </button>
              </div>
            )}
          </div>

          {/* Language Selection Dropdown */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="px-3 h-10 rounded-full border border-zinc-800 hover:bg-zinc-900/60 flex items-center justify-center gap-1.5 text-zinc-300 hover:text-zinc-100 transition-all cursor-pointer text-xs font-semibold font-display"
              title={language === "bn" ? "ভাষা পরিবর্তন করুন" : "Switch Language"}
              aria-label="Toggle language dropdown"
            >
              <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{language === "bn" ? "বাংলা" : "English"}</span>
              <svg className={`w-3 h-3 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2.5 w-32 rounded-xl glass-panel-gold border border-amber-500/20 shadow-2xl p-1.5 flex flex-col gap-1 z-[100] animate-fade-in">
                <button
                  onClick={() => {
                    setLanguage("bn");
                    setLangDropdownOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold font-display cursor-pointer transition-all ${
                    language === "bn"
                      ? "bg-amber-500 text-slate-950"
                      : "text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900/60"
                  }`}
                >
                  <span>বাংলা</span>
                  {language === "bn" && <span className="text-[10px]">✓</span>}
                </button>
                <button
                  onClick={() => {
                    setLanguage("en");
                    setLangDropdownOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold font-display cursor-pointer transition-all ${
                    language === "en"
                      ? "bg-amber-500 text-slate-950"
                      : "text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900/60"
                  }`}
                >
                  <span>English</span>
                  {language === "en" && <span className="text-[10px]">✓</span>}
                </button>
              </div>
            )}
          </div>

          {/* Login Link */}
          <Link 
            href="/login" 
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-zinc-300 hover:text-amber-400 hover:bg-zinc-900/60 border border-zinc-800/85 transition-all duration-200 cursor-pointer"
          >
            {t("nav.login")}
          </Link>

          {/* Call To Action */}
          <Link 
            href="/#demo" 
            className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            {t("nav.freeTrial")}
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-zinc-800 hover:bg-zinc-900/60 flex items-center justify-center text-zinc-300 hover:text-zinc-100 transition-all cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Nav Links Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800/60 bg-zinc-950/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4 animate-fade-in">
          <Link
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold font-display text-zinc-300 hover:text-amber-400 py-2 border-b border-zinc-800/30"
          >
            {t("nav.features")}
          </Link>
          <Link
            href="/#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold font-display text-zinc-300 hover:text-amber-400 py-2 border-b border-zinc-800/30"
          >
            {t("nav.demo")}
          </Link>
          <Link
            href="/#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold font-display text-zinc-300 hover:text-amber-400 py-2 border-b border-zinc-800/30"
          >
            {t("nav.pricing")}
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold font-display text-zinc-300 hover:text-amber-400 py-2 border-b border-zinc-800/30"
          >
            {t("nav.faq")}
          </Link>
          <Link
            href="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold font-display text-amber-400 py-2 flex items-center justify-between mt-1"
          >
            <span>{t("nav.mobileLogin")}</span>
            <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </header>
  );
}
