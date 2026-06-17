"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

type OrderStatus = "পেন্ডিং" | "কাটিং" | "সেলাই হচ্ছে" | "রেডি" | "ডেলিভারড";

interface Order {
  id: string;
  customerName: string;
  phone: string;
  dressType: string;
  deliveryDate: string;
  price: number;
  status: OrderStatus;
  notes?: string;
}

interface OverviewTabProps {
  orders: Order[];
}

export default function OverviewTab({ orders }: OverviewTabProps) {
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

  const getDressTypeLabel = (dress: string) => {
    if (language === "bn") return dress;
    switch (dress) {
      case "শেরওয়ানি": return "Sherwani";
      case "ডিজাইনার কুর্তি": return "Designer Kurti";
      case "প্রিমিয়াম স্যুট": return "Premium Suit";
      case "লেহেঙ্গা চোলি": return "Lehenga Choli";
      case "পাঞ্জাবি স্যুট": return "Punjabi Suit";
      case "পাঞ্জাবি": return "Punjabi";
      case "কুর্তি": return "Kurti";
      case "লেহেঙ্গা": return "Lehenga";
      case "ডিজাইনার স্যুট": return "Designer Suit";
      default: return dress;
    }
  };

  // Calculations
  const activeOrdersCount = orders.filter(o => o.status !== "ডেলিভারড").length;
  const pendingCutting = orders.filter(o => o.status === "কাটিং" || o.status === "পেন্ডিং").length;
  const todayRevenue = orders.filter(o => o.status === "ডেলিভারড").reduce((acc, curr) => acc + curr.price, 0);
  const totalOutstanding = orders.filter(o => o.status !== "ডেলিভারড").reduce((acc, curr) => acc + curr.price, 0) * 0.45; // Simulated due

  return (
    <div className="space-y-8 animate-fade-in text-left">
      
      {/* Quick Summary Numbers Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Metric Item */}
        <div className="p-5 rounded-2xl border border-zinc-850/60 bg-zinc-900/20 backdrop-blur-md hover:border-amber-500/25 shadow-lg shadow-zinc-950/50 hover:shadow-xl hover:shadow-amber-500/5 transition-all">
          <span className="block text-[10px] text-zinc-450 uppercase font-mono">{t("dash.overview.activeOrders")}</span>
          <span className="block text-2xl font-extrabold font-display yellow-gradient-text mt-1">{formatNum(activeOrdersCount)}{t("dash.overview.pcs")}</span>
          <span className="text-[10px] text-zinc-400 block mt-1">{t("dash.overview.activeOrdersDesc")}</span>
        </div>

        {/* Metric Item */}
        <div className="p-5 rounded-2xl border border-zinc-850/60 bg-zinc-900/20 backdrop-blur-md hover:border-amber-500/25 shadow-lg shadow-zinc-950/50 hover:shadow-xl hover:shadow-amber-500/5 transition-all">
          <span className="block text-[10px] text-zinc-450 uppercase font-mono">{t("dash.overview.cuttingPending")}</span>
          <span className="block text-2xl font-extrabold font-display text-amber-400 mt-1">{formatNum(pendingCutting)}{t("dash.overview.pcs")}</span>
          <span className="text-[10px] text-zinc-400 block mt-1">{t("dash.overview.cuttingPendingDesc")}</span>
        </div>

        {/* Metric Item */}
        <div className="p-5 rounded-2xl border border-zinc-850/60 bg-zinc-900/20 backdrop-blur-md hover:border-amber-500/25 shadow-lg shadow-zinc-950/50 hover:shadow-xl hover:shadow-amber-500/5 transition-all">
          <span className="block text-[10px] text-zinc-450 uppercase font-mono">{t("dash.overview.dues")}</span>
          <span className="block text-2xl font-extrabold font-display text-zinc-200 mt-1">₹ {formatNum(totalOutstanding.toLocaleString("en-IN"))}</span>
          <span className="text-[10px] text-red-400 block mt-1">{t("dash.overview.duesDesc")}</span>
        </div>

        {/* Metric Item */}
        <div className="p-5 rounded-2xl border border-zinc-850/60 bg-zinc-900/20 backdrop-blur-md hover:border-amber-500/25 shadow-lg shadow-zinc-950/50 hover:shadow-xl hover:shadow-amber-500/5 transition-all">
          <span className="block text-[10px] text-zinc-450 uppercase font-mono">{t("dash.overview.revenue")}</span>
          <span className="block text-2xl font-extrabold font-display text-emerald-400 mt-1">₹ {formatNum(todayRevenue.toLocaleString("en-IN"))}</span>
          <span className="text-[10px] text-zinc-450 block mt-1">{t("dash.overview.revenueDesc")}</span>
        </div>

      </div>

      {/* Graphical Overview & Recent Activities Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* SVG Revenue Chart Simulator */}
        <div className="lg:col-span-12 p-6 rounded-2xl border border-zinc-850/80 bg-zinc-900/30 backdrop-blur-md flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-sm font-bold font-display text-zinc-200">{t("dash.overview.chartTitle")}</h3>
              <p className="text-[10px] text-zinc-450 mt-0.5">{t("dash.overview.chartDesc")}</p>
            </div>
            <span className="text-xs font-bold text-amber-500 font-display">{t("dash.overview.totalSales")}</span>
          </div>

          {/* SVG Bar Chart Visualization */}
          <div className="h-56 w-full flex items-end justify-between gap-4 pt-4 border-b border-zinc-850">
            {[
              { day: t("dash.overview.days")[0], val: 800, fill: "var(--color-luxury-purple)" },
              { day: t("dash.overview.days")[1], val: 1800, fill: "var(--color-luxury-gold)" },
              { day: t("dash.overview.days")[2], val: 1200, fill: "var(--color-luxury-purple)" },
              { day: t("dash.overview.days")[3], val: 2600, fill: "var(--color-luxury-gold)" },
              { day: t("dash.overview.days")[4], val: 3200, fill: "var(--color-luxury-gold)" },
              { day: t("dash.overview.days")[5], val: 4500, fill: "var(--color-luxury-gold)" },
              { day: t("dash.overview.days")[6], val: 1800, fill: "var(--color-luxury-purple)" }
            ].map((item, idx) => {
              const pctHeight = (item.val / 5000) * 100;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
                  {/* Value Tooltip popup */}
                  <span className="text-[9px] font-mono text-zinc-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    ₹{item.day === t("dash.overview.days")[5] ? (language === "bn" ? "৪.৫k" : "4.5k") : formatNum(item.val)}
                  </span>
                  <div 
                    style={{ height: `${pctHeight}%`, backgroundColor: item.fill }} 
                    className="w-full rounded-t-md opacity-85 group-hover:opacity-100 transition-all shadow-lg hover:scale-x-105 duration-200" 
                  />
                  <span className="text-[10px] text-zinc-400 mt-2 font-display">{item.day}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
