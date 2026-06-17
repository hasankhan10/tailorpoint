"use client";

import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

interface AddOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddOrder: (order: {
    customerName: string;
    phone: string;
    location: string;
    dressType: string;
    deliveryDate: string;
    price: number;
    notes: string;
    measurements: {
      neck: number;
      length: number;
      chest: number;
      waist: number;
      sleeve: number;
      cuff: number;
    };
  }) => void;
}

export default function AddOrderModal({ isOpen, onClose, onAddOrder }: AddOrderModalProps) {
  const { t, language } = useLanguage();
  
  // Section 1: Personal Details
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  // Order Details
  const [dressType, setDressType] = useState("পাঞ্জাবি");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [price, setPrice] = useState("");
  const [notes, setNotes] = useState("");

  // Section 2: Measurements
  const [neck, setNeck] = useState("");
  const [length, setLength] = useState("");
  const [chest, setChest] = useState("");
  const [waist, setWaist] = useState("");
  const [sleeve, setSleeve] = useState("");
  const [cuff, setCuff] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone || !deliveryDate || !price || !length || !chest || !neck) {
      alert(language === "bn" ? "দয়া করে কাস্টমারের নাম, ফোন, ডেলিভারি ডেট এবং প্রাথমিক মাপসমূহ প্রদান করুন" : "Please enter client name, phone, delivery date, and core size measurements");
      return;
    }

    onAddOrder({
      customerName,
      phone,
      location: location || (language === "bn" ? "শ্যামবাজার, কলকাতা" : "Shyambazar, Kolkata"),
      dressType,
      deliveryDate,
      price: Number(price),
      notes,
      measurements: {
        neck: Number(neck || 0),
        length: Number(length || 0),
        chest: Number(chest || 0),
        waist: Number(waist || 0),
        sleeve: Number(sleeve || 0),
        cuff: Number(cuff || 0)
      }
    });

    // Reset state
    setCustomerName("");
    setPhone("");
    setLocation("");
    setDressType("পাঞ্জাবি");
    setDeliveryDate("");
    setPrice("");
    setNotes("");
    setNeck("");
    setLength("");
    setChest("");
    setWaist("");
    setSleeve("");
    setCuff("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-zinc-950/80 backdrop-blur-sm overflow-y-auto py-10 animate-fade-in">
      <div className="w-full max-w-2xl glass-panel-gold border border-amber-500/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative text-left my-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-zinc-850 pb-3">
          <h3 className="text-base font-bold font-display text-zinc-100">{t("dash.orders.modalTitle")}</h3>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-900 text-zinc-455 hover:text-zinc-200 border border-zinc-800 flex items-center justify-center cursor-pointer font-sans text-sm"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 font-sans text-xs">
          
          {/* SECTION 1: Client Personal & Order Details */}
          <div className="space-y-4">
            <span className="text-[10px] text-amber-500 font-bold block uppercase font-mono tracking-wider">
              {t("dash.orders.labelCustDetails")}
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="block text-zinc-350 font-bold font-display">{t("dash.orders.labelCustName")}</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={t("dash.orders.placeholderCustName")}
                  className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 focus:border-amber-400 focus:outline-none font-display"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-zinc-350 font-bold font-display">{t("dash.orders.labelPhone")}</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t("dash.orders.placeholderPhone")}
                  className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-zinc-355 font-bold font-display">{t("dash.orders.labelLocation")}</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder={t("dash.orders.placeholderLocation")}
                  className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 focus:border-amber-400 focus:outline-none font-display"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="block text-zinc-350 font-bold font-display">{t("dash.orders.labelCategory")}</label>
                <select
                  value={dressType}
                  onChange={(e) => setDressType(e.target.value)}
                  className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 focus:border-amber-400 focus:outline-none cursor-pointer"
                >
                  <option value="পাঞ্জাবি">{language === "bn" ? "পাঞ্জাবি" : "Punjabi"}</option>
                  <option value="শেরওয়ানি">{language === "bn" ? "শেরওয়ানি" : "Sherwani"}</option>
                  <option value="ডিজাইনার স্যুট">{language === "bn" ? "ডিজাইনার স্যুট" : "Designer Suit"}</option>
                  <option value="কুর্তি">{language === "bn" ? "কুর্তি" : "Kurti"}</option>
                  <option value="লেহেঙ্গা">{language === "bn" ? "লেহেঙ্গা" : "Lehenga"}</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="block text-zinc-355 font-bold font-display">{t("dash.orders.labelDelivery")}</label>
                <input
                  type="date"
                  required
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 focus:border-amber-400 focus:outline-none font-mono"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-zinc-350 font-bold font-display">{t("dash.orders.labelPrice")}</label>
                <input
                  type="number"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder={language === "bn" ? "₹ মজুরি" : "₹ Charge"}
                  className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 focus:border-amber-400 focus:outline-none font-mono"
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: Measurement details */}
          <div className="space-y-4 pt-4 border-t border-zinc-850">
            <span className="text-[10px] text-amber-500 font-bold block uppercase font-mono tracking-wider">
              {t("dash.orders.labelMeasurements")} (Inches)
            </span>
            
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
              <div className="space-y-1.5">
                <label className="block text-zinc-400 font-bold font-display">{t("dash.customers.length")}</label>
                <input
                  type="number"
                  step="0.1"
                  required
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder='e.g., 40'
                  className="w-full px-2 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 font-mono focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-zinc-400 font-bold font-display">{language === "bn" ? "বুক" : "Chest"}</label>
                <input
                  type="number"
                  step="0.1"
                  required
                  value={chest}
                  onChange={(e) => setChest(e.target.value)}
                  placeholder='e.g., 36'
                  className="w-full px-2 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 font-mono focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-zinc-400 font-bold font-display">{t("dash.customers.neck")}</label>
                <input
                  type="number"
                  step="0.1"
                  required
                  value={neck}
                  onChange={(e) => setNeck(e.target.value)}
                  placeholder='e.g., 15'
                  className="w-full px-2 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 font-mono focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-zinc-400 font-bold font-display">{t("dash.customers.waist")}</label>
                <input
                  type="number"
                  step="0.1"
                  value={waist}
                  onChange={(e) => setOriginalWaist(e.target.value)}
                  placeholder='e.g., 32'
                  className="w-full px-2 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 font-mono focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-zinc-400 font-bold font-display">{t("dash.customers.sleeve")}</label>
                <input
                  type="number"
                  step="0.1"
                  value={sleeve}
                  onChange={(e) => setSleeve(e.target.value)}
                  placeholder='e.g., 22'
                  className="w-full px-2 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 font-mono focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-zinc-400 font-bold font-display">{t("dash.customers.cuff")}</label>
                <input
                  type="number"
                  step="0.1"
                  value={cuff}
                  onChange={(e) => setCuff(e.target.value)}
                  placeholder='e.g., 10'
                  className="w-full px-2 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 font-mono focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-1.5 pt-2 border-t border-zinc-850">
            <label className="block text-zinc-350 font-bold font-display">{t("dash.orders.labelNotes")}</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t("dash.orders.placeholderNotes")}
              className="w-full px-3 py-2 h-16 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 focus:border-amber-400 focus:outline-none resize-none font-display"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-xs font-bold font-display text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all cursor-pointer shadow-md text-center"
          >
            {t("dash.orders.submitBtn")}
          </button>
        </form>
      </div>
    </div>
  );

  // Small helper for setWaist inside the block
  function setOriginalWaist(val: string) {
    setWaist(val);
  }
}
