"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function WhatsAppTab() {
  const { language, t } = useLanguage();
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("9876543210");
  const [measurements, setMeasurements] = useState({
    length: "42",
    chest: "38",
    waist: "34",
    shoulder: "18",
    sleeve: "24",
    neck: "15.5",
  });
  const [isSendingWa, setIsSendingWa] = useState(false);
  const [waSentMessage, setWaSentMessage] = useState<string | null>(null);

  // Sync client name with language defaults
  useEffect(() => {
    setClientName(language === "bn" ? "অভিষেক মুখার্জী" : "Abhishek Mukherjee");
    setWaSentMessage(null);
  }, [language]);

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSendingWa(true);
    setWaSentMessage(null);

    setTimeout(() => {
      setIsSendingWa(false);
      const msg = language === "bn"
        ? `*টেইলরপয়েন্ট কাপড়ের মাপ*\n\nহ্যালো ${clientName},\nআপনার জামার মাপগুলো নিচে দেওয়া হলো:\n-------------------------\n📏 লম্বা: ${measurements.length} ইঞ্চি\n👕 ছাতি: ${measurements.chest} ইঞ্চি\n👖 কোমর: ${measurements.waist} ইঞ্চি\n📐 কাঁধ/পুঁট: ${measurements.shoulder} ইঞ্চি\n👔 হাতা: ${measurements.sleeve} ইঞ্চি\n🧣 গলা: ${measurements.neck} ইঞ্চি\n-------------------------\nঅর্ডার নম্বর: #TP-8032\n\nআমাদের দোকানে আসার জন্য অনেক ধন্যবাদ!\n- নিউ ক্লাসিক টেইলার্স`
        : `*TailorPoint Client Sizes*\n\nHello ${clientName},\nHere are your custom garment measurements:\n-------------------------\n📏 Length: ${measurements.length} inches\n👕 Chest: ${measurements.chest} inches\n👖 Waist: ${measurements.waist} inches\n📐 Shoulder: ${measurements.shoulder} inches\n👔 Sleeve: ${measurements.sleeve} inches\n🧣 Neck: ${measurements.neck} inches\n-------------------------\nOrder ID: #TP-8032\n\nThank you for choosing our boutique shop!\n- New Classic Tailors`;
      setWaSentMessage(msg);
    }, 1500);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      
      {/* Inputs Form */}
      <form onSubmit={handleSendWhatsApp} className="space-y-4 bg-zinc-950/60 border border-zinc-800/80 p-6 rounded-2xl">
        <div className="text-sm font-bold text-amber-400 font-display uppercase tracking-wider mb-2">
          {language === "bn" ? "📋 কাস্টমারের নাম আর মাপ লিখুন" : "📋 Enter Customer Name & Measurements"}
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-zinc-400 mb-1.5">{t("sandbox.whatsapp.labelName")}</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1.5">{t("sandbox.whatsapp.labelPhone")}</label>
            <input
              type="text"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2">
          <div>
            <label className="block text-xs text-zinc-400 mb-1">{language === "bn" ? "লম্বা (Length)" : "Length (in)"}</label>
            <input
              type="text"
              value={measurements.length}
              onChange={(e) => setMeasurements({...measurements, length: e.target.value})}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 text-center focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1">{language === "bn" ? "ছাতি (Chest)" : "Chest (in)"}</label>
            <input
              type="text"
              value={measurements.chest}
              onChange={(e) => setMeasurements({...measurements, chest: e.target.value})}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 text-center focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1">{language === "bn" ? "কোমর (Waist)" : "Waist (in)"}</label>
            <input
              type="text"
              value={measurements.waist}
              onChange={(e) => setMeasurements({...measurements, waist: e.target.value})}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 text-center focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1">{language === "bn" ? "পুঁট/কাঁধ" : "Shoulder"}</label>
            <input
              type="text"
              value={measurements.shoulder}
              onChange={(e) => setMeasurements({...measurements, shoulder: e.target.value})}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 text-center focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1">{language === "bn" ? "হাতা (Sleeve)" : "Sleeve"}</label>
            <input
              type="text"
              value={measurements.sleeve}
              onChange={(e) => setMeasurements({...measurements, sleeve: e.target.value})}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 text-center focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1">{language === "bn" ? "গলা (Neck)" : "Neck"}</label>
            <input
              type="text"
              value={measurements.neck}
              onChange={(e) => setMeasurements({...measurements, neck: e.target.value})}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 text-center focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSendingWa}
          className="w-full mt-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-600/10 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isSendingWa ? (
            <>
              <svg className="animate-spin h-4.5 w-4.5 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {language === "bn" ? "মাপের মেসেজ তৈরি হচ্ছে..." : "Generating message..."}
            </>
          ) : (
            <span>⚡ {language === "bn" ? "হোয়াটসঅ্যাপে মাপ পাঠান" : "Send Measurements via WhatsApp"}</span>
          )}
        </button>
      </form>

      {/* Output WhatsApp Mockup */}
      <div className="bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden flex flex-col aspect-[4/3] lg:aspect-auto lg:h-[480px] shadow-inner">
        {/* Mock WhatsApp Header */}
        <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
          <div className="w-8.5 h-8.5 rounded-full bg-emerald-800 text-zinc-100 flex items-center justify-center font-bold text-xs">
            {clientName ? clientName.substring(0, 2) : "WA"}
          </div>
          <div>
            <div className="text-white text-sm font-bold leading-tight">{clientName}</div>
            <div className="text-emerald-300 text-[10px] leading-tight">Online</div>
          </div>
        </div>
        {/* Mock Chat Body */}
        <div className="flex-1 p-4 bg-[#efeae2] dark:bg-zinc-900/60 overflow-y-auto flex flex-col justify-end space-y-3">
          
          {waSentMessage ? (
            <div className="bg-white dark:bg-[#056162] text-slate-800 dark:text-zinc-100 p-3.5 rounded-2xl rounded-tr-none max-w-[85%] self-end shadow-sm text-xs space-y-1 relative border border-zinc-200/50 dark:border-none">
              <pre className="font-sans whitespace-pre-wrap leading-relaxed">
                {waSentMessage}
              </pre>
              <span className="block text-right text-[9px] text-zinc-400 dark:text-emerald-300 mt-1">
                {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} ✔✔
              </span>
            </div>
          ) : (
            <div className="text-center text-zinc-400 dark:text-zinc-500 text-xs py-8 px-4 border border-dashed border-zinc-800/80 rounded-xl max-w-xs mx-auto mb-10">
              {language === "bn"
                ? "বাঁদিকের ফর্ম পূরণ করে বাটনে ক্লিক করলেই এখানে হোয়াটসঅ্যাপ মেসেজের ডেমো দেখতে পাবেন।"
                : "Fill in the form on the left and click the button to preview the WhatsApp message here."}
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
