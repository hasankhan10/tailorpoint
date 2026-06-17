"use client";

import React, { useState, useEffect } from "react";
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

interface EditMeasurementsModalProps {
  isOpen: boolean;
  customer: Customer | null;
  onClose: () => void;
  onSaveMeasurements: (measurements: Customer["measurements"]) => void;
}

export default function EditMeasurementsModal({ isOpen, customer, onClose, onSaveMeasurements }: EditMeasurementsModalProps) {
  const { t, language } = useLanguage();
  const [neck, setNeck] = useState(0);
  const [length, setLength] = useState(0);
  const [chest, setChest] = useState(0);
  const [waist, setWaist] = useState(0);
  const [sleeve, setSleeve] = useState(0);
  const [cuff, setCuff] = useState(0);

  // Sync state with incoming customer prop
  useEffect(() => {
    if (customer) {
      setNeck(customer.measurements.neck);
      setLength(customer.measurements.length);
      setChest(customer.measurements.chest);
      setWaist(customer.measurements.waist);
      setSleeve(customer.measurements.sleeve);
      setCuff(customer.measurements.cuff);
    }
  }, [customer]);

  if (!isOpen || !customer) return null;

  const handleSave = () => {
    onSaveMeasurements({
      neck,
      length,
      chest,
      waist,
      sleeve,
      cuff
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-zinc-950/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md glass-panel-gold border border-amber-500/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative text-left">
        <div className="flex justify-between items-center border-b border-zinc-850 pb-3">
          <div>
            <h3 className="text-sm font-bold font-display text-zinc-100">{customer.name}</h3>
            <p className="text-[10px] text-zinc-450 mt-0.5">{t("dash.customers.modalTitle")}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-900 text-zinc-450 hover:text-zinc-200 border border-zinc-800 flex items-center justify-center cursor-pointer font-sans text-sm"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 font-sans text-xs">
          <div className="space-y-1.5">
            <label className="block text-zinc-400">{t("dash.customers.length")} ({language === "bn" ? "ইঞ্চি" : "Inches"})</label>
            <input
              type="number"
              step="0.1"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 font-mono focus:border-amber-400 focus:outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-zinc-400">{language === "bn" ? "বুক / ছাতি (ইঞ্চি)" : "Chest (Inches)"}</label>
            <input
              type="number"
              step="0.1"
              value={chest}
              onChange={(e) => setChest(Number(e.target.value))}
              className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 font-mono focus:border-amber-400 focus:outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-zinc-400">{t("dash.customers.neck")} ({language === "bn" ? "ইঞ্চি" : "Inches"})</label>
            <input
              type="number"
              step="0.1"
              value={neck}
              onChange={(e) => setNeck(Number(e.target.value))}
              className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 font-mono focus:border-amber-400 focus:outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-zinc-400">{t("dash.customers.waist")} ({language === "bn" ? "ইঞ্চি" : "Inches"})</label>
            <input
              type="number"
              step="0.1"
              value={waist}
              onChange={(e) => setWaist(Number(e.target.value))}
              className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 font-mono focus:border-amber-400 focus:outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-zinc-400">{language === "bn" ? "হাতার দৈর্ঘ্য (ইঞ্চি)" : "Sleeve Length (Inches)"}</label>
            <input
              type="number"
              step="0.1"
              value={sleeve}
              onChange={(e) => setSleeve(Number(e.target.value))}
              className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 font-mono focus:border-amber-400 focus:outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-zinc-400">{language === "bn" ? "হাতার মুহুরী (ইঞ্চি)" : "Cuff (Inches)"}</label>
            <input
              type="number"
              step="0.1"
              value={cuff}
              onChange={(e) => setCuff(Number(e.target.value))}
              className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 font-mono focus:border-amber-400 focus:outline-none"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="w-full py-2.5 rounded-xl text-xs font-bold font-display text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all cursor-pointer shadow-md text-center"
        >
          {t("dash.customers.saveBtn")}
        </button>
      </div>
    </div>
  );
}
