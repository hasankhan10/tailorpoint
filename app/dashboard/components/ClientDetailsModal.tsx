"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

interface Customer {
  id: string;
  name: string;
  phone: string;
  ordersCount: number;
  location?: string;
  measurements: {
    neck: number;
    length: number;
    chest: number;
    waist: number;
    sleeve: number;
    cuff: number;
  };
}

interface ClientDetailsModalProps {
  isOpen: boolean;
  customer: Customer | null;
  onClose: () => void;
}

export default function ClientDetailsModal({ isOpen, customer, onClose }: ClientDetailsModalProps) {
  const { t, language } = useLanguage();

  if (!isOpen || !customer) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-zinc-950/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md glass-panel-gold border border-amber-500/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative text-left">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-zinc-850 pb-3">
          <div>
            <h3 className="text-sm font-bold font-display text-zinc-100">{t("dash.orders.labelCustDetails")}</h3>
            <p className="text-[10px] text-zinc-450 mt-0.5">{customer.name} ({formatNum(customer.id)})</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-900 text-zinc-450 hover:text-zinc-200 border border-zinc-800 flex items-center justify-center cursor-pointer font-sans text-sm"
          >
            ✕
          </button>
        </div>

        {/* Body Content */}
        <div className="space-y-4 font-sans text-xs">
          {/* Section: Personal Details */}
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-850 space-y-2.5">
            <span className="text-[9px] text-amber-500 font-bold block uppercase font-mono tracking-wider">
              {t("dash.orders.labelCustDetails")}
            </span>
            <div className="grid grid-cols-2 gap-y-2 text-zinc-300">
              <div>
                <span className="text-zinc-500 block text-[9px] uppercase font-mono">{t("dash.orders.labelCustName")}:</span>
                <span className="font-bold text-zinc-200 font-display">{customer.name}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[9px] uppercase font-mono">{t("dash.orders.labelPhone")}:</span>
                <span className="font-mono text-zinc-200 font-bold">{formatNum(customer.phone)}</span>
              </div>
              <div className="col-span-2">
                <span className="text-zinc-500 block text-[9px] uppercase font-mono">{t("dash.orders.labelLocation")}:</span>
                <span className="font-display text-zinc-200">
                  {customer.location || (language === "bn" ? "শ্যামবাজার, কলকাতা" : "Shyambazar, Kolkata")}
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-zinc-500 block text-[9px] uppercase font-mono">
                  {language === "bn" ? "অর্ডার সংখ্যা:" : "Total Orders:"}
                </span>
                <span className="font-display text-zinc-200 font-bold">
                  {formatNum(customer.ordersCount)} {t("dash.customers.orders")}
                </span>
              </div>
            </div>
          </div>

          {/* Section: Measurements */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-850 space-y-3">
            <span className="text-[9px] text-amber-500 font-bold block uppercase font-mono tracking-wider">
              {t("dash.orders.labelMeasurements")} (Inches)
            </span>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-2 bg-zinc-900/80 rounded-lg border border-zinc-800">
                <span className="text-zinc-400 block text-[9px] font-bold">{t("dash.customers.length")}</span>
                <span className="text-xs font-bold text-zinc-100 font-mono mt-0.5 block">{formatNum(customer.measurements.length)}"</span>
              </div>
              <div className="p-2 bg-zinc-900/80 rounded-lg border border-zinc-800">
                <span className="text-zinc-400 block text-[9px] font-bold">{language === "bn" ? "বুক" : "Chest"}</span>
                <span className="text-xs font-bold text-zinc-100 font-mono mt-0.5 block">{formatNum(customer.measurements.chest)}"</span>
              </div>
              <div className="p-2 bg-zinc-900/80 rounded-lg border border-zinc-800">
                <span className="text-zinc-400 block text-[9px] font-bold">{t("dash.customers.neck")}</span>
                <span className="text-xs font-bold text-zinc-100 font-mono mt-0.5 block">{formatNum(customer.measurements.neck)}"</span>
              </div>
              <div className="p-2 bg-zinc-900/80 rounded-lg border border-zinc-800">
                <span className="text-zinc-400 block text-[9px] font-bold">{t("dash.customers.waist")}</span>
                <span className="text-xs font-bold text-zinc-100 font-mono mt-0.5 block">{formatNum(customer.measurements.waist)}"</span>
              </div>
              <div className="p-2 bg-zinc-900/80 rounded-lg border border-zinc-800">
                <span className="text-zinc-400 block text-[9px] font-bold">{t("dash.customers.sleeve")}</span>
                <span className="text-xs font-bold text-zinc-100 font-mono mt-0.5 block">{formatNum(customer.measurements.sleeve)}"</span>
              </div>
              <div className="p-2 bg-zinc-900/80 rounded-lg border border-zinc-800">
                <span className="text-zinc-400 block text-[9px] font-bold">{t("dash.customers.cuff")}</span>
                <span className="text-xs font-bold text-zinc-100 font-mono mt-0.5 block">{formatNum(customer.measurements.cuff)}"</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 rounded-xl text-xs font-bold font-display text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all cursor-pointer shadow-md text-center"
        >
          {t("dash.orders.closeBtn")}
        </button>
      </div>
    </div>
  );
}
