"use client";

import React, { useState } from "react";

interface InvoiceItem {
  id: number;
  name: string;
  qty: number;
  price: number;
}

export default function BillingTab() {
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([
    { id: 1, name: "প্রিমিয়াম শেরওয়ানি সেলাই", qty: 1, price: 3500 },
    { id: 2, name: "কাস্টম ফিট ট্রাউজার সেলাই", qty: 1, price: 1000 },
  ]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");

  const handleAddInvoiceItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName || !newItemPrice) return;
    
    setInvoiceItems([
      ...invoiceItems,
      {
        id: Date.now(),
        name: newItemName,
        qty: 1,
        price: parseFloat(newItemPrice) || 0,
      },
    ]);
    setNewItemName("");
    setNewItemPrice("");
  };

  const handleDeleteInvoiceItem = (id: number) => {
    setInvoiceItems(invoiceItems.filter(item => item.id !== id));
  };

  // Calculate Invoice Totals
  const subtotal = invoiceItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const vat = Math.round(subtotal * 0.05); // 5% GST
  const total = subtotal + vat;

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      
      {/* Left Side: Invoice Items Entry */}
      <div className="space-y-4 bg-zinc-950/60 border border-zinc-800/80 p-6 rounded-2xl">
        <div className="text-sm font-bold text-amber-400 font-display uppercase tracking-wider mb-2">
          ✍️ বিলে নতুন আইটেম যোগ করুন
        </div>

        <form onSubmit={handleAddInvoiceItem} className="grid sm:grid-cols-12 gap-3 items-end">
          <div className="sm:col-span-7">
            <label className="block text-[11px] text-zinc-400 mb-1">কী কাজ (যেমন শার্ট বা শেরওয়ানি)</label>
            <input
              type="text"
              placeholder="যেমন: নতুন ডিজাইনের শার্ট সেলাই"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-100 focus:outline-none focus:border-amber-500"
              required
            />
          </div>
          <div className="sm:col-span-3">
            <label className="block text-[11px] text-zinc-400 mb-1">দাম (₹)</label>
            <input
              type="number"
              placeholder="যেমন: ১৫০০"
              value={newItemPrice}
              onChange={(e) => setNewItemPrice(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-100 focus:outline-none focus:border-amber-500"
              required
            />
          </div>
          <button
            type="submit"
            className="sm:col-span-2 py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs active:scale-95 transition-all cursor-pointer flex items-center justify-center"
          >
            যোগ করুন
          </button>
        </form>

        {/* Invoice Table */}
        <div className="border border-zinc-800/80 rounded-xl overflow-hidden mt-3">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-900 text-[10px] uppercase font-bold text-zinc-400 border-b border-zinc-800">
                <th className="py-2.5 px-3">আইটেম</th>
                <th className="py-2.5 px-3 text-right">দাম (₹)</th>
                <th className="py-2.5 px-3 text-center">বাদ দিন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {invoiceItems.map((item) => (
                <tr key={item.id} className="text-xs text-zinc-300">
                  <td className="py-2.5 px-3">{item.name}</td>
                  <td className="py-2.5 px-3 text-right">₹{item.price}</td>
                  <td className="py-2.5 px-3 text-center">
                    <button
                      onClick={() => handleDeleteInvoiceItem(item.id)}
                      className="text-red-500 hover:text-red-400 font-bold text-xs p-1 cursor-pointer"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
              {invoiceItems.length === 0 && (
                <tr>
                  <td colSpan={3} className="py-6 text-center text-zinc-500 text-xs">
                    বিলে কোনো আইটেম যোগ করা নেই। উপরে লিখে যোগ করুন।
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Side: PDF Invoice Preview Mockup */}
      <div className="bg-white text-slate-900 rounded-2xl p-5 shadow-2xl space-y-4 flex flex-col font-sans border-2 border-amber-500/10">
        
        {/* Invoice Header */}
        <div className="flex justify-between items-start pb-4 border-b border-slate-200">
          <div>
            <div className="text-base font-bold font-display text-amber-600">নিউ ক্লাসিক টেইলার্স</div>
            <div className="text-[9px] text-slate-500 font-sans mt-0.5">সল্টলেক সেক্টর ৫, কলকাতা, ৭০০০৯১</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold font-display text-slate-900 tracking-wider">ক্যাশ মেমো / বিল</div>
            <div className="text-[9px] text-slate-500 mt-0.5">রসিদ নং: #TP-8032</div>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="grid grid-cols-2 gap-4 text-[10px] text-slate-600">
          <div>
            <span className="block font-semibold">গ্রাহকের নাম-ঠিকানা:</span>
            <span>নাম: অভিষেক মুখার্জী</span><br />
            <span>ফোন: ০৯৮৭৬৫৪৩২১০</span>
          </div>
          <div className="text-right">
            <span className="block font-semibold">তারিখ ও সময়:</span>
            <span>{new Date().toLocaleDateString("bn-IN")}</span><br />
            <span>অবস্থা: <strong className="text-emerald-600 font-bold">পরিশোধিত (Paid)</strong></span>
          </div>
        </div>

        {/* Items List */}
        <div className="space-y-2 mt-2">
          <div className="grid grid-cols-12 text-[10px] font-bold text-slate-700 border-b border-slate-200 pb-1.5">
            <span className="col-span-8">আইটেম</span>
            <span className="col-span-4 text-right">দাম (₹)</span>
          </div>
          
          {invoiceItems.map((item) => (
            <div key={item.id} className="grid grid-cols-12 text-[10px] text-slate-600">
              <span className="col-span-8">{item.name}</span>
              <span className="col-span-4 text-right">₹{item.price}</span>
            </div>
          ))}

        </div>

        {/* Total Section */}
        <div className="border-t border-slate-200 pt-3 space-y-1.5 text-[10px] text-slate-700 w-1/2 self-end">
          <div className="flex justify-between">
            <span>মোট দাম:</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>জিএসটি (GST ৫%):</span>
            <span>₹{vat}</span>
          </div>
          <div className="flex justify-between font-bold text-slate-900 border-t border-slate-200 pt-1.5 text-xs">
            <span>সব মিলিয়ে:</span>
            <span>₹{total}</span>
          </div>
        </div>

        {/* Receipt Footer */}
        <div className="text-center text-[9px] text-slate-400 border-t border-slate-100 pt-3">
          * TailorPoint CRM অ্যাপ দিয়ে তৈরি করা ডিজিটাল মেমো *
        </div>
      </div>

    </div>
  );
}
