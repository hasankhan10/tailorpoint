"use client";

import React, { useState } from "react";
import WhatsAppTab from "./WhatsAppTab";
import PaymentTab from "./PaymentTab";
import BillingTab from "./BillingTab";
import { useLanguage } from "../context/LanguageContext";

export default function Sandbox() {
  const [sandboxTab, setSandboxTab] = useState<"whatsapp" | "payment" | "billing">("whatsapp");
  const { t } = useLanguage();

  return (
    <section id="demo" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            {t("sandbox.heading")}
          </h2>
          <p className="text-zinc-400 text-base mt-3">
            {t("sandbox.subheading")}
          </p>
        </div>

        <div className="glass-panel-gold rounded-3xl overflow-hidden shadow-2xl reveal-scale delay-100">
          {/* Sandbox Tabs Nav */}
          <div className="flex flex-col sm:flex-row border-b border-zinc-800 bg-zinc-950/80 p-2 gap-2">
            <button
              onClick={() => setSandboxTab("whatsapp")}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold font-display flex items-center justify-center gap-2 transition-all cursor-pointer ${
                sandboxTab === "whatsapp" 
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md" 
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60"
              }`}
            >
              {t("sandbox.tabWhatsApp")}
            </button>
            <button
              onClick={() => setSandboxTab("payment")}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold font-display flex items-center justify-center gap-2 transition-all cursor-pointer ${
                sandboxTab === "payment" 
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md" 
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60"
              }`}
            >
              {t("sandbox.tabPayment")}
            </button>
            <button
              onClick={() => setSandboxTab("billing")}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold font-display flex items-center justify-center gap-2 transition-all cursor-pointer ${
                sandboxTab === "billing" 
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md" 
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60"
              }`}
            >
              {t("sandbox.tabBilling")}
            </button>
          </div>

          {/* Sandbox Content Container */}
          <div className="p-6 sm:p-8 bg-zinc-900/40">
            {sandboxTab === "whatsapp" && <WhatsAppTab />}
            {sandboxTab === "payment" && <PaymentTab />}
            {sandboxTab === "billing" && <BillingTab />}
          </div>
        </div>

      </div>
    </section>
  );
}
