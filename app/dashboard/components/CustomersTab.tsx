"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

interface Customer {
  id: string;
  name: string;
  phone: string;
  ordersCount: number;
  measurements: {
    neck: number;
    length: number;
    chest: number;
    waist: number;
    sleeve: number;
    cuff: number;
  };
}

interface CustomersTabProps {
  customers: Customer[];
  handleOpenMeasurements: (cust: Customer) => void;
}

export default function CustomersTab({ customers, handleOpenMeasurements }: CustomersTabProps) {
  const { t, language } = useLanguage();

  const toBengaliNumber = (num: number | string): string => {
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num
      .toString()
      .split("")
      .map((char) => (/[0-9]/.test(char) ? bengaliDigits[parseInt(char)] : char))
      .join("");
  };

  const formatNum = (num: number | string) => {
    return language === "bn" ? toBengaliNumber(num) : num.toString();
  };

  return (
    <div className="space-y-6 animate-fade-in text-left">
      <div>
        <h2 className="text-xl font-bold font-display text-zinc-100">{t("dash.customers.title")}</h2>
        <p className="text-xs text-zinc-400 mt-0.5">{t("dash.customers.desc")}</p>
      </div>

      {/* Customer cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((c) => (
          <div key={c.id} className="glass-panel border border-zinc-850 rounded-2xl p-5 hover:border-amber-500/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] text-zinc-450 font-mono block">{formatNum(c.id)}</span>
                  <h3 className="text-sm font-bold font-display text-zinc-200 mt-0.5">{c.name}</h3>
                </div>
                <span className="inline-block text-[10px] font-bold text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 rounded-full font-display">
                  {formatNum(c.ordersCount)}{t("dash.customers.orders")}
                </span>
              </div>
              
              <div className="mt-4 pt-3 border-t border-zinc-850/60 grid grid-cols-2 gap-2 text-[10px] text-zinc-400 font-sans">
                <p>📞 {t("dash.customers.phone")}: <span className="font-mono text-zinc-300 font-bold">{formatNum(c.phone)}</span></p>
                <p>👔 {t("dash.customers.type")}</p>
              </div>

              {/* Display brief measurements summary */}
              <div className="mt-3.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-850/60">
                <span className="text-[9px] text-amber-500 font-bold block mb-1.5 uppercase font-mono tracking-widest">{t("dash.customers.measurementsTitle")}</span>
                <div className="grid grid-cols-3 gap-1.5 text-[10px] text-zinc-355 font-mono">
                  <div>{t("dash.customers.length")}: <span className="text-zinc-100 font-bold">{formatNum(c.measurements.length)}"{t("dash.overview.alertsDesc") === "pending delivery" ? "" : ""}</span></div>
                  <div>{t("dash.customers.chest")}: <span className="text-zinc-100 font-bold">{formatNum(c.measurements.chest)}"</span></div>
                  <div>{t("dash.customers.neck")}: <span className="text-zinc-100 font-bold">{formatNum(c.measurements.neck)}"</span></div>
                  <div>{t("dash.customers.waist")}: <span className="text-zinc-100 font-bold">{formatNum(c.measurements.waist)}"</span></div>
                  <div>{t("dash.customers.sleeve")}: <span className="text-zinc-100 font-bold">{formatNum(c.measurements.sleeve)}"</span></div>
                  <div>{t("dash.customers.cuff")}: <span className="text-zinc-100 font-bold">{formatNum(c.measurements.cuff)}"</span></div>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleOpenMeasurements(c)}
              className="w-full mt-5 py-2 rounded-xl border border-amber-500/25 hover:border-amber-400 text-xs font-bold font-display text-amber-400 hover:bg-amber-400/5 transition-all cursor-pointer text-center"
            >
              {t("dash.customers.editBtn")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
