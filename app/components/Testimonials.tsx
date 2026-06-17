"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            {t("testimonials.heading")}
          </h2>
          <p className="text-zinc-400 text-base mt-4">
            {t("testimonials.subheading")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Review 1 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 space-y-4 reveal-left">
            <div className="flex text-amber-400 text-sm">★★★★★</div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {language === "bn" ? (
                <>&ldquo;টেইলরপয়েন্ট আসার পর আমার দোকানের খাতার দিন শেষ। কাস্টমারদের ফোনে ১ ক্লিকে মাপ পাঠিয়ে দেওয়ায় আমাদের মান অনেক বেড়েছে। আর ইউপিআই পেমেন্ট লিংকের কারণে এখন বকেয়া টাকা আদায় করা অনেক সহজ!&rdquo;</>
              ) : (
                <>&ldquo;Ever since we switched to TailorPoint, the physical ledger is gone. Sharing sizes via WhatsApp with 1-click has boosted customer trust. Collecting dues via UPI link has cut collection delays by 80%!&rdquo;</>
              )}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <img
                src="/avatar_arindam.png"
                alt={language === "bn" ? "অরিন্দম মুখার্জী" : "Arindam Mukherjee"}
                className="w-10 h-10 rounded-full object-cover border border-amber-500/30 shadow-md"
              />
              <div>
                <h4 className="text-sm font-semibold text-zinc-100">
                  {language === "bn" ? "অরিন্দম মুখার্জী" : "Arindam Mukherjee"}
                </h4>
                <span className="text-[10px] text-zinc-500">
                  {language === "bn" ? "মালিক, এলিগেন্ট ফিট টেইলার্স, কলকাতা" : "Owner, Elegant Fit Tailors, Kolkata"}
                </span>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 space-y-4 reveal delay-100">
            <div className="flex text-amber-400 text-sm">★★★★★</div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {language === "bn" ? (
                <>&ldquo;আমাদের সবচেয়ে ভালো লাগে এআই ড্রেস প্রিভিউ। কাপড়ের টুকরো দেখে আগে কাস্টমাররা ভাবত মানাবে কি না। এখন এআই দিয়ে তৈরি সুন্দর ছবি দেখে ওনারা সাথে সাথে অর্ডার কনফার্ম করে দেন। অসাধারণ সার্ভিস!&rdquo;</>
              ) : (
                <>&ldquo;We absolutely love the AI Dress Preview. Customers used to hesitate looking at a fabric swatch. Now, with a premium AI visual preview, they approve the style and book orders instantly!&rdquo;</>
              )}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <img
                src="/avatar_tania.png"
                alt={language === "bn" ? "তানিয়া সেনগুপ্ত" : "Tania Sengupta"}
                className="w-10 h-10 rounded-full object-cover border border-amber-500/30 shadow-md"
              />
              <div>
                <h4 className="text-sm font-semibold text-zinc-100">
                  {language === "bn" ? "তানিয়া সেনগুপ্ত" : "Tania Sengupta"}
                </h4>
                <span className="text-[10px] text-zinc-500">
                  {language === "bn" ? "ফাউন্ডার, রূপসী ফ্যাশন ও বুটিক, শিলিগুড়ি" : "Founder, Rupasi Fashion & Boutique, Siliguri"}
                </span>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 space-y-4 reveal-right delay-200">
            <div className="flex text-amber-400 text-sm">★★★★★</div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {language === "bn" ? (
                <>&ldquo;ডিজিটাল বিলিং সিস্টেমটি আমাদের খুব কাজে আসে। কারিগর কখন কাজ শুরু করল আর কখন ডেলিভারি হবে সব এক জায়গায় দেখা যায়। আমাদের কাজের স্পিড দ্বিগুণ হয়ে গিয়েছে। দারুণ সফটওয়্যার!&rdquo;</>
              ) : (
                <>&ldquo;The digital invoice layout is perfect. Tracking tailors' progress and order timelines in one dashboard has streamlined everything. Our workshop productivity has doubled!&rdquo;</>
              )}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <img
                src="/avatar_sanjay.png"
                alt={language === "bn" ? "সঞ্জয় দত্ত" : "Sanjay Dutt"}
                className="w-10 h-10 rounded-full object-cover border border-amber-500/30 shadow-md"
              />
              <div>
                <h4 className="text-sm font-semibold text-zinc-100">
                  {language === "bn" ? "সঞ্জয় দত্ত" : "Sanjay Dutt"}
                </h4>
                <span className="text-[10px] text-zinc-500">
                  {language === "bn" ? "ম্যানেজার, রয়্যাল কালেকশন টেইলার্স, দুর্গাপুর" : "Manager, Royal Collection Tailors, Durgapur"}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
