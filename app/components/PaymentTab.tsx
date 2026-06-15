"use client";

import React, { useState } from "react";

export default function PaymentTab() {
  const [paymentAmount, setPaymentAmount] = useState("4500");
  const [customerNamePay, setCustomerNamePay] = useState("অভিষেক মুখার্জী");
  const [generatedLink, setGeneratedLink] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentStep, setPaymentStep] = useState<"gateway" | "pin" | "success">("gateway");
  const [upiPin, setUpiPin] = useState("");
  const [upiId, setUpiId] = useState("abhishek@oksbi");
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handleGeneratePaymentLink = (e: React.FormEvent) => {
    e.preventDefault();
    const mockLink = `https://tailorpoint.pay/invoice/tp-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedLink(mockLink);
    setPaymentCompleted(false);
    setPaymentStep("gateway");
  };

  const handleSimulatePayment = () => {
    setPaymentStep("pin");
  };

  const handleConfirmUpiPayment = () => {
    if (!upiPin) return;
    setPaymentStep("success");
    setTimeout(() => {
      setShowPaymentModal(false);
      setPaymentCompleted(true);
    }, 2000);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      
      {/* Left Link Maker Panel */}
      <div className="space-y-4 bg-zinc-950/60 border border-zinc-800/80 p-6 rounded-2xl">
        <div className="text-sm font-bold text-amber-400 font-display uppercase tracking-wider mb-2">
          🔗 পেমেন্ট লিংক বানানোর জায়গা (UPI)
        </div>
        
        <form onSubmit={handleGeneratePaymentLink} className="space-y-4">
          <div>
            <label className="block text-xs text-zinc-400 mb-1.5">গ্রাহকের নাম</label>
            <input
              type="text"
              value={customerNamePay}
              onChange={(e) => setCustomerNamePay(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1.5">বিলের টাকা (₹ রুপি)</label>
            <input
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/10 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            ⚡ লিংক বানান
          </button>
        </form>

        {generatedLink && (
          <div className="mt-4 p-3 bg-zinc-900 border border-zinc-800 rounded-xl space-y-2.5">
            <div className="text-[11px] text-zinc-400 font-semibold">কাস্টমারকে পাঠানোর লিংকটি নিচে দেখুন:</div>
            <div className="flex gap-2">
              <input
                type="text"
                value={generatedLink}
                readOnly
                className="bg-zinc-950 border border-zinc-800 rounded px-2 py-1.5 text-xs text-amber-400 font-mono flex-1 focus:outline-none"
              />
              <button
                onClick={() => setShowPaymentModal(true)}
                className="px-3.5 py-1.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs active:scale-95 transition-all cursor-pointer"
              >
                পেমেন্ট চেক
              </button>
            </div>
            <p className="text-[10px] text-zinc-500 leading-normal">
              * ডেমো পেমেন্ট চেক করতে পাশের বাটনে ক্লিক করুন। ইউপিআই (UPI) গেটওয়ের ডেমো চালু হয়ে যাবে।
            </p>
          </div>
        )}
      </div>

      {/* Right Gateway Mockup */}
      <div className="bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden flex flex-col p-6 min-h-[450px] lg:h-[380px] justify-center items-center relative text-center">
        
        {paymentCompleted ? (
          <div className="space-y-4 animate-float">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold font-display text-emerald-400">পেমেন্ট হয়ে গিয়েছে!</h4>
              <p className="text-xs text-zinc-400">
                ₹{paymentAmount} রুপি সরাসরি ব্যাংক অ্যাকাউন্টে ঢুকে গিয়েছে।
              </p>
            </div>
            <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-mono text-zinc-500">
              UPI Ref No: {Math.floor(100000000000 + Math.random() * 899999999999)}
            </div>
          </div>
        ) : generatedLink ? (
          <div className="space-y-5">
            <div className="w-14 h-14 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-zinc-200">পেমেন্ট লিংক রেডি হয়ে গিয়েছে</h4>
              <p className="text-xs text-zinc-400 px-8 leading-relaxed">
                লিংকটি কপি করে গ্রাহকের ফোনে পাঠিয়ে দিন। গ্রাহক পেমেন্ট করে দিলেই আপনার ড্যাশবোর্ডে স্ট্যাটাস সাথে সাথে বদলে যাবে।
              </p>
            </div>
            <button
              onClick={() => setShowPaymentModal(true)}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wide shadow-md shadow-amber-500/10 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              💸 ডেমো পেমেন্ট করে দেখুন
            </button>
          </div>
        ) : (
          <div className="text-zinc-500 text-xs max-w-xs leading-relaxed space-y-4">
            <svg className="w-10 h-10 mx-auto text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>বানানো পেমেন্ট লিংক কাস্টমার কীভাবে পেমেন্ট করবে তা দেখতে পাবেন।</p>
          </div>
        )}

        {/* Indian UPI GATEWAY MODAL OVERLAY */}
        {showPaymentModal && (
          <div className="absolute inset-0 bg-zinc-950/95 flex flex-col justify-center items-center p-6 z-20 animate-fade-in">
            <div className="w-full max-w-sm bg-[#0a2540] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-indigo-500/20">
              {/* UPI Header */}
              <div className="px-4 py-2.5 bg-[#0d3b66] flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-white font-extrabold text-sm tracking-wide font-display">UPI Gateway</span>
                  <span className="bg-emerald-500/20 text-[8px] text-emerald-400 font-bold px-1 py-0.5 rounded uppercase font-mono">Secure</span>
                </div>
                <button 
                  onClick={() => setShowPaymentModal(false)}
                  className="text-white/60 hover:text-white text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Gateway Steps */}
              <div className="p-4 bg-zinc-900 text-zinc-100 text-left space-y-3">
                
                {paymentStep === "gateway" && (
                  <div className="space-y-3 text-center">
                    <div className="text-zinc-400 text-xs font-semibold">মার্চেন্ট পেমেন্ট (Merchant Payment)</div>
                    <div className="text-amber-400 font-display text-2xl font-extrabold">₹{paymentAmount}.00</div>
                    
                    <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg text-left text-xs space-y-1.5 text-zinc-700">
                      <div><strong>মার্চেন্ট:</strong> TailorPoint Technologies</div>
                      <div><strong>অর্ডার নং:</strong> ORD-8032</div>
                    </div>

                    <div className="text-left space-y-1.5">
                      <label className="block text-[11px] text-zinc-400">আপনার ইউপিআই আইডি (UPI ID) লিখুন:</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="flex-1 bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-zinc-100 outline-none focus:border-indigo-500"
                          placeholder="e.g. mobile@upi"
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleSimulatePayment}
                      className="w-full py-2.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm tracking-wide active:scale-98 transition-all cursor-pointer"
                    >
                      টাকা দেওয়ার জন্য এগিয়ে যান
                    </button>
                  </div>
                )}

                {paymentStep === "pin" && (
                  <div className="space-y-3 text-left">
                    <div className="text-zinc-300 text-xs font-semibold text-center font-display">আপনার গোপন ইউপিআই পিন (UPI PIN) লিখুন</div>
                    <input
                      type="password"
                      placeholder="xxxxxx"
                      maxLength={6}
                      value={upiPin}
                      onChange={(e) => setUpiPin(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-indigo-500 outline-none rounded-lg px-4 py-2.5 text-lg tracking-[8px] text-center font-bold text-zinc-100"
                    />
                    <button
                      onClick={handleConfirmUpiPayment}
                      className="w-full py-2.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm tracking-wide active:scale-98 transition-all cursor-pointer"
                    >
                      পেমেন্ট কনফার্ম করুন (Confirm)
                    </button>
                  </div>
                )}

                {paymentStep === "success" && (
                  <div className="py-6 text-center space-y-3">
                    <svg className="animate-spin h-7 w-7 text-indigo-500 mx-auto" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <div className="text-sm font-bold text-zinc-300">পেমেন্ট হচ্ছে... একটু দাঁড়ান</div>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
