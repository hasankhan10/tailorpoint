"use client";

import React, { useState } from "react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-20 bg-zinc-900/30 border-y border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            আপনার বাজেটের মধ্যে{" "}
            <span className="gold-gradient-text">
              সবচেয়ে ভালো প্ল্যান বেছে নিন
            </span>
          </h2>
          <p className="text-zinc-400 text-base mt-4">
            কোনো হিডেন চার্জ নেই। যখন খুশি প্ল্যান বন্ধ বা বদল করতে পারবেন সহজে।
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
              মাসে মাসে দিন
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded-lg text-xs font-bold font-display transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === "yearly" 
                  ? "bg-amber-500 text-slate-950 shadow-md" 
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              এক বছরে দিন (২০% ছাড় পাবেন!)
            </button>
          </div>
        </div>

        {/* Subscription Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Plan 1: Starter */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between border border-zinc-800 hover:border-zinc-700/80 transition-all reveal">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-zinc-100">ছোট দোকান (Starter)</h3>
                <p className="text-zinc-400 text-xs mt-1.5">ছোট টেইলর দোকানের জন্য একদম পারফেক্ট</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-zinc-100">
                  ₹{billingCycle === "monthly" ? "২৯৯" : "২৪৯"}
                </span>
                <span className="text-xs text-zinc-400">/মাস</span>
              </div>
              
              <ul className="space-y-3.5 text-xs text-zinc-300 border-t border-zinc-800/80 pt-6">
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> সবচেয়ে বেশি ২০০ জন কাস্টমারের ডাটা রাখা যাবে
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> হোয়াটসঅ্যাপে ১ ক্লিকে মাপ পাঠিয়ে দিন
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> ডিজিটাল বিল ও ক্যাশ মেমো বানানোর সুবিধা
                </li>
                <li className="flex items-center gap-2.5 text-zinc-500 line-through">
                  <span>✗</span> এআই পোশাকের ছবি (AI Preview)
                </li>
                <li className="flex items-center gap-2.5 text-zinc-500 line-through">
                  <span>✗</span> ইউপিআই (UPI) পেমেন্ট লিংক পাঠানো
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 py-3 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 text-zinc-100 font-bold text-sm tracking-wide transition-all cursor-pointer">
              শুরু করুন
            </button>
          </div>

          {/* Plan 2: Pro (Recommended) */}
          <div className="glass-panel-gold rounded-2xl p-8 flex flex-col justify-between border-2 border-amber-500 relative shadow-2xl reveal delay-100">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-[10px] font-extrabold tracking-wider uppercase shadow-md shadow-amber-500/20 font-display">
              সবাই এই প্ল্যানটাই নেয়
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-zinc-100 flex items-center gap-2">
                  প্রো (Pro Professional) <span className="text-xs text-amber-400">✨ AI Enabled</span>
                </h3>
                <p className="text-zinc-400 text-xs mt-1.5">মাঝারি আর বড় টেইলর দোকানের জন্য সবচেয়ে ভালো</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-zinc-100">
                  ₹{billingCycle === "monthly" ? "৫৯৯" : "৪৯৯"}
                </span>
                <span className="text-xs text-zinc-400">/মাস</span>
              </div>
              
              <ul className="space-y-3.5 text-xs text-zinc-300 border-t border-zinc-800/80 pt-6">
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span> যত খুশি কাস্টমারের নাম ও মাপ রাখুন
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span> হোয়াটসঅ্যাপে ১ ক্লিকে মাপ পাঠিয়ে দিন
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span> ডিজিটাল বিল ও ক্যাশ মেমো বানানোর সুবিধা
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span> <strong>১০টি এআই ক্রেডিট একদম ফ্রি পাবেন</strong>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span> সরাসরি ইউপিআই (UPI) দিয়ে টাকা নেওয়ার লিংক
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span> WhatsApp স্ট্যাটাসে দোকানের প্রচার করুন
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/10 transition-all cursor-pointer">
              ৭ দিনের জন্য ফ্রি ট্রায়াল নিন
            </button>
          </div>

          {/* Plan 3: Enterprise */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between border border-zinc-800 hover:border-zinc-700/80 transition-all reveal delay-200">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-zinc-100">বড় শোরুম (Enterprise)</h3>
                <p className="text-zinc-400 text-xs mt-1.5">একাধিক শাখা বা বড় শোরুমের জন্য</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-zinc-100">
                  ₹{billingCycle === "monthly" ? "১১৯৯" : "৯৯৯"}
                </span>
                <span className="text-xs text-zinc-400">/মাস</span>
              </div>
              
              <ul className="space-y-3.5 text-xs text-zinc-300 border-t border-zinc-800/80 pt-6">
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> যত খুশি কাস্টমার আর শাখার হিসাব রাখুন
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> <strong>২৫ টি এআই ক্রেডিট একদম ফ্রি পাবেন</strong>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> বিলে নিজের দোকানের ব্র্যান্ড ও লোগো রাখুন
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> সব কারিগর ও দোকানের সব কাজের ফুল ট্র্যাকিং
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-500 font-bold">✓</span> ২৪ ঘণ্টা ফোন ও চ্যাটে আমাদের সাপোর্ট
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 py-3 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 text-zinc-100 font-bold text-sm tracking-wide transition-all cursor-pointer">
              আমাদের সাথে কথা বলুন
            </button>
          </div>

        </div>

        {/* AI Credit Packs Section */}
        <div className="mt-20 border-t border-zinc-800 pt-16 max-w-5xl mx-auto reveal">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-2xl font-bold text-zinc-100">
              ⚡ এআই ক্রেডিট রিচার্জ প্যাক (AI Credit Packs)
            </h3>
            <p className="text-zinc-400 text-sm mt-2.5">
              এআই ড্রেস প্রিভিউ দেখতে প্রতিবার ১ ক্রেডিটের প্রয়োজন। আপনার ক্রেডিট শেষ হয়ে গেলে নিচের প্যাকগুলো রিচার্জ করতে পারবেন।
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            
            {/* Pack 1 */}
            <div className="glass-panel p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between items-center text-center space-y-4 hover:border-amber-500/30 transition-all duration-300">
              <div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider font-display">৫০ ক্রেডিট (Starter Pack)</div>
                <div className="text-3xl font-extrabold text-zinc-100 mt-2">₹১৯৯</div>
                <p className="text-zinc-500 text-[10px] mt-1">₹৩.৯৮ / ছবি</p>
              </div>
              <button className="w-full py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-100 font-bold text-xs cursor-pointer transition-all">
                প্যাক কিনুন
              </button>
            </div>

            {/* Pack 2 */}
            <div className="glass-panel p-6 rounded-2xl border-2 border-amber-500/40 relative flex flex-col justify-between items-center text-center space-y-4 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-amber-500/5">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-[9px] font-extrabold uppercase font-display">
                সেরা অফার
              </div>
              <div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider font-display">১৫০ ক্রেডিট (Standard Pack)</div>
                <div className="text-3xl font-extrabold text-zinc-100 mt-2">₹৪৯৯</div>
                <p className="text-zinc-500 text-[10px] mt-1">₹৩.৩৩ / ছবি</p>
              </div>
              <button className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs cursor-pointer transition-all">
                প্যাক কিনুন
              </button>
            </div>

            {/* Pack 3 */}
            <div className="glass-panel p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between items-center text-center space-y-4 hover:border-amber-500/30 transition-all duration-300">
              <div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider font-display">৫০০ ক্রেডিট (Value Pack)</div>
                <div className="text-3xl font-extrabold text-zinc-100 mt-2">₹১,২৯৯</div>
                <p className="text-zinc-500 text-[10px] mt-1">₹২.৬০ / ছবি</p>
              </div>
              <button className="w-full py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-100 font-bold text-xs cursor-pointer transition-all">
                প্যাক কিনুন
              </button>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
