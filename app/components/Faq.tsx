"use client";

import React, { useState } from "react";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-zinc-900/30 border-y border-zinc-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 reveal">
          <h2 className="font-display text-3xl font-bold text-zinc-100 tracking-tight">
            কমন কিছু{" "}
            <span className="gold-gradient-text">
              প্রশ্ন ও উত্তর
            </span>
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            অ্যাপটি নিয়ে আপনার মনে কোনো প্রশ্ন থাকলে তার উত্তর নিচে দেখে নিন।
          </p>
        </div>

        <div className="space-y-4">
          
          {/* FAQ Item 1 */}
          <div className="glass-panel rounded-xl border border-zinc-800/80 overflow-hidden reveal">
            <button
              onClick={() => toggleFaq(1)}
              className="w-full py-4.5 px-6 text-left flex justify-between items-center text-zinc-200 hover:text-zinc-100 font-medium text-sm sm:text-base font-display transition-colors"
            >
              <span>১. এআই ড্রেস প্রিভিউ (AI Preview) কীভাবে কাজ করে?</span>
              <span className="text-lg font-mono text-amber-400">{openFaq === 1 ? "−" : "+"}</span>
            </button>
            {openFaq === 1 && (
              <div className="px-6 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-3 animate-fade-in">
                কাস্টমারের একটা ছবি আর কাপড়ের ছবি মোবাইলের ক্যামেরা দিয়ে তুলে আপলোড করে দিন। আমাদের এআই সাথে সাথে দুটোকে মিলিয়ে একটা সুন্দর ছবি বানিয়ে দেখাবে যে জামাটা সেলাই করার পর ওনাকে কেমন দেখাবে।
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="glass-panel rounded-xl border border-zinc-800/80 overflow-hidden reveal delay-100">
            <button
              onClick={() => toggleFaq(2)}
              className="w-full py-4.5 px-6 text-left flex justify-between items-center text-zinc-200 hover:text-zinc-100 font-medium text-sm sm:text-base font-display transition-colors"
            >
              <span>২. হোয়াটসঅ্যাপে মাপ পাঠাতে কাস্টমারের কোনো বাড়তি টাকা লাগবে কি?</span>
              <span className="text-lg font-mono text-amber-400">{openFaq === 2 ? "−" : "+"}</span>
            </button>
            {openFaq === 2 && (
              <div className="px-6 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-3 animate-fade-in">
                Na, একটুও নয়। এই মেসেজটি কাস্টমারের মোবাইলে সাধারণ হোয়াটসঅ্যাপ মেসেজের মতোই যাবে, এর জন্য কাস্টমারের কোনো বাড়তি টাকা বা চার্জ লাগবে না।
              </div>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div className="glass-panel rounded-xl border border-zinc-800/80 overflow-hidden reveal delay-200">
            <button
              onClick={() => toggleFaq(3)}
              className="w-full py-4.5 px-6 text-left flex justify-between items-center text-zinc-200 hover:text-zinc-100 font-medium text-sm sm:text-base font-display transition-colors"
            >
              <span>৩. পেমেন্ট লিংক দিয়ে কাস্টমার কীভাবে টাকা মেটাবে?</span>
              <span className="text-lg font-mono text-amber-400">{openFaq === 3 ? "−" : "+"}</span>
            </button>
            {openFaq === 3 && (
              <div className="px-6 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-3 animate-fade-in">
                আপনি যখন পেমেন্ট লিংক বানিয়ে কাস্টমারকে হোয়াটসঅ্যাপে পাঠাবেন, কাস্টমার লিংকে ক্লিক করলে একটা পেমেন্ট পেজ খুলবে। সেখানে কাস্টমার ইউপিআই (UPI), PhonePe, Paytm বা Google Pay দিয়ে নিজের পিন টাইপ করে টাকা মিটিয়ে দিতে পারবেন। টাকা সরাসরি আপনার ব্যাংক অ্যাকাউন্টে ঢুকে যাবে।
              </div>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div className="glass-panel rounded-xl border border-zinc-800/80 overflow-hidden reveal delay-300">
            <button
              onClick={() => toggleFaq(4)}
              className="w-full py-4.5 px-6 text-left flex justify-between items-center text-zinc-200 hover:text-zinc-100 font-medium text-sm sm:text-base font-display transition-colors"
            >
              <span>৪. কাস্টমারের মাপ আর সব হিসাব কতটা সেফ বা সুরক্ষিত থাকবে?</span>
              <span className="text-lg font-mono text-amber-400">{openFaq === 4 ? "−" : "+"}</span>
            </button>
            {openFaq === 4 && (
              <div className="px-6 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-3 animate-fade-in">
                আমরা সুরক্ষাকে সবচেয়ে বেশি গুরুত্ব দিই। আপনার দোকানের সমস্ত ডাটা ও মাপ একদম সুরক্ষিত ক্লাউড সার্ভারে সেভ করা থাকে। তাই খাতা হারানোর বা ডাটা চুরি হওয়ার কোনো ভয় নেই।
              </div>
            )}
          </div>

          {/* FAQ Item 5 */}
          <div className="glass-panel rounded-xl border border-zinc-800/80 overflow-hidden reveal delay-400">
            <button
              onClick={() => toggleFaq(5)}
              className="w-full py-4.5 px-6 text-left flex justify-between items-center text-zinc-200 hover:text-zinc-100 font-medium text-sm sm:text-base font-display transition-colors"
            >
              <span>৫. ফ্রি এআই ক্রেডিট শেষ হয়ে গেলে কী হবে? কীভাবে রিচার্জ করব?</span>
              <span className="text-lg font-mono text-amber-400">{openFaq === 5 ? "−" : "+"}</span>
            </button>
            {openFaq === 5 && (
              <div className="px-6 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-3 animate-fade-in">
                আপনার ফ্রি ক্রেডিট শেষ হয়ে গেলে কোনো চিন্তা নেই। আপনি সরাসরি আপনার ড্যাশবোর্ড থেকে সুবিধাজনক ক্রেডিট রিচার্জ প্যাক (যেমন: ৫০, ১৫০ বা ৫০০ ক্রেডিট) ইউপিআই (UPI) দিয়ে কিনতে পারবেন। কেনা ক্রেডিটগুলোর কোনো মেয়াদের সীমাবদ্ধতা নেই, অর্থাৎ যতদিন খুশি ব্যবহার করতে পারবেন।
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
