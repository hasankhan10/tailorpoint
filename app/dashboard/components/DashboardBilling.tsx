"use client";

import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function DashboardBilling() {
  const { t, language } = useLanguage();
  const [billingCustomer, setBillingCustomer] = useState("");
  const [billingDress, setBillingDress] = useState("");
  const [billingPrice, setBillingPrice] = useState("");
  const [billingAdvance, setBillingAdvance] = useState("");
  const [generatedInvoice, setGeneratedInvoice] = useState<any | null>(null);
  const [paymentLink, setPaymentLink] = useState("");

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

  const handleGenerateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!billingCustomer || !billingPrice) {
      alert(language === "bn" ? "দয়া করে কাস্টমারের নাম এবং দাম লিখুন" : "Please enter customer name and stitching price");
      return;
    }

    const priceNum = Number(billingPrice);
    const advanceNum = Number(billingAdvance || 0);
    const dueNum = priceNum - advanceNum;
    const invId = `INV-${Math.floor(1000 + Math.random() * 9000)}`;

    const newInvoice = {
      id: invId,
      date: language === "bn" ? toBengaliNumber(new Date().toLocaleDateString("bn-IN")) : new Date().toLocaleDateString("en-IN"),
      customerName: billingCustomer,
      dress: billingDress || (language === "bn" ? "পাঞ্জাবি ও পায়জামা" : "Punjabi & Pajama Outfit"),
      price: priceNum,
      advance: advanceNum,
      due: dueNum
    };

    setGeneratedInvoice(newInvoice);
    setPaymentLink(`https://tailorpoint.in/pay/${invId}`);
  };

  return (
    <div className="space-y-6 animate-fade-in text-left">
      <div>
        <h2 className="text-xl font-bold font-display text-zinc-100">{t("dash.billing.title")}</h2>
        <p className="text-xs text-zinc-400 mt-0.5">{t("dash.billing.desc")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form to generate bill */}
        <div className="lg:col-span-5 glass-panel-gold border border-amber-500/20 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold font-display text-zinc-200 border-b border-zinc-800 pb-2.5">
            {t("dash.billing.formTitle")}
          </h3>
          
          <form onSubmit={handleGenerateInvoice} className="space-y-4 font-sans text-xs">
            <div className="space-y-1.5">
              <label className="block text-zinc-350 font-bold font-display">{t("dash.billing.labelCustName")}</label>
              <input
                type="text"
                value={billingCustomer}
                onChange={(e) => setBillingCustomer(e.target.value)}
                placeholder={t("dash.billing.placeholderCustName")}
                className="w-full px-3 py-2.5 border border-zinc-800 bg-zinc-900/40 rounded-xl text-zinc-200 placeholder-zinc-550 focus:border-amber-400/80 focus:outline-none transition-all font-display"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-zinc-350 font-bold font-display">{t("dash.billing.labelDesc")}</label>
              <input
                type="text"
                value={billingDress}
                onChange={(e) => setBillingDress(e.target.value)}
                placeholder={t("dash.billing.placeholderDesc")}
                className="w-full px-3 py-2.5 border border-zinc-800 bg-zinc-900/40 rounded-xl text-zinc-200 placeholder-zinc-550 focus:border-amber-400/80 focus:outline-none transition-all font-display"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-zinc-350 font-bold font-display">{t("dash.billing.labelPrice")}</label>
                <input
                  type="number"
                  value={billingPrice}
                  onChange={(e) => setBillingPrice(e.target.value)}
                  placeholder={language === "bn" ? "₹ ৩,৫০০" : "e.g., 3500"}
                  className="w-full px-3 py-2.5 border border-zinc-800 bg-zinc-900/40 rounded-xl text-zinc-200 placeholder-zinc-550 focus:border-amber-400/80 focus:outline-none transition-all font-mono"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-zinc-350 font-bold font-display">{t("dash.billing.labelAdvance")}</label>
                <input
                  type="number"
                  value={billingAdvance}
                  onChange={(e) => setBillingAdvance(e.target.value)}
                  placeholder={language === "bn" ? "₹ ১,৫০০" : "e.g., 1500"}
                  className="w-full px-3 py-2.5 border border-zinc-800 bg-zinc-900/40 rounded-xl text-zinc-200 placeholder-zinc-550 focus:border-amber-400/80 focus:outline-none transition-all font-mono"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-xl text-xs font-bold font-display text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all cursor-pointer shadow-md text-center"
            >
              {t("dash.billing.submitBtn")}
            </button>
          </form>
        </div>

        {/* Generated Invoice View */}
        <div className="lg:col-span-7 space-y-6">
          {generatedInvoice ? (
            <div className="glass-panel border border-zinc-850 rounded-2xl p-6 space-y-6 shadow-2xl relative overflow-hidden animate-scale-in">
              <div className="absolute right-0 top-0 w-24 h-24 bg-amber-500/5 -z-10 rounded-full blur-2xl" />
              
              {/* Shop details */}
              <div className="flex justify-between items-start border-b border-zinc-850 pb-4">
                <div>
                  <h4 className="text-base font-extrabold font-display text-zinc-200">{t("dash.shopName")}</h4>
                  <p className="text-[10px] text-zinc-400 font-sans mt-0.5">{t("dash.billing.invoiceSub")}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[9px] font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 border border-amber-500/20 rounded font-mono">
                    {formatNum(generatedInvoice.id)}
                  </span>
                  <p className="text-[9px] text-zinc-400 mt-1 font-mono">{generatedInvoice.date}</p>
                </div>
              </div>

              {/* Client info & billing list */}
              <div className="space-y-4 font-sans text-xs">
                <div>
                  <span className="text-zinc-450 block text-[10px] uppercase font-mono">{t("dash.billing.invoiceLabelCust")}</span>
                  <span className="text-sm font-bold text-zinc-200 font-display mt-0.5 block">{generatedInvoice.customerName}</span>
                </div>

                {/* Invoice item row */}
                <div className="p-3.5 bg-zinc-900/60 border border-zinc-850/60 rounded-xl flex justify-between items-center">
                  <div>
                    <span className="font-bold text-zinc-200 block">{generatedInvoice.dress}</span>
                    <span className="text-[9px] text-zinc-450 mt-0.5 block">{t("dash.billing.invoiceLabelDesc")}</span>
                  </div>
                  <span className="font-bold font-mono text-zinc-200">₹{formatNum(generatedInvoice.price.toLocaleString("en-IN"))}</span>
                </div>

                {/* Calculation grid */}
                <div className="pt-2 space-y-2 border-t border-zinc-850/60 text-zinc-400">
                  <div className="flex justify-between">
                    <span>{t("dash.billing.total")}</span>
                    <span className="font-mono text-zinc-200">₹{formatNum(generatedInvoice.price.toLocaleString("en-IN"))}</span>
                  </div>
                  <div className="flex justify-between text-emerald-400">
                    <span>{t("dash.billing.advance")}</span>
                    <span className="font-mono font-bold">- ₹{formatNum(generatedInvoice.advance.toLocaleString("en-IN"))}</span>
                  </div>
                  <div className="flex justify-between text-sm text-amber-400 font-bold pt-2 border-t border-dashed border-zinc-800">
                    <span>{t("dash.billing.due")}</span>
                    <span className="font-mono text-zinc-100">₹{formatNum(generatedInvoice.due.toLocaleString("en-IN"))}</span>
                  </div>
                </div>

                {/* Payment Link details */}
                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-500 font-bold font-display">{t("dash.billing.payLinkLabel")}</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(paymentLink);
                        alert(t("dash.billing.copySuccess"));
                      }}
                      className="text-[10px] text-amber-400 hover:text-amber-300 underline font-bold cursor-pointer font-display"
                    >
                      {t("dash.billing.copyBtn")}
                    </button>
                  </div>
                  <input
                    type="text"
                    readOnly
                    value={paymentLink}
                    className="w-full bg-zinc-950 border border-zinc-850 px-3 py-1.5 rounded-lg text-[10px] font-mono text-zinc-300 focus:outline-none"
                  />
                </div>

                {/* Quick WhatsApp Share Button */}
                <button
                  onClick={() => {
                    alert(t("dash.billing.alertSuccess"));
                  }}
                  className="w-full py-2.5 rounded-xl border border-green-500/35 hover:border-green-400 text-xs font-bold font-display text-green-400 hover:bg-green-500/5 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {t("dash.billing.sendBtn")}
                </button>
              </div>
            </div>
          ) : (
            <div className="glass-panel border border-zinc-850 rounded-2xl p-10 text-center text-zinc-400">
              <p className="text-xs">{t("dash.billing.previewPlaceholder")}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
