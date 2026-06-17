"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const { language, t } = useLanguage();

  return (
    <section id="pricing" className="py-20 bg-zinc-900/30 border-y border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            {t("pricing.heading")}
          </h2>
          <p className="text-zinc-400 text-base mt-4">
            {t("pricing.subheading")}
          </p>

          {/* Toggle Billing Cycles */}
          <div className="inline-flex items-center gap-3 mt-8 p-1.5 rounded-xl bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-lg text-xs font-bold font-display transition-all cursor-pointer ${
                billingCycle === "monthly" 
                  ? "bg-amber-500 text-slate-950 shadow-md" 
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {language === "bn" ? "মাসে মাসে দিন" : "Billed Monthly"}
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded-lg text-xs font-bold font-display transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === "yearly" 
                  ? "bg-amber-500 text-slate-950 shadow-md" 
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {language === "bn" ? "এক বছরে দিন (২০% ছাড় পাবেন!)" : "Billed Annually (Save 20%)"}
            </button>
          </div>
        </div>

        {/* Subscription Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Plan 1: Starter */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between border border-zinc-800 hover:border-zinc-700/80 transition-all reveal">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-zinc-100">{t("pricing.starterTitle")}</h3>
                <p className="text-zinc-400 text-xs mt-1.5">{t("pricing.starterDesc")}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-zinc-100">
                  ₹{billingCycle === "monthly" ? "২৯৯" : "২৪৯"}
                </span>
                <span className="text-xs text-zinc-400">{t("pricing.monthly")}</span>
              </div>
              
              <ul className="space-y-3.5 text-xs text-zinc-300 border-t border-zinc-800/80 pt-6">
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> {language === "bn" ? "সবচেয়ে বেশি ২০০ জন কাস্টমারের ডাটা রাখা যাবে" : "Up to 200 customer profiles"}
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> {language === "bn" ? "হোয়াটসঅ্যাপে ১ ক্লিকে মাপ পাঠিয়ে দিন" : "1-Click WhatsApp measurement sharing"}
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> {language === "bn" ? "ডিজিটাল বিল ও ক্যাশ মেমো বানানোর সুবিধা" : "Digital billing & cash memos"}
                </li>
                <li className="flex items-center gap-2.5 text-zinc-500 line-through">
                  <span>✗</span> {language === "bn" ? "এআই পোশাকের ছবি (AI Preview)" : "Virtual AI fitting previews"}
                </li>
                <li className="flex items-center gap-2.5 text-zinc-500 line-through">
                  <span>✗</span> {language === "bn" ? "ইউপিআই (UPI) পেমেন্ট লিংক পাঠানো" : "Outstandings collection via UPI link"}
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 py-3 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 text-zinc-100 font-bold text-sm tracking-wide transition-all cursor-pointer">
              {t("pricing.buyNow")}
            </button>
          </div>

          {/* Plan 2: Pro (Recommended) */}
          <div className="glass-panel-gold rounded-2xl p-8 flex flex-col justify-between border-2 border-amber-500 relative shadow-2xl reveal delay-100">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-[10px] font-extrabold tracking-wider uppercase shadow-md shadow-amber-500/20 font-display">
              {t("pricing.proPopular")}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-zinc-100 flex items-center gap-2">
                  {t("pricing.proTitle")} <span className="text-xs text-amber-400">✨ AI Enabled</span>
                </h3>
                <p className="text-zinc-400 text-xs mt-1.5">{t("pricing.proDesc")}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-zinc-100">
                  ₹{billingCycle === "monthly" ? "৫৯৯" : "৪৯৯"}
                </span>
                <span className="text-xs text-zinc-400">{t("pricing.monthly")}</span>
              </div>
              
              <ul className="space-y-3.5 text-xs text-zinc-300 border-t border-zinc-800/80 pt-6">
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span> {language === "bn" ? "যত খুশি কাস্টমারের নাম ও মাপ রাখুন" : "Unlimited customer profiles & sizes"}
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span> {language === "bn" ? "হোয়াটসঅ্যাপে ১ ক্লিকে মাপ পাঠিয়ে দিন" : "1-Click WhatsApp measurement sharing"}
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span> {language === "bn" ? "ডিজিটাল বিল ও ক্যাশ মেমো বানানোর সুবিধা" : "Digital billing & cash memos"}
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span> {language === "bn" ? "১০টি এআই ক্রেডিট একদম ফ্রি পাবেন" : "10 free AI fitting preview credits/mo"}
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span> {language === "bn" ? "সরাসরি ইউপিআই (UPI) দিয়ে টাকা নেওয়ার লিংক" : "Direct UPI outstanding payment links"}
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span> {language === "bn" ? "WhatsApp স্ট্যাটাসে দোকানের প্রচার করুন" : "Boost business with WhatsApp status ads"}
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/10 transition-all cursor-pointer">
              {language === "bn" ? "৭ দিনের জন্য ফ্রি ট্রায়াল নিন" : "Start 7-Day Free Trial"}
            </button>
          </div>

          {/* Plan 3: Enterprise */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between border border-zinc-800 hover:border-zinc-700/80 transition-all reveal delay-200">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-zinc-100">{t("pricing.entTitle")}</h3>
                <p className="text-zinc-400 text-xs mt-1.5">{t("pricing.entDesc")}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-zinc-100">
                  ₹{billingCycle === "monthly" ? "১,১৯৯" : "৯৯৯"}
                </span>
                <span className="text-xs text-zinc-400">{t("pricing.monthly")}</span>
              </div>
              
              <ul className="space-y-3.5 text-xs text-zinc-300 border-t border-zinc-800/80 pt-6">
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> {language === "bn" ? "যত খুশি কাস্টমার আর শাখার হিসাব রাখুন" : "Unlimited shops, branches & clients"}
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> {language === "bn" ? "২৫ টি এআই ক্রেডিট একদম ফ্রি পাবেন" : "25 free AI fitting preview credits/mo"}
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> {language === "bn" ? "বিলে নিজের দোকানের ব্র্যান্ড ও লোগো রাখুন" : "Custom branding & store logo on invoices"}
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> {language === "bn" ? "সব কারিগর ও দোকানের সব কাজের ফুল ট্র্যাকিং" : "Master tailor & production status tracking"}
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> {language === "bn" ? "২৪ ঘণ্টা ফোন ও চ্যাটে আমাদের সাপোর্ট" : "24/7 priority call & chat support"}
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 py-3 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 text-zinc-100 font-bold text-sm tracking-wide transition-all cursor-pointer">
              {language === "bn" ? "আমাদের সাথে কথা বলুন" : "Contact Sales"}
            </button>
          </div>

        </div>

        {/* AI Credit Packs Section */}
        <div className="mt-20 border-t border-zinc-800 pt-16 max-w-5xl mx-auto reveal">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-2xl font-bold text-zinc-100">
              ⚡ {t("pricing.packHeading")}
            </h3>
            <p className="text-zinc-400 text-sm mt-2.5">
              {t("pricing.packSubheading")}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            
            {/* Pack 1 */}
            <div className="glass-panel p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between items-center text-center space-y-4 hover:border-amber-500/30 transition-all duration-300">
              <div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider font-display">{t("pricing.pack50")}</div>
                <div className="text-3xl font-extrabold text-zinc-100 mt-2">₹১৯৯</div>
                <p className="text-zinc-500 text-[10px] mt-1">
                  {language === "bn" ? "₹৩.৯৮ / ছবি" : "₹3.98 / preview"}
                </p>
              </div>
              <button className="w-full py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-100 font-bold text-xs cursor-pointer transition-all">
                {language === "bn" ? "প্যাক কিনুন" : "Buy Pack"}
              </button>
            </div>

            {/* Pack 2 */}
            <div className="glass-panel p-6 rounded-2xl border-2 border-amber-500/40 relative flex flex-col justify-between items-center text-center space-y-4 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-amber-500/5">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-[9px] font-extrabold uppercase font-display">
                {language === "bn" ? "সেরা অফার" : "Best Offer"}
              </div>
              <div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider font-display">{t("pricing.pack150")}</div>
                <div className="text-3xl font-extrabold text-zinc-100 mt-2">₹৪৯৯</div>
                <p className="text-zinc-500 text-[10px] mt-1">
                  {language === "bn" ? "₹৩.৩৩ / ছবি" : "₹3.33 / preview"}
                </p>
              </div>
              <button className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs cursor-pointer transition-all">
                {language === "bn" ? "প্যাক কিনুন" : "Buy Pack"}
              </button>
            </div>

            {/* Pack 3 */}
            <div className="glass-panel p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between items-center text-center space-y-4 hover:border-amber-500/30 transition-all duration-300">
              <div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider font-display">{t("pricing.pack500")}</div>
                <div className="text-3xl font-extrabold text-zinc-100 mt-2">₹১,২৯৯</div>
                <p className="text-zinc-500 text-[10px] mt-1">
                  {language === "bn" ? "₹২.৬০ / ছবি" : "₹2.60 / preview"}
                </p>
              </div>
              <button className="w-full py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-100 font-bold text-xs cursor-pointer transition-all">
                {language === "bn" ? "প্যাক কিনুন" : "Buy Pack"}
              </button>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
