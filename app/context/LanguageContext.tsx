"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../translations/dictionary";

type Language = "bn" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("bn");

  // Load preferred language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("tailorpoint-language") as Language;
    if (savedLang === "bn" || savedLang === "en") {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("tailorpoint-language", lang);
  };

  // Translation helper function
  const t = (key: string): string => {
    const keys = key.split(".");
    let current: any = translations[language];

    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to Bangla if not found in current language
        let fallback: any = translations["bn"];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            fallback = null;
            break;
          }
        }
        return fallback !== null ? fallback : key;
      }
    }

    return typeof current === "string" ? current : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
