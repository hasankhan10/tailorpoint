"use client";

import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function DashboardWhatsApp() {
  const { t } = useLanguage();
  const [whatsappSettings, setWhatsappSettings] = useState({
    orderBooking: true,
    workStart: false,
    orderReady: true,
    paymentLinkSend: true
  });

  return (
    <div className="space-y-6 animate-fade-in text-left">
      <div>
        <h2 className="text-xl font-bold font-display text-zinc-100">{t("dash.whatsapp.title")}</h2>
        <p className="text-xs text-zinc-455 mt-0.5">{t("dash.whatsapp.desc")}</p>
      </div>

      <div className="max-w-2xl glass-panel border border-zinc-850 rounded-2xl p-6 sm:p-8 space-y-6">
        
        {/* Integration status */}
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/25 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <h4 className="text-xs font-bold text-zinc-200 font-display">{t("dash.whatsapp.connectedBadge")}</h4>
              <p className="text-[9px] text-zinc-400 font-sans mt-0.5">{t("dash.whatsapp.connectedSub")}</p>
            </div>
          </div>
          <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/10 font-display">
            {t("dash.whatsapp.statusConnected")}
          </span>
        </div>

        {/* Configuration Toggles */}
        <div className="space-y-4 font-sans text-xs">
          
          {/* Toggle Item */}
          <div className="flex justify-between items-center p-3.5 bg-zinc-900/40 border border-zinc-850 rounded-xl hover:border-zinc-800 transition-all">
            <div>
              <h4 className="font-bold text-zinc-200">{t("dash.whatsapp.toggleBookingTitle")}</h4>
              <p className="text-[10px] text-zinc-450 mt-0.5">{t("dash.whatsapp.toggleBookingDesc")}</p>
            </div>
            <button
              onClick={() => setWhatsappSettings(prev => ({ ...prev, orderBooking: !prev.orderBooking }))}
              className={`w-10 h-6 rounded-full p-1 transition-colors duration-250 cursor-pointer ${
                whatsappSettings.orderBooking ? "bg-amber-500 flex justify-end" : "bg-zinc-850 flex justify-start"
              }`}
            >
              <span className="w-4 h-4 bg-slate-950 rounded-full shadow-sm" />
            </button>
          </div>

          {/* Toggle Item */}
          <div className="flex justify-between items-center p-3.5 bg-zinc-900/40 border border-zinc-850 rounded-xl hover:border-zinc-800 transition-all">
            <div>
              <h4 className="font-bold text-zinc-200">{t("dash.whatsapp.toggleWorkTitle")}</h4>
              <p className="text-[10px] text-zinc-450 mt-0.5">{t("dash.whatsapp.toggleWorkDesc")}</p>
            </div>
            <button
              onClick={() => setWhatsappSettings(prev => ({ ...prev, workStart: !prev.workStart }))}
              className={`w-10 h-6 rounded-full p-1 transition-colors duration-250 cursor-pointer ${
                whatsappSettings.workStart ? "bg-amber-500 flex justify-end" : "bg-zinc-850 flex justify-start"
              }`}
            >
              <span className="w-4 h-4 bg-slate-950 rounded-full shadow-sm" />
            </button>
          </div>

          {/* Toggle Item */}
          <div className="flex justify-between items-center p-3.5 bg-zinc-900/40 border border-zinc-850 rounded-xl hover:border-zinc-800 transition-all">
            <div>
              <h4 className="font-bold text-zinc-200">{t("dash.whatsapp.toggleReadyTitle")}</h4>
              <p className="text-[10px] text-zinc-455 mt-0.5">{t("dash.whatsapp.toggleReadyDesc")}</p>
            </div>
            <button
              onClick={() => setWhatsappSettings(prev => ({ ...prev, orderReady: !prev.orderReady }))}
              className={`w-10 h-6 rounded-full p-1 transition-colors duration-250 cursor-pointer ${
                whatsappSettings.orderReady ? "bg-amber-500 flex justify-end" : "bg-zinc-850 flex justify-start"
              }`}
            >
              <span className="w-4 h-4 bg-slate-950 rounded-full shadow-sm" />
            </button>
          </div>

          {/* Toggle Item */}
          <div className="flex justify-between items-center p-3.5 bg-zinc-900/40 border border-zinc-850 rounded-xl hover:border-zinc-800 transition-all">
            <div>
              <h4 className="font-bold text-zinc-200">{t("dash.whatsapp.togglePayTitle")}</h4>
              <p className="text-[10px] text-zinc-450 mt-0.5">{t("dash.whatsapp.togglePayDesc")}</p>
            </div>
            <button
              onClick={() => setWhatsappSettings(prev => ({ ...prev, paymentLinkSend: !prev.paymentLinkSend }))}
              className={`w-10 h-6 rounded-full p-1 transition-colors duration-250 cursor-pointer ${
                whatsappSettings.paymentLinkSend ? "bg-amber-500 flex justify-end" : "bg-zinc-850 flex justify-start"
              }`}
            >
              <span className="w-4 h-4 bg-slate-950 rounded-full shadow-sm" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
