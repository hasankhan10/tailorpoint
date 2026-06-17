"use client";

import React, { useState } from "react";
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

interface OrdersTabProps {
  orders: Order[];
  handleStatusChange: (id: string, newStatus: OrderStatus) => void;
  setShowOrderModal: (show: boolean) => void;
  onViewClient: (phone: string) => void;
}

export default function OrdersTab({ orders, handleStatusChange, setShowOrderModal, onViewClient }: OrdersTabProps) {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

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

  const getStatusLabel = (status: OrderStatus) => {
    if (language === "bn") {
      return status === "ডেলিভারড" ? "ডেলিভারি সম্পন্ন" : status;
    }
    switch (status) {
      case "পেন্ডিং": return "Pending";
      case "কাটিং": return "Cutting";
      case "সেলাই হচ্ছে": return "Stitching";
      case "রেডি": return "Ready";
      case "ডেলিভারড": return "Delivered";
      default: return status;
    }
  };

  // Filter orders based on search query
  const filteredOrders = orders.filter((o) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      o.id.toLowerCase().includes(query) ||
      o.customerName.toLowerCase().includes(query) ||
      o.phone.includes(query) ||
      getDressTypeLabel(o.dressType).toLowerCase().includes(query) ||
      o.dressType.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-6 animate-fade-in text-left">
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold font-display text-zinc-100">{t("dash.orders.title")}</h2>
          <p className="text-xs text-zinc-400 mt-0.5">{t("dash.orders.desc")}</p>
        </div>
        <button
          onClick={() => setShowOrderModal(true)}
          className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 cursor-pointer shadow-md transition-all flex items-center gap-1.5"
        >
          <span>{t("dash.orders.addOrder")}</span>
        </button>
      </div>

      {/* Functional Search Bar */}
      <div className="glass-panel border border-zinc-850 rounded-2xl p-4 shadow-md relative overflow-hidden">
        <div className="absolute right-0 top-0 w-24 h-24 bg-amber-500/5 -z-10 rounded-full blur-2xl animate-pulse" />
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-zinc-550 select-none">
            🔍
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("dash.orders.searchPlaceholder")}
            className="w-full pl-9 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-200 placeholder-zinc-550 focus:border-amber-400/80 focus:outline-none transition-all font-display"
          />
        </div>
      </div>

      {/* Order Data Table container */}
      <div className="glass-panel border border-zinc-850 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-900/80 border-b border-zinc-850 text-xs font-bold text-zinc-300 font-display">
                <th className="p-4">{t("dash.orders.thId")}</th>
                <th className="p-4">{t("dash.orders.thCust")}</th>
                <th className="p-4">{t("dash.orders.thDress")}</th>
                <th className="p-4">{t("dash.orders.thDelivery")}</th>
                <th className="p-4 text-right">{t("dash.orders.thPrice")}</th>
                <th className="p-4">{t("dash.orders.thStatus")}</th>
                <th className="p-4 text-center">{t("dash.orders.thAction")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-850 text-xs text-zinc-300 font-sans">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((o) => (
                  <tr key={o.id} className="hover:bg-zinc-900/20 transition-colors">
                    <td className="p-4 font-mono font-bold text-zinc-450">{formatNum(o.id)}</td>
                    <td className="p-4">
                      {/* Clickable Customer Profile trigger */}
                      <button
                        type="button"
                        onClick={() => onViewClient(o.phone)}
                        className="group text-left cursor-pointer hover:opacity-90 block focus:outline-none"
                        title={language === "bn" ? "গ্রাহকের প্রোফাইল ও মাপের খাতা দেখুন" : "View customer profile & measurements sheet"}
                      >
                        <span className="font-bold text-zinc-200 font-display block group-hover:text-amber-400 group-hover:underline transition-all">
                          {o.customerName}
                        </span>
                        <span className="text-[10px] text-zinc-400 font-mono block mt-0.5 group-hover:text-zinc-350">
                          {formatNum(o.phone)}
                        </span>
                      </button>
                    </td>
                    <td className="p-4">{getDressTypeLabel(o.dressType)}</td>
                    <td className="p-4 font-mono">{formatNum(o.deliveryDate)}</td>
                    <td className="p-4 text-right font-bold font-mono text-zinc-200">₹{formatNum(o.price.toLocaleString("en-IN"))}</td>
                    <td className="p-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold font-display border ${
                        o.status === "ডেলিভারড" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                        o.status === "রেডি" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                        o.status === "সেলাই হচ্ছে" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                        o.status === "কাটিং" ? "bg-purple-500/10 text-purple-400 border-purple-500/20" :
                        "bg-zinc-800 text-zinc-400 border-zinc-700"
                      }`}>
                        {getStatusLabel(o.status)}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        {o.status !== "ডেলিভারড" ? (
                          <select
                            value={o.status}
                            onChange={(e) => handleStatusChange(o.id, e.target.value as OrderStatus)}
                            className="bg-zinc-900 border border-zinc-800 rounded-lg px-2 py-1 text-[10px] text-zinc-300 font-bold focus:outline-none cursor-pointer hover:border-zinc-750"
                          >
                            <option value="পেন্ডিং">{language === "bn" ? "পেন্ডিং" : "Pending"}</option>
                            <option value="কাটিং">{language === "bn" ? "কাটিং" : "Cutting"}</option>
                            <option value="সেলাই হচ্ছে">{language === "bn" ? "সেলাই হচ্ছে" : "Stitching"}</option>
                            <option value="রেডি">{language === "bn" ? "রেডি" : "Ready"}</option>
                            <option value="ডেলিভারড">{language === "bn" ? "ডেলিভারি সম্পন্ন" : "Delivered"}</option>
                          </select>
                        ) : (
                          <span className="text-[10px] text-zinc-450 italic">{t("dash.orders.delivered")}</span>
                        )}
                        
                        <button 
                          onClick={() => {
                            alert(t("dash.orders.alertSuccess"));
                          }}
                          className="p-1.5 rounded bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 transition-all cursor-pointer"
                          title={language === "bn" ? "হোয়াটসঅ্যাপ আপডেট পাঠান" : "Send WhatsApp status update"}
                        >
                          💬
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-zinc-500 italic">
                    {language === "bn" ? "কোনো অর্ডার পাওয়া যায়নি" : "No matching orders found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
